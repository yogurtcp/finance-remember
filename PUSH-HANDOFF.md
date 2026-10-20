# Publishing Remember Finance updates

The user has now authorized this agent to push to GitHub and update the existing deployed Site. The earlier preference to ask another Codex to push has been superseded.

Local checkout: `/home/yevgeny/Documents/Codex/finance-remember`. GitHub remote: `git@github.com:yogurtcp/finance-remember.git`. Preserve newer changes and never force-push.

The October 20 readability update expands all 45 lessons into short connected reading sections, rewrites all 140 Reference explanations and the topic glossary, and explains units and periods in all 28 calculation families. Reviews retain the first explanatory section with further reading available on request. There is still one application question; optional history and practice remain optional. Existing progress IDs and storage keys are unchanged.

Run `python3 build_content.py` and `npm test`. Reference prose is authored in `reference-explanations.txt`; lessons and glossary are in `dist/lesson-content.js`. The service-worker cache is `remember-finance-v6`. Publish the full `dist/` directory.

Use the current Sites skill and `.openai/hosting.json` to update the SAME public Site. Open and sync its source with the supported helper, package the verified pushed commit, save a version and deploy without changing access. Return https://finance-remember.yogurt-co.chatgpt.site.

Check units and section headings in the yield lesson, calculator output meanings, preserved progress, all course chapters, and Reference search. Browser visual verification was unavailable in this session. Local preview remains `npm start` at http://localhost:8766/#today.
