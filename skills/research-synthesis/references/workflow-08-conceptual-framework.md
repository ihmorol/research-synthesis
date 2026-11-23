# Workflow 08 - Conceptual framework

Represent constructs and relationships with their evidential and proposed status visible.

## Parameters and delivery

- Required: phenomenon and target context; clarify the intended purpose if ambiguous.
- Follow the main delivery mode and existing project convention; save only when authorized,
  optionally to `research/<corpus-key>/<question-key>/framework.md`.
- Existing briefs/tables are optional aids; no manifest or full pipeline is required.

## Procedure

1. Use stable IDs and verified extracts. Targeted rereading is allowed to check definitions,
   relationships, methods, source versions, and locators. State limited source access.
2. Define central constructs and distinguish conceptual meaning from operational proxies.
   Retain relevant mechanisms, mediators/moderators, and boundary conditions without
   treating plausible links as observed evidence.
3. Build the relationship table. Keep three dimensions separate:
   - **Status:** `directly examined`, `theoretically proposed by source`, or `proposed synthesis`.
   - **Evidence kind:** original quantitative, original qualitative, pooled estimate,
     theoretical argument, secondary report, or none. Record design separately.
   - **Inference scope:** descriptive/associational, identified causal contrast with stated
     assumptions, or untested proposed causal relationship.
4. Give each source-backed relationship its actual supporting locator. For a proposed
   synthesis, state the rationale and locators for premises; use `no direct source test`
   when appropriate. A theoretically asserted mechanism is not an empirical finding.
5. Do not derive an established mediation chain or total causal effect by joining separate
   associations. Cohort timing alone does not eliminate confounding; ablations identify
   bounded component contrasts only under suitable controls. Assess actual identification.
6. Permit hypothesized causal arrows, but label them `proposed/untested`; use an explicit
   legend distinguishing hypotheses, associations, and identified causal effects. An arrow
   in a diagram or a `directly examined` status is not itself evidence of causality.
7. Show competing frameworks where supported, including incompatible definitions or
   mechanisms. List unresolved links and context/measurement boundaries rather than
   silently combining incompatible models.
8. Write a plain-language proposal paragraph distinguishing source findings, source theory,
   and the user's proposed relationships, with supporting locators and uncertainty.

## Output schema

`relationship_id, constructs_relationship, supporting_paper_study, source_locator,
status, evidence_kind, design, inference_scope, rationale, boundary_conditions,
unresolved_test, provenance`

Deliver the table and plain-language paragraph. Add an optional diagram with a status
legend if useful/requested; do not let the diagram omit table qualifications.

## Completion checks

- Every relationship has status, evidence kind, inference scope, and locator or explicit absence.
- Proposed relationships are labelled as untested; causal and associational links are distinct.
- Constructs, boundaries, competing models, and unresolved mechanisms remain visible.
- Source theory, direct findings, and reviewer synthesis are not conflated.
