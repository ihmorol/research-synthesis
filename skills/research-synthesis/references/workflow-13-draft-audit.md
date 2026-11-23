# Workflow 13 - Draft audit

Audit claims against source passages, then correct errors while preserving the user's voice.

## Parameters and delivery

- Required: draft text/file and supplied sources; ask for an ambiguous citation mapping.
- Follow the main delivery mode and existing project convention; save only when authorized,
  optionally to a uniquely identified file under
  `research/<corpus-key>/<question-key>/audits/` rather than overwriting a same-day audit.
- Standalone audits need no screening, saved manifest, or preceding workflow.

## Procedure

1. Use stable source IDs and preserve the draft version. Decompose sentences into atomic
   claims, retaining exact text and draft location: section/paragraph/sentence or line/page.
   Assess each claim, then check whether its citation supports the full original sentence.
2. Reuse verified extracts only when they cover the exact claim. Targeted rereading is
   allowed and required where needed to check context, numbers, methods, source version,
   and source locations. A short brief or matching topic is not sufficient verification.
3. Locate the cited passage and relevant methods/results context. Record the actual
   consulted source and location. If unavailable or silent, state that limit; do not invent
   passages, original-source locators, or source content from a bibliographic entry.
4. Assign exactly one of four verdicts per atomic claim:
   - `supported`: available evidence supports the complete claim at its stated scope.
   - `overstated`: evidence supports a narrower population, magnitude, certainty, attribution,
     or inference than claimed.
   - `contradicted`: available evidence substantively conflicts with the claim; quote the
     relevant passage or give the exact conflicting result with locator.
   - `unverifiable`: cited source/evidence is unavailable, irrelevant, or insufficient to decide.
5. Keep provenance flags separate from verdicts: secondary citation, notes-only evidence,
   uncited claim, unavailable original, source/version mismatch, or dependence concern.
   A secondary report can support accurate attributed wording, but cannot verify an unseen
   original result. Flag it and suggest original-source verification without inventing content.
6. Check numerical values digit-by-digit, units, denominators, comparator, timing, effect
   metric, CI/uncertainty, and adjustment where relevant. Distinguish reported from calculated
   statistics. Check population/generalization, causal identification, author interpretation,
   review-versus-original attribution, dependence, and unsupported null-as-no-effect language.
7. For multi-claim sentences, note partial citation coverage; a supported fragment does
   not validate the sentence. Distinguish absence of support from genuine contradiction.
8. Rank argument-changing errors first; separate cosmetic suggestions. Give the minimal
   evidence-consistent correction or a verification action per affected claim.
9. Produce a corrected draft unless the user requested audit only. Preserve voice and
   structure while making necessary local corrections; mark unresolved claims inline with
   specific verification needs. Do not silently delete claims or broadly rewrite the prose.

## Output schema

`claim_id, draft_location, draft_claim, cited_source, consulted_source_version,
source_location, source_passage_or_result, verdict, provenance_flags,
severity, explanation, correction_or_verification_action`

For unavailable passages use `source unavailable` or `no relevant passage located`, not
an invented source location. Include a prioritized issue summary and corrected draft
when requested, retaining unresolved claims as explicit inline markers.

## Completion checks

- Every atomic claim has draft/source locations (or explicit access limitation) and one
  of the four fixed verdicts; secondary citation is a separate flag, never a verdict.
- Exact evidence, full-sentence citation coverage, numerical context, and provenance are checked.
- Corrections are minimal, prioritized, and preserve voice; unresolved claims remain visible.
