# Workflow 02 - Paper briefs

Produce a short analytical brief per paper, tailored to the user's topic.

## Parameters and delivery

- Required: topic. Scope: requested papers, or included papers if current screening exists.
- Maximum: 150 words per brief; honor a smaller requested cap. Do not expand by default.
- Follow the main delivery mode and existing project convention. Save only when authorized,
  optionally as `research/<corpus-key>/<question-key>/briefs/<paper_id>.md`;
  provide full briefs in chat when chat delivery is selected.
- Do not require screening, a saved manifest, or a full pipeline for standalone briefs.

## Procedure

1. Use stable IDs and inspect source availability. Read the full paper for a new brief;
   reuse verified full-text extracts when sufficient. Targeted rereading is allowed for
   new topic coverage, statistics, limitations, changed versions, and locator verification.
   If only an abstract/notes are accessible, label the brief partial and its limits.
2. Extract: question/aim, theoretical lens, design and sample or source material, central
   finding, strongest relevant limitation, and contribution to the user's research.
   Mark unreported details explicitly; do not invent findings, lenses, or sample sizes.
3. Separate what the evidence supports from what the authors interpret/conclude.
   Cite the finding and limitation at minimum, and every other substantive source claim.
   Label reviewer interpretation as such; do not treat author claims as measured results.
4. Preserve reported numerical values, units, comparison groups, and uncertainty exactly.
   Avoid claiming that nonsignificance shows no effect or that association implies causation.
5. Look for a useful finding beyond the abstract: a boundary condition, robustness check,
   subgroup result, or methodological detail. Give its locator. If none is identified,
   say `none identified`; if full text is unavailable, say `not assessable from available text`.
6. Write the brief within the cap, counting all substantive fields and citations but
   excluding the paper-ID/citation header and field labels. Never omit uncertainty to fit.

## Output fields

- Paper ID and full citation in the header.
- **Question/aim**
- **Theoretical lens**
- **Design/sample or material**
- **Evidence-supported finding**, with source locator
- **Authors' interpretation**, with source locator or `not reported`
- **Strongest relevant limitation**, with source locator and relevance to the topic
- **Contribution**, labelled as synthesis where it is the reviewer's assessment
- **Beyond the abstract**, with locator or the applicable absence/access statement

For multiple briefs, include an index with paper ID and one-line finding. File links
are supplementary when file delivery is authorized, not substitutes for requested chat output.

## Completion checks

- Each brief is at most 150 words or the smaller requested cap.
- Finding and limitation are traceable; evidence and interpretation are visibly separate.
- No forced beyond-abstract discovery, invented numbers, or unmarked access limitations.
