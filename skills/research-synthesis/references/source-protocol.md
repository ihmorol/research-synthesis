# Source protocol

Read this for corpus setup, evidence extraction, source checking, and draft audits.

## Source identity and access

Use paper IDs P01, P02… for distinct reports and study IDs S01… for underlying
studies. A report may describe several studies; a study may have several reports.
Reuse supplied IDs and never recycle or renumber an established ID.

Alternate files and established revisions of the same report can share a P ID,
including a verified preprint/published pair. A distinct follow-up or reanalysis
report gets its own P ID; link it to the same S ID when the underlying study is
established. A new sample or study may need a new S ID. Similar titles, authors,
datasets, or publication dates alone do not establish report or study identity.
Keep unresolved matches separate with a verification note.

Within a study, use result IDs such as S01-R01 for distinct outcomes, timepoints,
themes, or analyses. The same established result keeps its ID across linked reports
and versions; retain version-specific values and discrepancies rather than overwriting
them. A new analysis gets a new result ID, not automatically a new study ID.
For conceptual material without an underlying study, mark study/result IDs
`not applicable`; use the report ID and a local proposition label if useful.

Keep a small per-file version map: report ID, local file/version key, path or supplied
identifier, reported version/date, fingerprint when available, access level, and locator
convention. A local key identifies the consulted file; it is not a verified publication
version. Do not infer dates, version order, identity, or a fingerprint. Preserve prior
entries and attach new extracts to the actual consulted file/version. A temporary map
in chat is enough when persistence is not authorized. Use relative paths or supplied
identifiers in shared outputs; do not expose private local paths unnecessarily.

Optional dependence IDs D01… mark supported sample/dataset relationships. Record
which studies/results overlap, whether overlap is full, partial, or uncertain, its
known scope, and the supporting locator. Shared participants do not make different
outcomes or timepoints duplicate results. A group label does not establish full
dependence, quantify correlation, or justify collapsing all related studies.

Access levels:
- full-text: methods/results can be checked in the available text;
- abstract-only: screen provisionally, extract only what the abstract actually states;
- notes-only: attribute to the user's notes, not directly to the original paper;
- citation-only: identify a report; no finding or method is inferable;
- unreadable/partial: describe the missing pages or extraction failure.

Stable IDs do not imply stable conclusions. Revisit extracts if the file, research
question, criteria, or interpretation changes. Flag retractions/corrections only when
there is evidence; do not claim to have checked external status without doing so.

## Locations and support

Prefer printed page numbers, table/figure labels, and named/numbered sections. Qualify
locators with the consulted file/version key, especially where versions differ, for
example `(P01, file V02, printed p.203, PDF p.7, Table 2)`. Give printed and viewer
page numbers when they differ. V02 here is a local key, not a claimed publication
version. For unpaginated text, use a heading and paragraph or a short quoted anchor.
An abstract locator is valid only for content in the abstract. Never transfer a locator
between versions without checking the passage.

For each substantive claim retain an evidence anchor: short exact passage or table
cell/row, locator, and evidence kind. Keep quotations short and necessary; do not
reproduce whole copyrighted papers. Distinguish the source's original result from
an attributed result and from the analyst's own explanation.

Missingness vocabulary:
- `not reported`: checked relevant accessible source material and it is silent;
- `not accessible`: the needed text/table is absent or cannot be read;
- `uncertain`: evidence permits more than one judgment;
- `not applicable`: the field does not fit the study or evidence kind.

A user's summary is not a verified source excerpt. A brief is a discovery aid, not
a substitute for revisiting a source when extracting a statistic or auditing a claim.

## Extraction contract

Before a large job, pilot on a small, varied subset and fix the schema before scale-up.
Each relevant row should carry consulted and linked report IDs, study and result IDs
where applicable, dependence details, setting/sample, design, constructs/measure,
result, uncertainty, limitation, evidence kind, version-qualified locator, and
verification status. A standalone task needs only the relevant mapping, not a full manifest.

Quantitative fields when applicable: outcome, comparator/reference category, timepoint,
metric/estimand, estimate, units, confidence level and bounds, sample denominator,
adjustment set, missingness. Keep raw values and derived values in distinct fields.
Never infer a CI, SD, unit, or baseline category because it seems conventional.

Qualitative fields when applicable: theme, participant/material context, supporting
excerpt or observation, analytic approach, reported negative/deviant cases, author's
interpretation. Counts describe coverage, not theme importance or independent replication.

## Finish checks

Check high-impact claims and all numerical values against their original locations.
Check sign, scale direction, denominator, comparator, timeframe, adjusted/unadjusted
status, and source attribution. Check that wording supports the full sentence.
Record unresolved checks and inaccessible sources. For formal reviews, identify needed
human verification; do not claim that two AI passes constitute independent extraction.
