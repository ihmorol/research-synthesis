# Efficient reading and natural writing

Use this for large source-reading jobs, documentation, or outputs that risk repetition.
It refines the shared evidence rules; brevity never outranks fidelity or user requirements.

## Read the next needed evidence

- Start from the request and relevant workspace index. Search filenames/headings first,
  then read matching sections. Stop discovery when source scope and next action are clear.
- Load the selected workflow, not the whole manual. Read only relevant methodology sections.
  Do not reopen unchanged instructions merely to confirm an edit succeeded.
- Reuse verified extracts with source IDs, versions, locators, and access status. Reopen
  source passages for new claims, calculations, contradictions, or changed files.
  A brief, cached summary, or search result is not a substitute for missing evidence.
- For screening, inspect enough abstract/methods/results context to decide. For synthesis,
  appraise relevant methods and findings; expand if disagreement or meaning is unclear.
  Read the full paper when the task requires it. Efficiency is not abstract-only synthesis.
- Batch independent reads and process large corpora in manageable groups. Delegated work
  should return findings and locators, not file dumps; do not repeat the delegated search.
- Keep status updates short. Do not echo entire papers, file listings, or tables into chat.
  Avoid creating scratch/planning documents for tasks the user requested only in chat.

## Write what the reader needs

Lead with the finding, decision, or use case. Use ordinary grammatical prose, short verbs,
consistent names, and paragraphs whose length follows the argument. Remove repetition,
announced intentions, ornamental claims, generic praise, and recap-only conclusions.

Keep citations adjacent to claims. Preserve statistics, comparison groups, definitions,
source attribution, causal limits, and uncertainty even when they cost more tokens.
Do not delete articles or conjunctions mechanically, replace research reasoning with
arrows, or strip qualifiers that matter. Do not invent experience to sound human.

Use a table for repeated fields, prose for connected reasoning, and links for optional
detail. Do not reproduce a saved artifact in full after linking it. For chat-only work,
provide the requested answer rather than silently truncating it into a preview. Respect
word counts; provide fewer findings instead of fabricated ones when evidence is limited.

## Keep documentation task-oriented

Put task fit, prerequisites, and the next useful action near the top. Separate quick-start
instructions from reference schemas and methodological explanations. Show one concrete
working example before optional variants. Keep one authoritative rule and link to it
instead of repeating entire manuals in the README.

Describe actual behavior, access requirements, and limits. Do not promise automatic
context knowledge, exhaustive searching, accurate citations, or measurable token savings
without testing them. Shorter source text is measurable; model token use and runtime
savings require controlled measurement.

## Basis and adaptation limits

The local brevity guidance was inspected, not installed as a dependency. From `caveman`,
retain filler removal and exact technical content, not its telegram grammar, unconditional
hedge removal, or causal-arrow style. Those conflict with source-grounded research prose.

The local `ponytail` guidance targets coding, not prose. Adapt its preference for
existing solutions, minimum necessary changes, and no speculative scaffolding. Its
brevity rule exempts explanations the user requested; do not apply a three-line cap to
research outputs. Its warning against skipping understanding also applies here: reduce
redundant reading, not necessary evidence checks. No Ponytail plugin dependency is added.

The local documentation-writer guidance organizes documents by user goal, distinguishing
how-to instructions, reference, tutorial, and explanation (the Diátaxis approach). Apply
that separation without adding mandatory outline-approval steps to every research task.

The local humanlike-writing guidance puts accuracy and protected quotations/numbers above
style, uses plain sentences, and rejects invented evidence, biography, and detector claims.
The package expresses these choices in its own instructions; it does not bundle those
skills, copy their implementation, or require their installation.
