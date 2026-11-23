# Contributing

Useful changes make a workflow easier to run or a research error easier to catch. Keep the main skill small and put task-specific guidance in its existing reference file.

## Before opening a pull request

1. Describe the failure you are fixing and which workflow it affects.
2. Use a small fictional or openly licensed example. Include the expected answer and its source locations. Do not upload private papers, participant data, or full copyrighted texts.
3. Preserve the distinction between reported results, interpretations, secondary citations, and proposed choices. Changes must not remove an evidence limit just to make output sound more confident.
4. Run the structural checks:

   ```sh
   node scripts/validate.mjs
   node --test scripts/validate.test.mjs
   ```

5. Rerun the relevant [behavioral cases](skills/research-synthesis/assets/eval-cases.md) in a clean agent session where possible. Record the host/model, prompt, source material, observable output, tool actions, and any failed criteria. Describe model-based review accurately; it is not independent human verification.
6. Note the change under `Unreleased` in `CHANGELOG.md` and explain any new source or dependency.

Passing the validator means the package checks passed. It does not mean the model's research answer was correct. If you cannot run a behavioral case, say so in the pull request.

## Style and scope

Write direct instructions and concrete examples. Keep technical terms and statistical qualifiers. Avoid promises of exhaustive search, unbiased findings, guaranteed citation accuracy, or universal research novelty.

The installed skill should remain instruction-only. Propose executable helpers, network tools, or new dependencies in an issue first so their data access and installation effects can be reviewed.

Use branch names in the form `<type>/<description>`, such as `fix/evidence-row-provenance` or `docs/clarify-source-access`. Keep each commit focused on one purpose.

For security issues, follow [SECURITY.md](SECURITY.md) rather than posting a working exploit or private data publicly.
