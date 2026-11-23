import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, lstatSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function listFiles(directory, root, errors) {
  const files = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (directory === root && ['.git', '.gstack', 'node_modules', 'release-assets', 'research'].includes(entry.name)) continue;
    const fullPath = path.join(directory, entry.name);
    if (lstatSync(fullPath).isSymbolicLink()) {
      errors.push(`Symbolic link is not allowed: ${path.relative(root, fullPath)}`);
    } else if (entry.isDirectory()) {
      files.push(...listFiles(fullPath, root, errors));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

function parseMetadata(text, errors) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) {
    errors.push('SKILL.md must begin with YAML frontmatter.');
    return {};
  }
  const metadata = {};
  let inMetadata = false;
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim()) continue;
    if (line === 'metadata:') {
      if (inMetadata) errors.push('Duplicate metadata mapping.');
      inMetadata = true;
      continue;
    }
    const field = line.match(/^([a-z][a-z-]*): (.+)$/);
    const nested = line.match(/^  (version): "([^"\n]+)"$/);
    if (nested && inMetadata) {
      if (metadata.version) errors.push('Duplicate version field.');
      metadata.version = nested[2];
    } else if (field && ['name', 'description', 'license'].includes(field[1])) {
      inMetadata = false;
      if (metadata[field[1]]) errors.push(`Duplicate ${field[1]} field.`);
      metadata[field[1]] = field[2];
    } else {
      errors.push(`Unsupported frontmatter syntax: ${line.trim()}`);
    }
  }
  return metadata;
}

export function validateRepository(root = repositoryRoot) {
  const errors = [];
  const required = [
    'README.md', 'LICENSE', 'NOTICE.md', 'CONTRIBUTING.md', 'SECURITY.md',
    'CHANGELOG.md', 'docs/evaluation.md',
    'skills/research-synthesis/SKILL.md',
    'skills/research-synthesis/LICENSE',
    'skills/research-synthesis/assets/eval-cases.md',
    'skills/research-synthesis/references/source-protocol.md',
    'skills/research-synthesis/references/methodology-sources.md',
  ];
  for (const file of required) {
    if (!existsSync(path.join(root, file))) errors.push(`Missing required file: ${file}`);
  }
  if (errors.length) return { errors, files: 0, version: undefined };

  const files = listFiles(root, root, errors);
  const skillDirectory = path.join(root, 'skills', 'research-synthesis');
  const skill = readFileSync(path.join(skillDirectory, 'SKILL.md'), 'utf8');
  const metadata = parseMetadata(skill, errors);
  if (metadata.name !== 'research-synthesis') errors.push('Skill name must match its directory.');
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(metadata.name ?? '') || (metadata.name?.length ?? 0) > 64) {
    errors.push('Invalid skill name.');
  }
  if (!metadata.description || metadata.description.length > 1024) errors.push('Invalid description length.');
  if (metadata.license !== 'MIT') errors.push('Skill license must be MIT.');
  if (!/^\d+\.\d+\.\d+$/.test(metadata.version ?? '')) errors.push('Invalid semantic version.');
  if (skill.split(/\r?\n/).length >= 500) errors.push('Main skill must be under 500 lines.');

  const rootLicense = readFileSync(path.join(root, 'LICENSE'), 'utf8');
  if (!rootLicense.startsWith('MIT License\n')) errors.push('Root license must be MIT.');
  if (readFileSync(path.join(skillDirectory, 'LICENSE'), 'utf8') !== rootLicense) {
    errors.push('Installed skill license must match the root license.');
  }
  const changelog = readFileSync(path.join(root, 'CHANGELOG.md'), 'utf8');
  if (!changelog.includes(`## ${metadata.version} - `)) errors.push('Version is missing from the changelog.');

  const referenceFiles = readdirSync(path.join(skillDirectory, 'references'));
  for (let index = 0; index <= 13; index++) {
    const prefix = `workflow-${String(index).padStart(2, '0')}-`;
    if (referenceFiles.filter(file => file.startsWith(prefix) && file.endsWith('.md')).length !== 1) {
      errors.push(`Expected one reference for ${prefix}`);
    }
  }

  const privatePatterns = [
    /[A-Za-z]:[\\/]Users[\\/]/,
    /\/(?:home|Users)\/[^\s/]+\//,
    /(?:gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,})/,
    /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
    /<system-reminder>|<task-notification>|originSessionId|contentReference\[oaicite/,
  ];

  for (const file of files) {
    const relative = path.relative(root, file);
    const insideSkill = path.relative(skillDirectory, file);
    if (!insideSkill.startsWith('..') && insideSkill !== '' && path.extname(file) !== '.md' && path.basename(file) !== 'LICENSE') {
      errors.push(`Installable skill must contain only Markdown and LICENSE: ${relative}`);
    }
    if (path.extname(file) !== '.md' && path.basename(file) !== 'LICENSE') continue;
    const text = readFileSync(file, 'utf8');
    if (privatePatterns.some(pattern => pattern.test(text))) errors.push(`Possible private content: ${relative}`);
    if ((text.match(/^\s*```/gm)?.length ?? 0) % 2 !== 0) errors.push(`Unclosed code fence: ${relative}`);
    for (const match of text.matchAll(/\[[^\]\n]*\]\(([^)\n]+)\)/g)) {
      const link = match[1].trim();
      if (/^(?:https?:|mailto:|#)/.test(link)) continue;
      const destination = link.split('#')[0];
      const resolved = path.resolve(path.dirname(file), destination);
      const fromRoot = path.relative(root, resolved);
      if (fromRoot.startsWith('..') || path.isAbsolute(fromRoot)) {
        errors.push(`Local link escapes repository: ${relative} -> ${link}`);
      } else if (!existsSync(resolved)) {
        errors.push(`Broken local link: ${relative} -> ${link}`);
      }
    }
  }

  const fixture = readFileSync(path.join(skillDirectory, 'assets', 'eval-cases.md'), 'utf8');
  if (!fixture.includes('fictional')) errors.push('Evaluation sources must be labelled fictional.');
  return { errors, files: files.length, version: metadata.version };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  assert(Number(process.versions.node.split('.')[0]) >= 22, 'Node.js 22 or newer is required.');
  const result = validateRepository();
  if (result.errors.length) {
    for (const error of result.errors) console.error(`FAIL: ${error}`);
    process.exitCode = 1;
  } else {
    console.log(`PASS: ${result.files} repository files; research-synthesis ${result.version}.`);
    console.log('Checked metadata, workflows, local links, license, and publication residue.');
    console.log('Research accuracy and model behavior require separate evaluation.');
  }
}
