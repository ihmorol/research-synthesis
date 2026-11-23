import assert from 'node:assert/strict';
import { test } from 'node:test';
import { cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { repositoryRoot, validateRepository } from './validate.mjs';

function withCopy(run) {
  const temporary = mkdtempSync(path.join(os.tmpdir(), 'research-synthesis-test-'));
  const root = path.join(temporary, 'repository');
  try {
    cpSync(repositoryRoot, root, {
      recursive: true,
      filter: source => path.dirname(source) !== repositoryRoot || !['.git', '.gstack', 'node_modules', 'release-assets', 'research'].includes(path.basename(source)),
    });
    run(root);
  } finally {
    rmSync(temporary, { recursive: true, force: true });
  }
}

function mutateSkill(root, transform) {
  const file = path.join(root, 'skills/research-synthesis/SKILL.md');
  writeFileSync(file, transform(readFileSync(file, 'utf8')));
}

function hasError(root, expected) {
  assert(validateRepository(root).errors.some(error => error.includes(expected)));
}

test('repository passes structural validation', () => {
  assert.deepEqual(validateRepository().errors, []);
});

test('rejects a name that differs from the directory', () => withCopy(root => {
  mutateSkill(root, text => text.replace('name: research-synthesis', 'name: wrong-name'));
  hasError(root, 'Skill name must match');
}));

test('rejects a description longer than 1024 characters', () => withCopy(root => {
  mutateSkill(root, text => text.replace(/^description:.*$/m, `description: ${'x'.repeat(1025)}`));
  hasError(root, 'description length');
}));

test('rejects missing workflow references', () => withCopy(root => {
  rmSync(path.join(root, 'skills/research-synthesis/references/workflow-01-screening.md'));
  hasError(root, 'Expected one reference for workflow-01-');
  hasError(root, 'Broken local link');
}));

test('rejects executable files inside the installed skill', () => withCopy(root => {
  writeFileSync(path.join(root, 'skills/research-synthesis/execute.js'), '');
  hasError(root, 'only Markdown and LICENSE');
}));

test('rejects executable files in nested directories with excluded root names', () => withCopy(root => {
  for (const name of ['.git', '.gstack', 'node_modules', 'release-assets', 'research']) {
    const directory = path.join(root, 'skills/research-synthesis/assets', name);
    mkdirSync(directory, { recursive: true });
    writeFileSync(path.join(directory, 'tool.js'), '');
  }
  const errors = validateRepository(root).errors.filter(error => error.includes('only Markdown and LICENSE'));
  assert.equal(errors.length, 5);
}));

test('rejects private absolute paths in documentation', () => withCopy(root => {
  const privatePath = ['C:', 'Users', 'Example', 'private.pdf'].join('\\');
  writeFileSync(path.join(root, 'docs/private.md'), privatePath);
  hasError(root, 'Possible private content');
}));

test('rejects mismatched package and repository licenses', () => withCopy(root => {
  writeFileSync(path.join(root, 'skills/research-synthesis/LICENSE'), 'Different terms\n');
  hasError(root, 'license must match');
}));

test('rejects unsupported frontmatter instead of pretending to parse it', () => withCopy(root => {
  mutateSkill(root, text => text.replace(/^description:.*$/m, 'description: |\n  Unsupported block scalar'));
  hasError(root, 'Unsupported frontmatter syntax');
}));

test('rejects links that escape the repository', () => withCopy(root => {
  writeFileSync(path.join(root, 'docs/escape.md'), '[private file](../../../private.md)\n');
  hasError(root, 'Local link escapes repository');
}));
