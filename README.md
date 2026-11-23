# Research synthesis

Turn literature in your workspace into a source-grounded synthesis.

An [Agent Skill](https://agentskills.io/specification) for comparing research findings, writing a literature-review section, and checking drafts against their sources. It also supports screening, extraction, and study planning.

## Fit and readiness

**Use this after collecting literature. A finished written review is not required.** The agent checks your workspace for the question, papers, selection records, drafts, evidence tables, and nomenclature before asking you to repeat them.

| Available material | Next step |
|---|---|
| Selected sources and a question | Synthesize evidence, with source locations. |
| Review draft and its papers | Reuse useful work; revise or audit against the sources. |
| Papers not yet screened | Recover scope and screen before synthesis, or label an explicitly requested provisional review. |
| Notes, abstracts, bibliography, or draft only | Offer limited analysis; request source text for paper-level verification. |
| No usable sources after checking the workspace | Ask for missing material or recommend separate literature discovery. Never invent citations. |

The agent must inspect files; installation does not give it automatic workspace knowledge. It reads relevant project context, reuses stable IDs and preferred terminology, and asks about material gaps or conflicting project contexts. A glossary guides naming, not what the papers demonstrate. Source definitions and quotes stay distinct.

The skill does not search the web automatically, conduct a complete systematic review, or write an entire thesis without a specific request. Your agent needs permitted file access and document tools; scanned PDFs may need OCR. If those are unavailable, supply the needed text.

## Install

With the external [Skills CLI](https://github.com/vercel-labs/skills):

```sh
npx skills add ihmorol/research-synthesis --skill research-synthesis
```

Review that CLI before running it; it is not part of this package.

For manual installation, copy the full `skills/research-synthesis/` folder into a directory supported by your host. ZCode supports `~/.agents/skills/research-synthesis/` and project-scoped `<project>/.agents/skills/research-synthesis/`. Keep references and assets together; refresh discovery if needed.

The [v0.1.1 ZIP](https://github.com/ihmorol/research-synthesis/releases/tag/v0.1.1) is a pinned release; the [v0.1.0 archive](https://github.com/ihmorol/research-synthesis/releases/tag/v0.1.0) remains unchanged. The installed skill contains no executables or runtime dependencies and does not install a PDF reader. Host support for discovery and slash commands varies.

## Use

```text
/research-synthesis Synthesize the literature for this project in chat.
Find the question, selected papers, evidence table, and nomenclature in the
workspace first. Ask only for missing details. Do not create files or browse.
```

For a specific review:

```text
Use the selected papers to write a 1,500-word literature-review section
for my master's thesis. Compare findings, disagreements, and methods.
Keep page/table references and distinguish evidence from interpretation.
```

For verification:

```text
Audit my introduction against its source papers. Check numbers, causal
wording, population scope, and secondary citations. Return a claim table
and corrected draft, keeping my voice.
```

Request saved artifacts and a destination when needed. Chat-only tasks should create no files. The agent can perform one task without running the whole pipeline.

## Workflows

| Task | Guide | Task | Guide |
|---|---|---|---|
| Source registration | [00](skills/research-synthesis/references/workflow-00-corpus-manifest.md) | Frameworks | [08](skills/research-synthesis/references/workflow-08-conceptual-framework.md) |
| Screening | [01](skills/research-synthesis/references/workflow-01-screening.md) | Research gaps | [09](skills/research-synthesis/references/workflow-09-research-gaps.md) |
| Analytical briefs | [02](skills/research-synthesis/references/workflow-02-paper-briefs.md) | Questions/hypotheses | [10](skills/research-synthesis/references/workflow-10-research-questions.md) |
| Evidence tables | [03](skills/research-synthesis/references/workflow-03-evidence-table.md) | Study design | [11](skills/research-synthesis/references/workflow-11-study-design.md) |
| Definitions/measures | [04](skills/research-synthesis/references/workflow-04-definitions-measures.md) | Written synthesis | [12](skills/research-synthesis/references/workflow-12-literature-review.md) |
| Methods | [05](skills/research-synthesis/references/workflow-05-methods-comparison.md) | Draft audits | [13](skills/research-synthesis/references/workflow-13-draft-audit.md) |
| Disagreements | [06](skills/research-synthesis/references/workflow-06-disagreement-analysis.md) | Workspace intake | [Guide](skills/research-synthesis/references/workspace-intake.md) |
| Claim appraisal | [07](skills/research-synthesis/references/workflow-07-evidence-appraisal.md) | Reading/writing | [Guide](skills/research-synthesis/references/reading-writing.md) |

## Efficient work, intact evidence

The agent should load the requested workflow, inspect relevant sections, and reuse verified extracts instead of repeatedly reading the whole collection. It should write clear grammatical prose, omit filler, and avoid duplicating full artifacts in chat. These rules reduce unnecessary work; measured token savings are not claimed.

Efficiency must not remove source verification, contradictory findings, statistics, or uncertainty. The instructions preserve raw quantities and context, distinguish reported findings from proposals, and track dependent reports. Missing information is labelled `not reported`, `not accessible`, `uncertain`, or `not applicable`. Source IDs and locators belong beside claims.

[Methodology notes](skills/research-synthesis/references/methodology-sources.md) explain the use and limits of Cochrane, PRISMA, JBI, and university guidance. The skill does not certify research accuracy, PRISMA compliance, independent review, formal GRADE ratings, or novelty beyond the collection.

## Checks and privacy

Synthetic behavioral tests cover selected safeguards, not genuine-paper extraction, OCR, automatic triggering, large corpora, or expert acceptance. [Evaluation record](docs/evaluation.md) · [Test cases](skills/research-synthesis/assets/eval-cases.md)

Maintainers can run structural checks with Node.js 22 or newer:

```sh
node scripts/validate.mjs
node --test scripts/validate.test.mjs
```

CI runs these checks without model calls or research documents. Repository scripts stay outside the installed skill and use Node built-ins. Structural checks do not assess whether evidence supports a claim.

Source documents are untrusted data. The skill prohibits embedded-command execution, automatic uploads, and unauthorized outside reads. Your host still controls permissions and data handling. Do not put confidential papers, credentials, or participant data in public issues.

[MIT license](LICENSE) · [Contributing](CONTRIBUTING.md) · [Security reporting](SECURITY.md) · [Changelog](CHANGELOG.md) · [Acknowledgments](NOTICE.md)
