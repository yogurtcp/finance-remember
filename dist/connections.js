// Optional enrichment, researched against the linked primary sources on October 14, 2026.
// History is paraphrased; the lesson connections are our educational interpretations.
export const chapterConnections = {
 purpose: {
  lessonId:'sharing', conceptTitle:'Liquid ownership can finance a long project',
  concept:'A project may need capital for years while an individual investor wants an earlier exit. Transferable shares let the investor sell an ownership claim to someone else without requiring the business to repay that capital. Liquidity for an owner and liquidity for a company are different things.',
  historyTitle:'The Dutch East India Company’s transferable shares', period:'1602',
  history:'The VOC brought investors into a long-lived trading enterprise. The Dutch National Archives records that its shares could be sold, exchanged, or pledged as collateral. Transfers were recorded by the company’s bookkeeper: a secondary market did not require a modern electronic exchange.',
  connection:'This helps explain why equity markets can support projects longer than any one investor wants to wait. It explains a financing mechanism, rather than establishing that every activity it finances improves welfare.',
  relatedTopic:'institutions',relatedLabel:'Issuing shares versus trading existing shares',
  terms:'Secondary market = trading an existing claim between investors; Collateral = an asset pledged to support an obligation',
  sources:[['Dutch National Archives: VOC organization and shares (PDF)','https://www.nationaalarchief.nl/sites/default/files/afbeeldingen/toegangen/NL-HaNA_1.04.02_introduction-VOC.pdf']]
 },
 risk: {
  lessonId:'diversification',conceptTitle:'Diversify the household, too',
  concept:'Your salary, home, pension, and investments can respond to the same shock. Employer shares may look like just another stock holding, but losing both your job and your savings in the same company would compound the damage. Looking at securities alone can miss that concentration.',
  historyTitle:'Markowitz changes the unit of analysis',period:'1952',
  history:'Harry Markowitz’s Portfolio Selection shifted attention from choosing attractive securities individually to choosing a portfolio whose returns work together. The Nobel committee identifies that paper as the beginning of the contribution recognized by his economics prize.',
  connection:'Our extension: apply the same correlation question to the rest of your financial life. Ask which shock would harm several sources of income or wealth at once. Owning more items need not mean owning different risks.',
  relatedTopic:'society',relatedLabel:'Lifetime income and insurance',
  terms:'Human capital = the economic value of future work income; Concentration = having much of your financial life exposed to one source of risk',
  sources:[['Nobel committee: Markowitz and portfolio selection','https://www.nobelprize.org/prizes/economic-sciences/1990/press-release/']]
 },
 behavior: {
  lessonId:'feedback',conceptTitle:'Expectations about other people’s expectations',
  concept:'You can believe an asset is overpriced and still expect someone else to pay more soon. That is a second-order belief: a belief about what others believe. Keynes’s beauty-contest analogy captures how guessing the crowd’s judgment can displace your own assessment of value.',
  historyTitle:'The South Sea Bubble',period:'1720',
  history:'The South Sea Company combined proposed overseas trade with a scheme involving British government debt. According to the Bank of England, little trade occurred, yet the debt arrangement helped fuel a stock-buying frenzy. Prices eventually collapsed.',
  connection:'The historical episode illustrates the feedback lesson: an exciting business story, institutional credibility, and rising prices can reinforce demand. It does not establish that every popular technology or sharp price rise is a bubble.',
  relatedTopic:'equity',relatedLabel:'Expectations and the value of a company',
  terms:'Second-order belief = your view of someone else’s beliefs; Fundamental value = value based on expected cash flows and the risks of receiving them',
  sources:[['Bank of England: South Sea Bubble history','https://www.bankofengland.co.uk/about/history'],['Shiller: Speculative Asset Prices, beauty-contest discussion (PDF)','https://www.nobelprize.org/uploads/2018/06/shiller-lecture.pdf']]
 },
 bonds: {
  lessonId:'purchasing-power',conceptTitle:'Breakeven inflation is a price signal',
  concept:'Subtract the real yield on inflation-protected government debt from the nominal yield on comparable conventional government debt. The difference is called breakeven inflation. It reflects inflation compensation, including expectations and risk premiums; different liquidity also affects it. It is not a pure forecast of future inflation.',
  historyTitle:'U.S. inflation-protected Treasury bonds arrive',period:'1997',
  history:'The U.S. Treasury first auctioned Treasury Inflation-Protected Securities, or TIPS, in January 1997. Linking principal to inflation created a way to separate the promise of dollars from protection of purchasing power.',
  connection:'Your bond lesson distinguishes nominal from real returns. Comparing these two kinds of bond adds another question: what compensation does the market require for uncertain inflation?',
  formula:'Breakeven inflation ≈ nominal Treasury yield − comparable TIPS real yield',
  terms:'Nominal yield = a yield measured in currency units; Real yield = a yield measured relative to purchasing power; TIPS = Treasury Inflation-Protected Securities; Comparable = aligned maturity and yield conventions; Risk premium = compensation for bearing uncertainty',
  relatedTopic:'banking',relatedLabel:'Inflation and monetary policy',
  sources:[['TreasuryDirect: history of TIPS','https://www.treasurydirect.gov/research-center/history-of-marketable-securities/tips/'],['Federal Reserve: interpreting inflation compensation','https://www.federalreserve.gov/econres/notes/feds-notes/tips-from-tips-update-and-discussions-20190521.html']]
 },
 equity: {
  lessonId:'ownership',conceptTitle:'A share’s economics and its voting power can differ',
  concept:'Some companies issue share classes with different voting rights. A founder can retain control while selling a substantial economic interest to public investors. You therefore need to ask both what cash-flow claim you own and how much influence it carries.',
  historyTitle:'Google’s founders explain their control structure',period:'2004',
  history:'Google’s IPO filing described a dual-class structure designed to preserve the founders’ influence. Their letter argued that this supported a long-term approach. The filing also disclosed the governance implications for outside shareholders.',
  connection:'Residual ownership does not necessarily mean proportionate control. A structure can protect a long horizon while limiting shareholders’ ability to replace management. Evaluating that tradeoff is part of understanding an equity claim.',
  relatedTopic:'purpose',relatedLabel:'Agency problems and accountability',
  terms:'Dual-class shares = stock classes carrying different rights, often voting rights; IPO = initial public offering; Governance = the rules and practices that determine how a company is controlled',
  sources:[['Google: original IPO filing and founders’ letter, filed with the SEC','https://www.sec.gov/Archives/edgar/data/1288776/000119312504073639/ds1.htm'],['SEC Investor.gov: IPOs and dual-class stock','https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-17']]
 },
 housing: {
  lessonId:'mortgage',conceptTitle:'The same mortgage looks different from the lender’s side',
  concept:'A fixed-rate mortgage protects the borrower from rising contractual interest payments. The lender receives the same scheduled rate even if its funding becomes more expensive. A duration gap describes different interest-rate sensitivities on the asset and liability sides of a balance sheet.',
  historyTitle:'The savings and loan crisis',period:'1980s',
  history:'U.S. savings and loan institutions held long-term mortgages and relied heavily on deposits. Rising interest rates increased the cost of attracting funding while income on existing fixed-rate mortgages stayed fixed. Deregulation, risk-taking, and supervisory problems also contributed to the crisis.',
  connection:'Risk protection for one party can leave exposure with another. Follow both sides of the contract, then ask how the lender finances the loan. Credit quality alone cannot describe all the risk.',
  relatedTopic:'bonds',relatedLabel:'Duration and changing interest rates',
  terms:'Funding = money used to finance assets; Duration gap = a mismatch between the interest-rate sensitivity of assets and liabilities; Liability = an obligation owed to someone else',
  sources:[['Federal Reserve History: savings and loan crisis','https://www.federalreservehistory.org/essays/savings-and-loan-crisis']]
 },
 derivatives: {
  lessonId:'model-risk',conceptTitle:'Hedging can change the market you are hedging',
  concept:'A dynamic hedge adjusts holdings as prices change. If many traders need to sell in the same falling market, their transactions can add downward pressure and make execution harder. Endogenous risk means risk generated within the system by participants’ own responses.',
  historyTitle:'Portfolio insurance and Black Monday',period:'1987',
  history:'Portfolio-insurance strategies were among the mechanisms implicated in the October stock-market crash. Strategies intended to limit individual losses could involve selling more exposure after prices fell. Federal Reserve History describes portfolio insurance alongside other contributors and market-structure problems.',
  connection:'Replication models often assume trades can be executed at the quoted price. The connection to your lesson is that a hedge’s theoretical payoff and the liquidity needed to implement it are separate questions. Portfolio insurance was not the sole explanation for the crash.',
  relatedTopic:'institutions',relatedLabel:'Execution and market liquidity',
  terms:'Dynamic hedge = a hedge adjusted as conditions change; Endogenous risk = risk created by behavior inside the financial system; Liquidity = the ability to trade without a large price concession',
  sources:[['Federal Reserve History: the 1987 crash','https://www.federalreservehistory.org/essays/stock-market-crash-of-1987']]
 },
 banking: {
  lessonId:'balance-sheet',conceptTitle:'A bank run can become self-fulfilling',
  concept:'Depositors may be willing to wait if they expect others to wait, but hurry to withdraw if they expect a run. Those mutually reinforcing expectations can produce different outcomes from a similar starting balance sheet. This is the intuition behind multiple equilibria in bank-run models.',
  historyTitle:'A panic before the Federal Reserve existed',period:'1907',
  history:'Runs on New York trust companies spread through the financial system. J. P. Morgan and other private actors coordinated emergency support. The panic became an important part of the debate that led to the creation of the Federal Reserve.',
  connection:'The balance-sheet lesson separates liquidity from solvency. This case adds the role of coordination and confidence. Credible deposit insurance and lender-of-last-resort support can reduce run incentives, but their design also affects risk-taking.',
  relatedTopic:'crises',relatedLabel:'Contagion and the system as a whole',
  terms:'Multiple equilibria = different outcomes sustained by different expectations and actions; Lender of last resort = an institution supplying emergency liquidity when ordinary funding breaks down',
  sources:[['Federal Reserve History: Panic of 1907','https://www.federalreservehistory.org/essays/panic-of-1907'],['Nobel committee: Diamond and Dybvig’s bank-run theory','https://www.nobelprize.org/prizes/economic-sciences/2022/popular-information/']]
 },
 institutions: {
  lessonId:'funds',conceptTitle:'Being able to redeem can encourage others to redeem',
  concept:'If a fund must sell less-liquid assets to meet withdrawals, the costs can fall on remaining investors. That can create an advantage to redeeming early, encouraging a run. Fund structure, valuation, and redemption terms matter alongside the assets it holds.',
  historyTitle:'A money-market fund breaks its price convention',period:'2008',
  history:'The Reserve Primary Fund held Lehman Brothers debt. After Lehman failed, the fund’s net asset value fell below its usual dollar-per-share target and redemptions were disrupted. SEC records document the event and the process of returning funds to investors.',
  connection:'A money-market fund is an investment fund, with risks different from an insured deposit. A stable-looking share price is not itself a guarantee. This case helps explain why liquidity and redemption arrangements belong in fund analysis.',
  relatedTopic:'modern',relatedLabel:'Stablecoins and redemption promises',
  terms:'Redemption = returning fund shares to receive payment; Net asset value = assets minus liabilities, divided by shares for a per-share measure; First-mover advantage = a benefit from acting before others',
  sources:[['SEC: Reserve Fund and money-market fund questions','https://www.sec.gov/divisions/investment/guidance/reservefundmmffaq.htm'],['SEC: Reserve Primary Fund enforcement release','https://www.sec.gov/newsroom/press-releases/2009-104-sec-charges-operators-reserve-primary-fund-fraud']]
 },
 crises: {
  lessonId:'leverage',conceptTitle:'A trade can need more time than its funding allows',
  concept:'A convergence trade bets that related prices will move closer together. Even if that eventually happens, widening gaps in the meantime can trigger collateral demands and forced liquidation. Crowded positions add danger when several investors need to exit the same exposure.',
  historyTitle:'Long-Term Capital Management’s funding crisis',period:'1998',
  history:'LTCM combined relative-value strategies with substantial leverage. During market turmoil, relationships it expected to normalize moved against it. The New York Fed helped convene a private recapitalization involving the fund’s creditors and counterparties; it did not inject Federal Reserve capital.',
  connection:'Diversifying the names of your positions can leave a shared exposure to funding stress. The lesson connection is that a valuation argument needs a financing plan capable of surviving adverse prices before the argument pays off.',
  relatedTopic:'risk',relatedLabel:'Common exposures hidden across many positions',
  terms:'Convergence trade = betting that a price or yield difference will narrow; Crowded trade = a position held by many investors who may respond similarly; Recapitalization = adding or restructuring capital',
  sources:[['New York Fed: William McDonough’s testimony on LTCM','https://www.newyorkfed.org/newsevents/speeches/1998/mcd981001']]
 },
 society: {
  lessonId:'lifetime',conceptTitle:'Retirement systems allocate risk across generations',
  concept:'A funded pension accumulates assets to support future benefits. A pay-as-you-go system mainly uses current contributions to finance current beneficiaries. Both ultimately depend on future production, but they distribute market risk, demographic risk, and adjustment burdens differently.',
  historyTitle:'Social insurance becomes a national institution',period:'1935',
  history:'The U.S. Social Security Act established a retirement social-insurance program during the Great Depression. Coverage and benefits subsequently evolved. Today’s system largely finances current recipients with current tax revenue, with trust-fund reserves also contributing.',
  connection:'Pooling longevity risk helps people plan retirement, but does not eliminate aggregate resource constraints. Wages, employment, longevity, and the ratio of contributors to beneficiaries affect the financing challenge. A public pension is not simply an individual brokerage account.',
  relatedTopic:'purpose',relatedLabel:'Risk sharing beyond stock markets',
  terms:'Funded pension = a pension supported by accumulated invested assets; Pay-as-you-go = financing current beneficiaries mainly from current contributions; Demographic risk = exposure to changes in population structure or longevity',
  sources:[['Social Security Administration: historical development','https://www.ssa.gov/history/briefhistory3.html'],['Social Security Administration: program financing and trust funds','https://www.ssa.gov/oact/progdata/fundFAQ.html'],['Social Security Administration: explanation of pay-as-you-go financing','https://www.ssa.gov/policy/docs/chartbooks/fast_facts/2024/fast_facts24.html']]
 },
 modern: {
  lessonId:'digital-claims',conceptTitle:'A target price needs a credible conversion mechanism',
  concept:'Par convertibility means being able to exchange a claim at its stated reference value. A reserve-backed token and an algorithmic token may target the same currency while using very different mechanisms. Ask what you receive on redemption, who must deliver it, and whether that asset stays valuable during a run.',
  historyTitle:'TerraUSD and Luna’s feedback loop',period:'2022',
  history:'TerraUSD relied on a conversion mechanism involving its companion cryptoasset, Luna. In May, falling confidence and attempted exits helped undermine that mechanism. Issuing more Luna to support conversions accompanied a collapse in its value and the loss of TerraUSD’s peg.',
  connection:'The new technology did not remove the old question of what supports a redemption promise. Compare the case with banks and money-market funds, while keeping their different assets, legal rights, and backstops in view. Stablecoin designs are not interchangeable.',
  relatedTopic:'banking',relatedLabel:'Runs, liquidity, and confidence',
  terms:'Par convertibility = exchange at a claim’s stated reference value; Peg = a target exchange value; Reserve-backed = supported by designated assets; Algorithmic = using programmed rules to adjust the stabilization mechanism',
  sources:[['BIS Annual Economic Report: TerraUSD collapse and stablecoin mechanisms','https://www.bis.org/publications/aer-2022/future-monetary-system']]
 }
};

export function renderConnections(topic,escape,{lesson=false}={}){
 const c=chapterConnections[topic];if(!c)return '';
 const help=String(c.terms).split(';').map(s=>`<p>${escape(s.trim())}</p>`).join('');
 return `<details class="chapter-connections"><summary>Connections &amp; history · ${escape(c.historyTitle)} <span class="small muted">(optional)</span></summary><div class="connection-body"><span class="eyebrow">AN EXTRA IDEA</span><h3>${escape(c.conceptTitle)}</h3><p>${escape(c.concept)}</p>${c.formula?`<div class="formula">${escape(c.formula)}</div>`:''}<details class="term-help"><summary class="button">${c.formula?'Explain formula terms':'Explain these terms'}</summary><div class="terms-box">${help}</div></details><span class="eyebrow">WHEN IT MATTERED · ${escape(c.period)}</span><h3>${escape(c.historyTitle)}</h3><p>${escape(c.history)}</p><div class="connection-takeaway"><strong>Connection to the lesson</strong><p>${escape(c.connection)}</p></div><p class="small">Also connects to <a class="link" href="#chapter/${escape(c.relatedTopic)}">${escape(c.relatedLabel)}</a>.</p><p class="small muted">Sources for the concept and historical account; the lesson connection is our interpretation. Checked October 14, 2026.</p><ul class="connection-sources">${c.sources.map(([label,url])=>`<li><a class="small link" href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(label)} ↗</a></li>`).join('')}</ul>${lesson?'':`<a class="button" href="#lesson/${escape(c.lessonId)}">Explore the related lesson →</a>`}</div></details>`;
}
