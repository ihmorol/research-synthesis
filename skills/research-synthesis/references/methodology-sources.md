# Methodological sources and limits

The sources below inform the workflows. They are process references, not evidence
for a research topic. Source pages were checked on 2026-11-23. The summaries are
paraphrased guidance, not reproduced checklists or claims of formal compliance.

## Selection and review type (01, 12)

[PRISMA 2020 statement](https://www.prisma-statement.org/prisma-2020-statement),
Page et al., BMJ 2021;372:n71, DOI 10.1136/bmj.n71, describes a 27-item reporting
checklist and review flow diagrams. It is reporting guidance for systematic reviews,
not a risk-of-bias score or proof that an uploaded collection is complete.

Application: state eligibility and accessible sources; distinguish title/abstract
screening from full-text decisions; document reasons and uncertainties. A synthesis of
selected uploaded papers is not automatically a systematic review. Do not invent search
histories, registration, independent reviewers, or exclusion counts.

## Extraction and related reports (00, 03, 07)

[Cochrane Handbook, Chapter 5: Collecting data](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-05),
particularly §5.2.1 (studies and reports), §5.4 (data collection tools), and §5.5.4
(multiple reports): studies, not reports, are the unit of interest; one report may
contain multiple studies and multiple reports may concern one study. Linked secondary
reports can still provide important details. Structured, piloted extraction forms
support consistency and provenance.

Application: stable report/study/dependence IDs; preserve linked reports; pilot a schema;
record exact source locations, outcome/timepoint/comparator/sample, original estimates,
and discrepancies. Human/independent extraction requirements must be reported honestly.
The guidance is intervention-review oriented; adapt rather than imposing clinical-trial
fields on theoretical or qualitative papers.

## Comparing apparently conflicting results (06, 10, 12)

[Cochrane Handbook, Chapter 10: Analysing data and undertaking meta-analyses](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-10),
§10.11.3.1 (interaction and subgroup comparisons) and §10.15.3 (interpretation in
updated meta-analyses): significant versus non-significant subgroup results do not
establish a subgroup difference. Interpret
magnitude and uncertainty rather than binary presence/absence from P values.

Application: compare compatible estimands, directions, magnitudes, intervals, design,
setting, and sample. Do not infer an interaction from separate tests, equivalence from a
null result, or post-hoc low power from a non-significant result alone. Additional formal
contrasts may be needed; propose them without inventing results.

## Study appraisal and claim-level confidence (05, 07, 11)

[JBI Critical Appraisal Tools](https://jbi.global/critical-appraisal-tools), overview
and design-specific listings: tools assess trustworthiness, relevance, and results,
with separate tools for RCTs, cross-sectional, cohort, quasi-experimental, qualitative,
review, and textual evidence designs.

Application: choose criteria that match the actual design and research tradition.
Examine sampling/selection, measurement, confounding, missing data, analysis and reporting;
for qualitative work examine question-method congruence, researcher position, analysis
and supporting participant evidence. Saturation is not a universal criterion for every
qualitative approach. Unreported information is uncertainty, not automatically demonstrated
bias. Obtain the actual checklist before claiming a formal JBI assessment.

[Cochrane Handbook, Chapter 14: Grading certainty](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-14),
§14.2: GRADE's outcome-specific certainty considers risk of bias, inconsistency,
indirectness, imprecision, and publication bias; formal ratings are high/moderate/low/
very low and require the framework's procedures and rationale.

Application: for an ordinary corpus-based claim appraisal discuss those dimensions where
appropriate and give a clearly informal, reasoned confidence judgment. Do not badge that
judgment as GRADE, extrapolate one RCT to all populations, or assess publication bias
reliably from an arbitrary small collection. Domain-specific guidance may be needed.

## Analytical synthesis (02, 04, 08–12)

[Trent University: Writing Literature Reviews](https://www.trentu.ca/academicskills/how-guides/how-write-university/how-approach-any-assignment/writing-literature-reviews),
sections on reading sources, synthesizing sources, and organizing ideas: reviews analyze
how scholarship addresses a question, compare theories/methods/evidence, develop an
argument, and identify unanswered questions. Organization may be thematic, comparative,
methodological, or chronological; a review is not disconnected paper summaries.

Application: use a comparison/evidence matrix before prose. Separate theory, findings,
interpretation, and proposal. Integrate sources by the analytical question; a paragraph
about a uniquely important source is allowed. Collection-bounded gaps require wider
search verification before a novelty claim. Proposed frameworks/questions/designs are
analyst recommendations, not established published findings.

## Skill structure and evaluation

[Agent Skills specification](https://agentskills.io/specification): directory-matched
name ≤64 characters, description ≤1024 characters, YAML frontmatter, and on-demand
references/assets; keep the main file under 500 lines.

[Anthropic: Equipping agents for the real world with Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills),
sections on progressive disclosure, development/evaluation, and security: keep the core
lean, split references, start with representative evaluation, and inspect dependencies,
bundled files, and network instructions from less-trusted sources.

Application: one corpus-gated router with small workflows, shared evidence rules,
synthetic regression cases, no bundled executable dependency. Structure passing does
not guarantee good extraction or safe behavior. Human research judgment remains necessary.
