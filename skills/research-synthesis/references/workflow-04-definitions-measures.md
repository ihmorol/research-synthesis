# Workflow 04 - Definitions & measures

Compare conceptual definitions with operationalizations and their comparability limits.

## Parameters and delivery

- Required: concept and source scope.
- For a working-definition recommendation: target population/context and intended use.
- Follow the main delivery mode and existing project convention; save only when authorized,
  optionally to `research/<corpus-key>/<question-key>/notes/definitions.md`.
  No manifest, prior table, or pipeline is required.

## Procedure

1. Use stable report IDs and study IDs where applicable, following the source protocol.
   Use separate rows for materially different definitions or operationalizations within
   a report. Locate the conceptual definition and measurement/coding procedure separately.
   Targeted rereading is allowed to establish wording, psychometric context, consulted
   file/version, and version-qualified locators.
2. Quote explicit definitions with locators. Record `not explicitly defined` only for
   checked accessible material and state that scope; otherwise use `not accessible` or
   `uncertain` as appropriate. Distinguish inferred usage from an author's definition.
   Abstract-only, notes-only, or citation-only access cannot establish an absent full-text definition.
3. Record theoretical basis, dimensions, population/context, instrument or coding scheme,
   item/content coverage, scoring, timing, and reported reliability/validity evidence.
   Distinguish conceptual meaning, operational proxy, and evidence of measurement quality.
4. Map same-term/different-meaning and different-term/overlapping-meaning collisions.
   Identify both overlap and non-equivalence; do not treat a subdimension as a synonym
   for the entire construct or infer interchangeability from matching instrument names.
5. Explain whether findings can be compared directly, side-by-side with qualifications,
   or only separately. Conceptual similarity alone does not justify statistical pooling;
   consider populations, measures, estimands, design, and measurement equivalence.
   Do not diagnose measure insensitivity from a null result alone.
6. If requested, recommend a working definition and operationalization for the stated
   purpose. Cite the corpus basis and separate borrowed wording from a labelled
   `proposed synthesis (not a corpus finding)`. Note validation needs and uncertainty
   about transfer across populations; do not assert validation not reported in sources.

## Output schema

`paper_id, study_id, conceptual_definition, definition_locator, theoretical_basis, dimensions,
operationalization, instrument_or_coding, scoring_timepoint, measurement_locator,
reported_validity_reliability, study_context, source_file_key, source_version,
provenance, access_limitations`

Use `not applicable` for `study_id` when a definition belongs to conceptual material
without an underlying study; do not create a study merely to fill the field.

Also deliver:
- a collision map with supporting source locations;
- comparability consequences and unresolved measurement questions;
- a working definition/measure recommendation only when requested.

## Completion checks

- Definitions and operationalizations have separate fields and source locations.
- Absent definitions, inferred usage, and unavailable evidence are clearly distinguished.
- Comparability and validation claims are justified rather than assumed.
- Recommended or composed definitions are labelled as proposals, not attributed findings.
