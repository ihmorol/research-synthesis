# Workflow 07 - Evidence appraisal

Judge confidence in a precise claim using criteria appropriate to its evidence.

## Parameters and delivery

- Required: claim, including population/context and causal or descriptive scope where relevant.
- Follow the main delivery mode and existing project convention; save only when authorized,
  optionally to `research/<corpus-key>/<question-key>/notes/appraisal.md`.
  No prior workflow or saved manifest is required.

## Procedure

1. Use stable IDs and verified source extracts. Targeted rereading is allowed for methods,
   results, locators, versions, and dependence checks. Record access limits; notes or a
   bibliography alone cannot support a full study-quality judgment.
2. State design-appropriate criteria before applying them; adapt to the actual study:
   - Randomized: allocation/concealment, relevant blinding, adherence, missingness,
     analysis/estimand, selective reporting, and applicability.
   - Quasi-experimental: identification assumptions, comparator construction, diagnostics,
     confounding/selection, timing, missingness, and sensitivity analyses.
   - Cohort/longitudinal observational: temporal ordering, measured/unmeasured confounding,
     selection/attrition, reverse causation, and relevant time-varying or time-origin biases.
   - Survey: sampling frame, construct validity, nonresponse, confounding, and common-method risk.
   - Qualitative: fit of approach/question, sampling rationale, analytic grounding,
     reflexivity, contextual richness, discrepant cases, and appropriate transparency.
     Evaluate saturation only when relevant to the declared approach; it is not universal.
   - Review/meta-analysis: search/eligibility, appraisal, dependence/overlap, synthesis,
     heterogeneity, precision, reporting bias, and original-versus-secondary provenance.
   - Computational: baseline fairness, leakage, evaluation data, uncertainty/replication,
     tuning/compute controls, and what ablations actually identify.
   - Theoretical/textual: clarity of concepts and premises, coherence of the argument,
     stated scope and assumptions, handling of competing explanations, and support for
     empirical claims where made. For empirical text analysis, also assess material
     selection and analytic transparency. Do not demand sample sizes or effect estimates
     from a purely conceptual argument, or treat coherence as empirical confirmation.
3. Appraise sampling, measurement, analysis, transparency, and relevant bias domains per
   study/claim with locators. Distinguish demonstrated weakness, unreported information
   producing unclear risk, and not-applicable criteria. Poor reporting is not proof of
   poor conduct, but missing information must not be treated as reassurance.
4. Track overlapping studies, samples/datasets, publications, and pooled primary studies.
   Do not count duplicate results as independent confirmation; partial overlap requires
   an explicit dependence judgment, not indiscriminate collapsing of all related studies.
5. Synthesize at claim level, separating study limitations from body-of-evidence confidence.
   Consider bias, precision, consistency, directness/applicability, reporting/publication
   risks, and dependence. Qualify unavailable domains rather than guessing their verdict.
6. Use `strong`, `moderate`, `weak`, or `cannot-assess` with explicit rationale:
   - strong: relevant evidence is credible and, where applicable, precise enough; no
     major unresolved concern materially undermines this bounded claim;
   - moderate: useful support exists but important uncertainty remains;
   - weak: support is sparse, indirect, seriously limited, or unresolved/inconsistent;
   - cannot-assess: source access or essential information prevents a justified judgment.
   These are transparent local judgments, not automatic GRADE ratings or a paper-count score.
   A single RCT, a design label, or one repaired reporting issue does not automatically upgrade confidence.
7. Calibrate wording: what narrower conclusion is supported, what exceeds the evidence,
   and what evidence would change confidence. Separate causal identification from association.

## Output structure

- Claim and criteria with rationale for design fit.
- Study/domain table: `paper_id, study_id, domain, evidence_locator, appraisal,
  demonstrated_or_unclear_risk, relevance_to_claim`. Use `not applicable` for study IDs
  and empirical bias fields that do not fit conceptual material; retain argument-quality
  judgments and their supporting passages rather than inventing a study.
- Dependence/provenance and access limitations.
- Claim-level confidence, domain-based justification, defensible wording, overclaims,
  and evidence needed to strengthen or overturn the assessment.

## Completion checks

- Confidence concerns the specified claim, not an automatic overall study grade.
- Design-specific criteria, dependence, uncertainty, and reporting limits are visible.
- Qualitative saturation and causal claims are not inferred from generic design labels.
