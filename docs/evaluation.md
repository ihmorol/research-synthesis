# Evaluation record

## Initial behavioral checks

On 2026-11-23, an unpublished draft was exercised against three fictional source cases. The skill instructions were explicitly loaded for the evaluator. Cases ran sequentially with reused evaluator context, with each case restricted to its own sources.

| Case | Observed outcome |
|---|---|
| Screening | Included an eligible trial and systematic review, left incomplete eligibility uncertain, excluded an out-of-range report, explained the reading order, and created no files. |
| Apparent disagreement | Compared similar estimates and their uncertainty without inferring a contradiction from significance alone; linked duplicate reports to one study; marked inaccessible bias information unresolved. |
| Draft audit | Flagged causal, construct, population and numerical overreach; corrected 410 to 412; did not interpret a correlation as a percentage reduction; kept secondary attribution separate from support verdicts. |

All specified acceptance items passed in those runs. This was a forced-load model test using snippets, not validation with actual papers, independent human review, or a test of automatic skill discovery.

The first public version changes documentation, package metadata, fictional-source labels, report/version mapping, evidence schemas, and scoped artifact paths. The earlier behavioral results are a baseline, not proof that every change has been behaviorally retested. Rerun the [cases](../skills/research-synthesis/assets/eval-cases.md) when assessing a host or a new revision.

## Repository checks

Run:

```sh
node scripts/validate.mjs
node --test scripts/validate.test.mjs
```

The validator checks the supported frontmatter format, naming and description limits, version/changelog agreement, license consistency, workflow completeness, local links, code fences, and a few obvious secret/path/residue patterns. It rejects executables inside the installable skill folder. It uses a deliberately narrow parser for this repository's frontmatter, not a general YAML implementation or the official `skills-ref` validator.

The tests introduce known defects into temporary copies to confirm the validator rejects them. CI runs these checks without model calls, credentials for research services, or user documents. These are structural checks, not a full secret scanner or a security audit.

## Evaluation still needed

- Source checking against genuine papers, including numerical tables and page-number differences.
- Scanned PDFs, OCR errors, unreadable files, multilingual papers, and large collections.
- Automatic triggering, negative triggers, and host-specific installation paths.
- Prompt injection and privacy behavior under the actual agent's permissions.
- Expert acceptance of eligibility, extraction, methods adaptation, and confidence judgments.
- Fresh-session behavioral reruns for all workflows, not only the three initial cases.

Record failed checks as well as passes. Name the actual host/model, task, source access, tool actions, and unresolved limitations. A second pass by the same model is not an independent reviewer.
