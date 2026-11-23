# Workflow 05 - Methods comparison

Compare design trade-offs and, when requested, recommend a method for the user's goal.

## Parameters and delivery

- Required: phenomenon/question and source scope.
- For recommendations: goal, data/participant access, skills, time, and relevant budget.
  Ask for missing decision-critical constraints in one batch; do not block comparison alone.
- Follow the main delivery mode and existing project convention; save only when authorized,
  optionally to `research/<corpus-key>/<question-key>/notes/methods-comparison.md`.
  No preceding workflow or manifest is required.

## Procedure

1. Use stable IDs and verified methods extracts; targeted rereading is allowed to check
   source version, sampling, analysis, assumptions, and locators. Mark limited access.
2. Group papers by the design actually used: randomized experiment, quasi-experiment,
   observational longitudinal/cohort, cross-sectional, qualitative, computational/modeling,
   theoretical/textual, review/meta-analysis, or mixed. Add subtype detail rather than
   forcing unlike designs together; distinguish argument-based work from empirical text analysis.
3. Describe each family's question/estimand or argument focus, sampling/material,
   measures, timing, analysis, assumptions, vulnerabilities, and what its actual
   implementation can establish. Mark inapplicable fields rather than inventing them.
   Cite relevant methods/results or argument passages; a design label alone does not
   establish causal validity.
4. For cohort/longitudinal evidence, temporal ordering alone does not remove confounding,
   selection, attrition, reverse causation, or relevant time-varying biases. Describe any
   identification strategy and its assumptions before considering causal wording.
5. For experiments/quasi-experiments, inspect allocation or identification, comparator,
   interference, adherence, missingness, and applicability. For ablations, distinguish
   controlled component-performance contrasts from claims about mechanisms or real-world
   causation; check retraining, tuning, compute, and evaluation comparability where relevant.
6. For qualitative work, describe approach, sampling logic, analytic process, reflexivity,
   and contextual interpretation. Do not impose saturation or statistical generalization
   on every approach. For reviews, distinguish original synthesis from secondary reports.
   For theoretical/textual work, compare premises, definitions, argument structure,
   material-selection logic where applicable, and handling of alternatives. Separate
   conceptual justification from empirical testing; do not require a sample size or
   causal estimate from an argument-only report.
7. Map which findings are comparable using constructs, estimands, populations, timing,
   and measures as well as design. State what cannot be compared and why; do not
   substitute a quality ranking for an explanation of methodological trade-offs.
8. If requested, recommend a feasible method, citing methods passages actually adapted.
   State each adaptation, its rationale, constraints, unsupported assumptions, and
   validation/calculation needs. Label this recommendation as a proposal, not what papers did.
   Do not invent a required sample size or promise causal identification from a label.

## Output structure

- **Design families:** member report IDs and study IDs where applicable; question/estimand
  or argument focus; relevant sampling/material, measurement, analysis, assumptions,
  capabilities/limits, vulnerabilities, and version-qualified source locators.
  Mark inapplicable empirical fields explicitly.
- **Comparability:** compatible contrasts and reasons for qualified/separate interpretation.
- **Recommendation (if requested):** proposed design, adaptations with methods locators,
  constraint fit, alternatives/trade-offs, and outstanding feasibility checks.

## Completion checks

- Design capabilities are conditional on implementation and assumptions.
- Cohort, qualitative, and computational limits are addressed when those designs occur.
- Comparisons retain source context; proposals are separate from observed methods.
- Recommendations fit stated constraints and have verified adaptation references.
