# Workflow 01 - Screening

Triage papers against the user's question and give a justified reading order.

## Parameters and delivery

- Required: research question and enough scope information to decide eligibility.
- Clarify population/context, date criterion, and study types only where they change
  eligibility. Explicitly record unrestricted criteria instead of inventing restrictions.
- Scope: requested papers; use delta screening only when question and criteria are unchanged.
- Follow the main delivery mode and existing project convention; save only when authorized,
  optionally to `research/<corpus-key>/<question-key>/screening.md`.
- A standalone screening request needs no saved manifest or preceding workflow; use stable IDs.

## Procedure

1. Use existing source metadata and verified screening extracts when applicable. Check
   whether the question, criteria, source version, or prior decision has changed.
   Re-screen affected papers; retain stable IDs and explain revised decisions.
2. Read abstract, aim, relevant methods, and results far enough to decide. Targeted
   rereading and full-text checks are allowed; do not infer eligibility from a title alone.
3. State each paper's aim and type. Reviews/meta-analyses may directly answer synthesis
   questions; theoretical work may answer conceptual questions. Apply the user's criteria,
   not a blanket review exclusion. Distinguish pooled findings from secondary study reports.
4. Assess each scope criterion and assign `include`, `exclude`, or `uncertain`. Missing
   decision-critical information requires `uncertain`, naming what must be checked.
   Citation-only sources cannot substantiate a methods-based eligibility decision.
5. Record relevance: `3` directly answers the question; `2` partly answers it or supplies
   relevant methods; `1` background/context; `0` unrelated; `uncertain` if indeterminable.
   Relevance is separate from eligibility and methodological quality.
6. Give a specific decision reason and source locator, including the criterion driving
   exclusion. For unavailable text, identify the access limitation rather than fabricating
   a locator. Cite provisional abstract-only decisions as such.
7. Rank the reading order by relevance and the user's purpose. Explain design fit and
   recency tie-breaks rather than automatically privileging newer papers. Put uncertain
   papers in a verification queue instead of silently treating them as eligible evidence.

## Output schema

`paper_id, aim, type, relevance, decision, reason, locator`

Include criterion-by-criterion assessments within `reason` or as linked detail, plus:
- the question and scope criteria used;
- an explained reading order for included papers and any useful background;
- an uncertainty/verification queue and any changed decisions.

## Completion checks

- Every requested paper has all schema fields and an explicit decision.
- Reasons identify scope criteria; relevance and eligibility are not conflated.
- Review eligibility is question-dependent; secondary reports are identified.
- Decisions reflect accessible source text and current criteria, not immutable prior labels.
