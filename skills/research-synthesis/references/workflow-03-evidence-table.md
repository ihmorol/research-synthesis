# Workflow 03 - Evidence table

Extract question-relevant results with enough context for comparison and verification.

## Parameters and delivery

- Required: specific question and requested source scope.
- Follow the main delivery mode and existing project convention. Save only when authorized,
  optionally to `research/<corpus-key>/<question-key>/evidence-table.csv`;
  workbook conversion is optional, not triggered by row count.
- Use stable IDs; a standalone table requires neither saved briefs nor a manifest/pipeline.

## Procedure

1. Reuse verified extracts relevant to this question. Briefs are pointers, not substitutes
   for missing results/methods. Targeted rereading is allowed to verify numbers, locators,
   comparator, timing, adjustment, source version, and provenance.
2. Distinguish evidence kinds: original quantitative result, original qualitative finding,
   pooled estimate, theoretical proposition, author interpretation, and secondary report.
   Notes and references alone are not verified original results; record access limitations.
3. Use P IDs for reports, S IDs for underlying studies, and study-nested result IDs such
   as S01-R01. Separate materially different studies, outcomes, timepoints, and analyses.
   The same verified result retains its ID across reports; link those report IDs rather
   than counting it twice. New follow-up/reanalysis reports get distinct P IDs, while
   their study/result links depend on the actual evidence. Qualitative themes are result
   rows, not independent studies. Use `not applicable` study/result IDs for conceptual
   material with no underlying study, retaining a local proposition label if needed.
4. Copy raw reported results exactly, including denominators/sample sizes, effect metric,
   estimate, units, comparator/reference category, timepoint, CI or other uncertainty,
   and adjustment set. Preserve unadjusted/adjusted and primary/subgroup distinctions.
   Use `not reported`, `not accessible`, `uncertain`, or `not applicable` accurately;
   retain a separate verification status. Never reconstruct
   an absent CI or estimand as if reported. Put justified derived quantities in a separate
   labelled field with inputs and calculation, only when the task calls for calculation.
5. For qualitative findings, retain contextual supporting extracts/locators, source-material
   and sampling context, and the authors' analytic account. Quote frequency or interview
   count alone does not establish theme importance, prevalence, or evidential strength.
6. Identify versions, shared samples/datasets, overlapping primary studies in reviews,
   and subgroup reuse. Record full/partial/uncertain overlap, affected IDs, known scope,
   and supporting locators; a dependence group alone does not establish full dependence.
   Do not count repeated results as independent confirmation or collapse distinct results
   merely because samples overlap. Retain version-specific values and discrepancies.
7. Separate the result from author interpretation and reviewer appraisal. Use inference
   appropriate to the design; nonsignificance is not proof of no effect.
8. For secondary reports, record both the consulted source and attributed original.
   Prefer the original when accessible and verify it; otherwise explicitly retain the
   secondary status. Do not fabricate an original-source locator.

## Output schema

`paper_id, linked_report_ids, study_id, result_id, evidence_kind, setting, sample_data,
design, constructs, definition_operationalization, outcome, comparator, timepoint, estimand,
effect_metric, raw_result, CI, other_uncertainty, adjustment_set, analysis_role,
qualitative_support, author_interpretation, limitation, dependence_group, dependence_details,
provenance, source_file_key, source_version, access_level, source_locator,
verification_status, derived_result`

`paper_id` identifies the consulted report; `linked_report_ids` records other reports
linked to this result, with verification limits. For differing reports/versions, retain
separate source-specific entries under the same established result ID rather than
replacing a value or implying each entry is independent evidence. `source_file_key`
links to the small per-file map in the source protocol; it is not an inferred version.
`provenance` identifies original/pooled/secondary/notes-derived status and the actual
consulted source. Qualify result and methods locators by file/version where fields need
different passages. Linked reports do not imply that every linked passage was checked.

## Completion checks

- Each result is traceable to its study, consulted and linked reports, file/version,
  supporting locations, and verification status.
- Numerical context, uncertainty, adjustment, and dependence are retained without invention.
- Qualitative support and analytic context are recorded, not reduced to vote/quote counts.
- Secondary reports, proposed interpretations, and any calculations are visibly distinguished.
