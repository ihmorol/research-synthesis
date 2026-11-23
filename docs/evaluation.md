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

## Readiness checks

On 2026-11-23, three independent fictional prompts were exercised sequentially in one
read-only evaluator context with the updated readiness instructions explicitly loaded.
The outputs passed the stated checks: selected source snippets supported a bounded
synthesis without requiring a finished review; a topic-only request produced a request
for sources instead of invented citations; and a finished draft without its papers was
labelled unverifiable rather than treated as evidence. These were in-session smoke tests,
not natural-trigger or genuine-paper validation.

## Workspace-context check

A separate fictional file workspace was tested on 2026-11-23 using a short request:
"Synthesize the literature for this project in chat." The evaluator found the existing
protocol, selection table, nomenclature, and source snippets with bounded local reads.
It reused the question and P01/P02 without asking for another upload or rescreening,
preserved the exhaustion/burnout distinction, and made no writes or external calls.
The displayed output passed those checks. This is a single forced-load test of a small
fixture, not evidence that every workspace or access boundary is handled correctly.

## Compact instruction scope

The always-loaded skill was reduced from 1,654 to 1,029 whitespace-separated words,
and the README from 1,761 to 829, compared with the expanded local workspace/readiness
draft. Task details remain in on-demand references. These counts measure text size,
not tokenizer output, model cost, or runtime savings. The installed package has no
new dependency on the brevity/writing skills whose guidance was inspected.

## Compact behavior rerun

A first compact-test attempt failed at the runner level with no model output; it
produced no behavioral result. A subsequent read-only rerun reused the earlier
workspace evaluator's context and consulted the compact instructions and relevant
source passages. Its 104-word synthesis retained the correlation, source locators,
construct distinction, causal limit, and snippet scope. A 45-word no-source response
requested missing evidence without invented citations or automatic browsing. Both
outputs passed their stated checks. This rerun does not test fresh-session discovery
or measure token savings.

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
