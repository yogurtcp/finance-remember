# Push the guided finance app update

The user prefers asking the other Codex to push. Push the latest local `main` from `/home/yevgeny/Documents/Codex/finance-remember` to the existing `git@github.com:yogurtcp/finance-remember.git` remote, preserving any newer work; do not force-push.

This update makes the guided approach the main app: 45 lessons cover every existing concept and calculation family. Each teaches a case once and asks one application question. Extra practice is optional. Numerical examples identify assumptions and show intermediate calculations; term-definition buttons open on demand.

Existing card data is preserved. Completed bond trials migrate into the guided course, with original records untouched. Backups include both lesson and card progress, and older imports preserve current lesson data.

All 12 chapters also include optional **Connections & history** sections with extra concepts, historical episodes, short definitions, and primary-source links, researched October 14, 2026. They appear in the relevant lesson and Reference search as well. They add no mandatory questions.

Run `npm test`. The service-worker cache has been bumped and new modules must be included in publication: `lesson-content.js`, `guided-progress.js`, `connections.js`, and `guided-ui.js`. The hosting output remains `dist/`.

Update the SAME deployed Site recorded in `.openai/hosting.json`, using the applicable Sites skill and supported source-sync workflow. Do not create another project or change its audience. Verify Today starts a lesson, Lessons covers the full course, formula definitions open, worked numbers show their derivation, history panels start collapsed, Reference finds “TerraUSD,” and old trial URLs still open the corresponding compact lessons. Return the existing live URL.

Local preview uses `npm start` at http://localhost:8766/#today. The generated standalone preview is `standalone/guided-finance.html`. These changes have been verified with automated checks; browser visual QA was unavailable in this session.
