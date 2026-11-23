# Research synthesis

Work through a collection of papers without losing track of what each source actually supports.

Research synthesis is an [Agent Skill](https://agentskills.io/specification) for screening papers, extracting evidence, comparing findings, planning a study, and checking a draft against its sources. It works with papers you supply. It doesn't search the web for you or turn an arbitrary reading list into a systematic review.

The skill is a set of Markdown instructions. Your agent reads the workflow it needs, uses its existing document tools, and returns a table, brief, review, or study proposal with source locations and unresolved questions made visible.

## Install

With the [Skills CLI](https://github.com/vercel-labs/skills):

```sh
npx skills add ihmorol/research-synthesis --skill research-synthesis
```

This command runs the external Skills CLI. Review that tool before using it; it is not part of this repository.

For a pinned copy without an installer, download the archive attached to [v0.1.0](https://github.com/ihmorol/research-synthesis/releases/tag/v0.1.0). Extract it, then copy the entire `research-synthesis/` folder into a skill directory your agent supports. For ZCode, that can be:

```text
~/.agents/skills/research-synthesis/
```

A project-scoped copy belongs in `<project>/.agents/skills/research-synthesis/`. Discovery paths and slash-command support vary by host. Keep `SKILL.md`, `references/`, and `assets/` together, and refresh skill discovery if needed.

The skill has no runtime dependencies or bundled executables. Your agent still needs a way to read the source files; scanned PDFs may need OCR. Installing this skill does not install a PDF reader.

## Start with a question

Supply your papers and describe the task. In hosts with slash-skill support:

```text
/research-synthesis Screen my uploaded papers for this question:
Does roster autonomy reduce exhaustion among hospital nurses?
Scope: hospital nurses, any country, publications 2020–2025.
Eligible designs: randomized trials and systematic reviews.
Return a screening table and reading order in chat. Do not create files.
```

You can ask for one task without running the rest:

```text
Build an evidence table for the roster-autonomy/exhaustion relationship.
Use only the supplied papers. Preserve effect sizes, comparison groups,
timepoints, and confidence intervals. Mark inaccessible details explicitly.
```

```text
Audit this introduction against P01 and P02. Check numerical accuracy,
causal language, population scope, and secondary citations.
Return a claim-by-claim table and corrected draft, keeping my voice.
```

For a saved project, request the artifacts you want and name a destination. Chat-only tasks should not create files. Source registration is optional for a small task; stable report and study IDs become useful when you reuse a collection across sessions.

## Choose a workflow

| Task | Output | Guide |
|---|---|---|
| Register sources | Stable IDs, versions, access limits, and linked reports | [00](skills/research-synthesis/references/workflow-00-corpus-manifest.md) |
| Screen for relevance | Include/exclude/uncertain decisions and a reading order | [01](skills/research-synthesis/references/workflow-01-screening.md) |
| Read analytically | Topic-specific briefs, up to 150 words by default | [02](skills/research-synthesis/references/workflow-02-paper-briefs.md) |
| Extract evidence | Results with measures, uncertainty, limitations, and locators | [03](skills/research-synthesis/references/workflow-03-evidence-table.md) |
| Compare definitions | Definitions, dimensions, instruments, and coding approaches | [04](skills/research-synthesis/references/workflow-04-definitions-measures.md) |
| Compare methods | Design trade-offs and a constraint-aware recommendation | [05](skills/research-synthesis/references/workflow-05-methods-comparison.md) |
| Explain disagreement | Actual findings and ranked explanations | [06](skills/research-synthesis/references/workflow-06-disagreement-analysis.md) |
| Appraise a claim | Design-specific critique and an informal confidence judgment | [07](skills/research-synthesis/references/workflow-07-evidence-appraisal.md) |
| Build a framework | Relationships labelled as examined, theoretical, or inferred | [08](skills/research-synthesis/references/workflow-08-conceptual-framework.md) |
| Find research gaps | Collection-bounded gaps and search terms to check novelty | [09](skills/research-synthesis/references/workflow-09-research-gaps.md) |
| Develop questions | Questions, hypotheses where justified, and ways to challenge them | [10](skills/research-synthesis/references/workflow-10-research-questions.md) |
| Design a study | Recruitment, measures, analysis, ethics, and feasibility | [11](skills/research-synthesis/references/workflow-11-study-design.md) |
| Write a review | An argument organized around themes or debates | [12](skills/research-synthesis/references/workflow-12-literature-review.md) |
| Audit a draft | Support verdicts, corrections, and unresolved claims | [13](skills/research-synthesis/references/workflow-13-draft-audit.md) |

## Evidence rules worth checking

The instructions ask the agent to attach paper IDs and page, table, or section references to substantive source claims. They distinguish original results, review-level findings, secondary citations, authors' interpretations, and the agent's proposals.

Missing information has different labels: `not reported`, `not accessible`, `uncertain`, or `not applicable`. A citation-only entry cannot support a full-text finding. Several reports of one study do not count as independent confirmation.

The skill also cautions against causal claims from ordinary cross-sectional associations, disagreement inferred from significance alone, invented sample sizes, and claims that a research gap exists everywhere because it appears in this collection.

These are instructions, not guarantees. Check the underlying passages before relying on the output.

## Methods and testing

The [methodology notes](skills/research-synthesis/references/methodology-sources.md) explain how the workflows draw on Cochrane guidance, PRISMA 2020, JBI appraisal tools, and university literature-review practice. They are paraphrased process guidance, not reproduced assessment checklists or endorsements.

The initial draft passed three synthetic behavioral cases covering eligibility, apparent disagreement, and draft auditing. The public version includes those [test cases](skills/research-synthesis/assets/eval-cases.md) for reruns. Those results do not establish real-PDF extraction quality, OCR accuracy, natural triggering, or acceptance by a research expert. See the [evaluation record](docs/evaluation.md) for the scope and remaining tests.

Maintainers can run the repository's dependency-free structural checks with Node.js 22 or newer:

```sh
node scripts/validate.mjs
node --test scripts/validate.test.mjs
```

These check package structure, metadata, local links, and obvious publication residue. They don't assess whether evidence supports a claim. CI runs the same checks; it does not call a model or handle uploaded papers.

## Privacy and limits

The skill asks the agent to treat source documents as data, ignore embedded commands, and get authorization before running supplied code or sending private papers elsewhere. It contains no automatic uploads, web searches, or telemetry.

Your host agent and document tools still determine how files are handled. Review their data policies before supplying confidential or copyrighted material. Never paste private papers, credentials, or identifiable participant data into public issues.

Formal systematic reviews need their actual search, selection, extraction, appraisal, and reporting procedures. This skill cannot certify PRISMA compliance, independent review, a formal GRADE assessment, or novelty beyond the supplied collection.

Project files: [MIT license](LICENSE) · [contribution guide](CONTRIBUTING.md) · [security reporting](SECURITY.md) · [changelog](CHANGELOG.md) · [source acknowledgments](NOTICE.md)
