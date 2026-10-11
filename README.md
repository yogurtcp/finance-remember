# Remember Finance

**[Open Remember Finance](https://finance-remember.sites.openai.com/)** — start a daily finance learning session.

A daily learning app for Robert Shiller’s introductory **Financial Markets** course, with useful conceptual and mathematical gaps filled and dated updates checked on **October 11, 2026**. Coverage follows the [published Coursera syllabus](https://www.coursera.org/learn/financial-markets-global/) and the shared Financial Markets core. Recording dates do not organize the curriculum. The separate Narrative Economics course is outside scope.

## Daily use

1. Start the daily session: due reviews first, then up to four new concepts.
2. Try to explain the answer aloud or write it before revealing it.
3. Compare the key idea, explanation and limitation. Rate your **original** attempt.
4. Again means a major error or no recall; Hard means partial recall, assistance or a guess; Good means a correct explanation; Easy means clear and confident recall.
5. Work the numeric problems using a calculator if needed, but choose and understand the method yourself.

The first session tackles face value, coupon payments, payment periods and who determines market yields. New material then spans the introductory course. Focus on one topic when needed; Extra practice is available anytime.

The library contains **140 concept cards**, three recall prompts per concept and **28 parameterized calculation templates**. Twelve topics cover purpose and incentives; risk and portfolios; efficiency and psychology; bonds and rates; stocks and corporations; housing and mortgages; derivatives; banking; institutions and trading; leverage and crises; public finance and society; and a focused modern-context section. Topic lessons connect the cards into a reference review. Questions and explanations are independently authored, not copied course assessments.

## Retention design

Retrieval practice and distributed practice are supported by [Dunlosky et al.](https://www.psychologicalscience.org/publications/journals/pspi/learning-techniques.html). This app uses a transparent spacing heuristic rather than claiming to estimate memory with a validated model. Correct recall advances through 1, 3, 7, 14, 30, 60 and 120 days; Easy skips a stage; Hard returns tomorrow; Again resets and adds up to two in-session retries after intervening questions when available. Same-session recovery remains due tomorrow. Interleaving due topics helps distinguish related ideas.

Multiple choice is optional. Requesting choices while in recall mode caps the rating at Hard; a wrong selected or numeric answer requires Again. Deliberately choosing multiple-choice mode still relies on honest self-rating of guesses. Numeric answers are checked with explicit units and reasonable rounding tolerance. Numbers vary across attempts, with a fixed seed within an active question.

Extra practice does not postpone an existing spaced review. New concepts first encountered there are scheduled normally and count toward that day’s introductions. A saved session resumes after leaving or reloading. “Spaced” progress measures interval status, not demonstrated mastery.

## Current content

The app distinguishes economic mechanisms, simplified models, historical examples, dated proposals and final rules. Important corrections include YTM versus expected return and reinvestment assumptions; spot discount factors versus a single YTM; capital versus reserves; ETF wrapper versus passive strategy; option payoff versus profit; and units in debt-ratio dynamics.

Primary-source links accompany dated updates, including [U.S. T+1 settlement](https://www.sec.gov/newsroom/press-releases/2024-62), the [March 2026 capital proposals](https://www.federalreserve.gov/newsevents/pressreleases/bcreg20260319a.htm), and the [September 2026 stress-test final rules](https://www.federalreserve.gov/newsevents/pressreleases/bcreg20260930a.htm). No automatic news or regulatory refresh is implied. The app is a study companion, not personalized investment advice or an official Yale product.

## Data and installation

Progress and notes are stored in this browser’s local storage. There is **no cloud sync**. Export a JSON backup in Settings; importing requires a validated file and an explicit replace action. Finance and Remember Languages use separate storage keys and backup identities. Changing domain, browser or device creates separate progress; use export/import to transfer it. Clearing site data can delete progress.

After a successful online load and service-worker installation, the app works offline. Use **Install app** in the header for the browser install prompt or device-specific instructions. On Android Chrome, choose ⋮ → Install app or Add to Home screen; on iPhone Safari, choose Share → Add to Home Screen. Installed copies keep progress local to that browser and device. No analytics or AI answer-scoring service is included.

## Standalone version

Run `python3 build_standalone.py` to create `standalone/finance-remember.html`. Open that single file directly in a browser; its code, styles and course data are embedded, so it needs no server or network. Local-file storage behavior depends on your browser; keep backups. This standalone file does not install a service worker or provide the hosted PWA installation flow.

## Develop

Buildless browser application, with no runtime dependencies:

```sh
npm ci
npm test
npm start
```

`npm start` serves `dist/` at port 8765. Rebuild authored course data with `python3 build_content.py`. Preserve card IDs when changing text so review history remains compatible. Bump `dist/sw.js` cache version for releases. The hosting manifest selects `dist/` as the static directory.

Tests cover spaced scheduling, daily limits, retries, backup validation, varied math, independent numerical checks and UI flows for grading, library search and session recovery. Browser and phone-layout checks remain unverified in this environment: no browser was available and starting a local server was blocked. The standalone artifact is also exercised with network requests disabled.

Hosted source upload is currently blocked by network restrictions: the shell could not resolve the Sites Git server. The local repository and standalone app are usable; no successful production deployment is claimed.

## Related app

[Remember Languages](https://yogurtcp.github.io/mandarin-remember/) is already tracked in its own Git repository, `yogurtcp/mandarin-remember`. This project is separate and does not alter its curriculum, hosting or saved progress.
