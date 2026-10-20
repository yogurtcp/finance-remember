import {seeded} from './engine.js';
export function bondPrice(F,C,y,T){let p=0;for(let t=1;t<=T;t++)p+=C/(1+y)**t;return p+F/(1+y)**T;}
export function mortgage(L,i,n){return i===0?L/n:L*i/(1-(1+i)**(-n));}
const money=x=>'$'+x.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
const pct=x=>(x*100).toFixed(2)+'%';
export const templates=[
 ['bond-price','bonds','Price a coupon bond'],['bond-coupon','bonds','Coupon and final payment'],['zero','bonds','Zero-coupon price'],['current-yield','bonds','Current yield'],['duration','bonds','Duration estimate'],['real-return','bonds','Real purchasing-power return'],['pv','bonds','Present value'],['annuity','bonds','Level annuity'],['forward-rate','bonds','Implied forward rate'],['compound','bonds','Compound growth'],['portfolio','risk','Diversified volatility'],['capm','risk','CAPM required return'],['expected','risk','Expected return'],['gordon','equity','Gordon growth value'],['marketcap','equity','Market capitalization'],['npv','equity','Project NPV'],['leverage','crises','Leveraged equity return'],['bank-capital','banking','Capital versus risk-weighted assets'],['bank-loss','banking','Bank loss absorption'],['call','derivatives','Call profit'],['put','derivatives','Put profit'],['parity','derivatives','Put–call parity'],['binomial','derivatives','Replicating hedge'],['carry','derivatives','Forward delivery price'],['mortgage','housing','Monthly loan payment'],['ltv','housing','Loan-to-value'],['caprate','housing','Property cap rate'],['debt','society','Debt-ratio dynamics']
];
export function calculationCards(){return templates.map(([key,topic,title])=>({id:'calc-'+key,key,topic,title,kind:'Calculation',source:'coursera'}));}
const calculationReferences={
 'bond-price':['P = Σₜ₌₁ᵀ C/(1+y)ᵗ + F/(1+y)ᵀ','P = bond price; C = coupon payment per period; F = face value (principal repaid at maturity); y = yield to maturity per period; t = current payment-period index; T = total remaining payment periods; Σ means sum.'],
 'bond-coupon':['C = F × c / m','C = coupon payment per period; F = face value (principal); c = annual coupon rate as a decimal; m = coupon payments per year. Semiannual means two payments per year.'],
 'zero':['P = F/(1+y)ᵀ','P = bond price today; F = face value received at maturity; y = effective annual yield; T = years to maturity.'],
 'current-yield':['Current yield = annual coupon payment / current bond price','Annual coupon payment means the total coupons in one year. This ratio excludes gains or losses between purchase price and maturity value. Multiply a decimal yield by 100 to express percent.'],
 'duration':['ΔP/P ≈ −Dmod × Δy','P = current bond price; ΔP = change in price; Dmod = modified duration; Δy = yield change as a decimal. Δ means change and ≈ means approximately equal. Multiply the result by 100 for percent.'],
 'real-return':['Real return = (1 + nominal return)/(1 + inflation) − 1','Nominal return = money return before inflation; real return = purchasing-power return; inflation = price-level growth. Use decimal rates for the same period.'],
 'pv':['PV = FV/(1+r)ᵀ','PV = present value today; FV = future cash payment; r = discount rate per period; T = number of periods until receipt.'],
 'annuity':['PV = C[1 − (1+r)⁻ᵀ]/r','PV = present value; C = level cash payment each period; r = discount rate per period; T = total payments. This formula assumes payments at the END of each period.'],
 'forward-rate':['(1+s₂)² = (1+s₁)(1+f₁,₂)','s₁ = effective annual one-year spot rate; s₂ = effective annual two-year spot rate; f₁,₂ = implied one-year forward rate from the end of year 1 to the end of year 2.'],
 'compound':['FV = PV(1+r)ᵀ','FV = future (ending) wealth; PV = starting investment; r = effective return per period; T = total periods. Gains are reinvested.'],
 'portfolio':['σp² = wA²σA² + wB²σB² + 2wAwBρσAσB; σp = √(σp²)','σp = portfolio volatility; σA and σB = asset volatilities; wA and wB = portfolio weights; ρ = correlation between asset returns. Use decimal weights and volatilities; take the square root to get volatility.'],
 'capm':['Required return = risk-free rate + beta × market risk premium','CAPM = Capital Asset Pricing Model; beta = sensitivity to market returns; market risk premium = expected market return minus the risk-free rate.'],
 'expected':['E[R] = p × Rup + (1−p) × Rdown','E[R] = expected return; p = probability of the up outcome; Rup = return in the up outcome; Rdown = return in the down outcome. Use consistent return units.'],
 'gordon':['P₀ = D₁/(r−g), with r > g','P₀ = stock value today; D₁ = next period’s dividend per share; r = required return on equity; g = constant perpetual dividend growth rate. Enter r and g as decimals.'],
 'marketcap':['Market capitalization = share price × shares outstanding','Market capitalization is the market value of the company’s equity. If share count is in millions, the result is in millions of currency units.'],
 'npv':['NPV = future payment/(1+r)ᵀ − initial investment','NPV = net present value; r = discount rate per period; T = periods until the single future payment. General projects require summing all discounted future cash flows.'],
 'leverage':['Equity return = (assets/equity) × asset return','Assets/equity = leverage ratio; equity = assets minus debt. This approximation assumes unchanged debt and ignores interest, fees and other financing costs.'],
 'bank-capital':['Risk-weighted assets = exposure × risk weight; required capital = risk-weighted assets × capital requirement','Risk-weighted assets (RWA) weight exposures under the regulatory rules. The capital requirement in this example is illustrative, not the complete rule for every bank.'],
 'bank-loss':['Remaining equity = assets before loss − asset loss − liabilities','Assets = holdings and loans; liabilities = obligations owed; equity = residual value after liabilities. This example holds liabilities unchanged.'],
 'call':['Call payoff = max(S_T−K,0); net profit = payoff − premium','S_T = stock price at expiration; K = strike (exercise) price; max(a,0) means a if positive, otherwise zero. All values here are per share.'],
 'put':['Put payoff = max(K−S_T,0); net profit = payoff − premium','K = strike (exercise) price; S_T = stock price at expiration; max(a,0) means a if positive, otherwise zero. All values here are per share.'],
 'parity':['C + K e^(−rT) = P + S₀','C = call option price today; P = put option price today; S₀ = stock price today; K = strike price; r = continuously compounded risk-free annual rate; T = years to expiration; e = exponential constant. These are matching European options on a non-dividend-paying stock.'],
 'binomial':['Δ = (Cᵤ−C_d)/(Sᵤ−S_d)','Δ = hedge ratio (shares per option); Cᵤ and C_d = call payoffs in up and down states; Sᵤ and S_d = stock prices in those states. A call payoff is max(stock price − strike price,0).'],
 'carry':['F₀ = S₀ e^(rT)','F₀ = forward delivery price agreed today; S₀ = spot asset price today; r = continuously compounded risk-free annual rate; T = years to delivery; e = exponential constant. This F₀ means forward price, not bond face value.'],
 'mortgage':['Monthly payment = L × i/[1 − (1+i)⁻ⁿ]','L = starting loan principal; i = monthly interest rate (the given nominal annual rate divided by 12); n = total monthly payments. This is a level principal-and-interest payment.'],
 'ltv':['Loan-to-value ratio = outstanding loan balance / property value','Loan-to-value (LTV) measures the loan relative to its collateral value. Multiply the decimal ratio by 100 for percent.'],
 'caprate':['Capitalization rate = net operating income / property value','Net operating income (NOI) is annual property income after operating expenses, before debt service. This is not the investor’s complete leveraged return.'],
 'debt':['Δd ≈ (r−g)d + p','Δd = change in debt-to-GDP ratio; d = existing debt-to-GDP ratio; r = effective nominal interest rate; g = nominal GDP growth; p = primary deficit/GDP. GDP = gross domestic product. Use decimals; multiply the resulting change by 100 for percentage points.' ]
};

const calculationReadingGuides={
  "bond-price": [
    "Purchase price · dollars today",
    "Each future payment is dollars. The yield is an annual percentage entered as a decimal, and the number of annual periods is years. Discounting asks what each later payment is worth today.",
    "This is the dollar price paid now for the modeled payments, not the interest earned each year. The final payment includes principal as well as interest."
  ],
  "bond-coupon": [
    "Each interest payment · dollars every six months",
    "Face value is the principal promised at maturity. The annual coupon rate is percent of face value per year. Semiannual means two payments each year, so divide the annual interest dollars into two payments.",
    "The result is one coupon in dollars, not an annual percentage or the final principal repayment."
  ],
  "zero": [
    "Purchase price · dollars today",
    "A zero-coupon bond makes no interim interest payments. Compare dollars paid now with the dollar amount received after the stated number of years. The yield is an effective annual percentage.",
    "This is what the single future repayment is worth today at the assumed annual yield. It is not the dollar gain; that would also depend on what is received later."
  ],
  "current-yield": [
    "Annual interest income · percent of purchase price",
    "Divide the interest paid over one year, in dollars, by the price paid in dollars. This gives a decimal fraction. Multiply by 100 to display a percentage.",
    "This is an annual coupon-income percentage. It leaves out any gain or loss between the purchase price and principal repaid later, and does not guarantee payments."
  ],
  "duration": [
    "Estimated price change · percent of starting price",
    "The yield increase is a difference in annual rates, measured in percentage points. Divide that point change by 100 before multiplying by modified duration. The minus sign represents the usual opposite movement of price and yield.",
    "This percentage describes the modeled price change for the specified yield move. It is not an annual investment return or the number of years until repayment."
  ],
  "real-return": [
    "Purchasing-power return · percent over one year",
    "The example’s nominal return and inflation both cover one year. Compare the money-growth factor with the goods-price-growth factor before subtracting 1 and converting to percent.",
    "This estimates how much more or less the money can buy after that year. A positive nominal money return can coexist with a negative purchasing-power return."
  ],
  "pv": [
    "Present value · dollars today",
    "The future amount is dollars and the waiting time is years. The annual discount rate is entered as a decimal. Dividing reverses the growth that would connect today’s money with the later payment.",
    "The result is a value today, not the payment received later. It depends on the assumed discount rate and payment timing."
  ],
  "annuity": [
    "Value of the full payment stream · dollars today",
    "Each payment is dollars at a year-end. Each has a different waiting time. The annual discount rate must be paired with annual periods before all present values are added.",
    "The result values all the modeled payments together. It is not the yearly payment amount or their undiscounted sum."
  ],
  "forward-rate": [
    "Rate for the second year · percent per year",
    "Both spot rates are effective annual percentages. A two-year investment compounds for two years. Divide its growth factor by the first-year factor to find the implied rate for the remaining year.",
    "This is today’s implied annual rate for the interval from the end of year 1 to the end of year 2. It is a pricing relationship, not a certain forecast."
  ],
  "compound": [
    "Ending wealth · dollars after the stated years",
    "The starting amount is dollars. The assumed effective return is percent per year. Reinvesting gains means each year’s ending money becomes the next year’s starting money.",
    "This is the full ending amount, including starting principal. To obtain the dollar gain, subtract the starting investment. The constant rate is an exercise assumption."
  ],
  "portfolio": [
    "Portfolio volatility · annual return percentage units",
    "Each asset’s volatility describes annual returns. Weights are fractions of invested money; correlation is unitless. Calculate variance first, then take its square root to return to volatility units.",
    "This measures modeled annual return variation, not a promised annual loss or expected return. It can fall below each asset’s volatility when their fluctuations partly offset."
  ],
  "capm": [
    "Model required return · percent per year",
    "The risk-free rate and market risk premium are annual percentages. Beta is unitless. The premium is already expected market return minus the risk-free rate, so do not subtract the risk-free rate twice.",
    "This is an annual percentage required by CAPM under the inputs. It is a model comparison, not a forecast guaranteed to be earned."
  ],
  "expected": [
    "Expected percentage return · over one year",
    "Each possible gain or loss is a percentage for the same year. A probability is a unitless fraction between 0 and 1. Multiply each return by its probability and add the contributions.",
    "The result is the probability-weighted average annual outcome in this scenario. The actual investment can earn one of the different possible outcomes instead."
  ],
  "gordon": [
    "Estimated share value · dollars per share today",
    "The dividend is dollars per share next year. Required return and perpetual growth are percentages per year, entered as decimals. Subtract the growth rate from the required rate before dividing.",
    "This is the model’s dollar price per share. It is not an annual percentage return. The constant-growth assumption requires the required return to exceed growth."
  ],
  "marketcap": [
    "Equity market value · million dollars",
    "The share price is dollars per share, and the share count is millions of shares. Multiplying cancels the share units and leaves millions of dollars.",
    "This is the market value of the stated shares together. It is not yearly business earnings or new cash paid to the company."
  ],
  "npv": [
    "Net present value · dollars today",
    "The investment cost and single future payment are dollars. The annual discount rate and years are matched. First find the future payment’s value today, then subtract the initial cost.",
    "A positive dollar result means value added under the assumed cash flow and discount rate; a negative result means the modeled benefits do not cover the cost."
  ],
  "leverage": [
    "Equity return · percent over the modeled price move",
    "Assets/equity is a ratio in times, not an interest rate. The asset return is a percentage for the specified move. The same dollar gain or loss falls on a smaller owner’s stake because debt is held fixed.",
    "This is the percentage change in the owner’s equity for this move. No annual period is implied. Financing interest and fees are excluded from the example."
  ],
  "bank-capital": [
    "Illustrative required capital · million dollars",
    "Exposure and risk-weighted assets are millions of dollars. The risk weight and capital requirement are percentages of different bases. Apply the risk weight first, then apply the assumed capital percentage.",
    "The result is a dollar amount of qualifying loss-absorbing funding in this simplified calculation. It is neither interest charged to borrowers nor cash that must sit in a vault."
  ],
  "bank-loss": [
    "Remaining equity · million dollars",
    "Assets and liabilities are values in millions of dollars at a date. The loss reduces asset value; obligations are held unchanged. Equity is what remains after those obligations.",
    "This is the owners’ remaining dollar cushion after the modeled loss. A negative result means liabilities exceed assets in the simplified balance sheet."
  ],
  "call": [
    "Net option profit · dollars per share at expiration",
    "Stock and strike are dollars per share. A call’s payoff is the positive amount by which stock exceeds strike, or zero. Subtract the premium in the same dollars-per-share units to obtain profit.",
    "This is simple profit per share at expiration, after the premium but before financing and trading costs. Multiply by the contract’s actual share count for the contract total."
  ],
  "put": [
    "Net option profit · dollars per share at expiration",
    "Stock and strike are dollars per share. A put’s payoff is the positive amount by which strike exceeds stock, or zero. Subtract the premium in the same units.",
    "This is simple profit per share at expiration, after the premium but before financing and trading costs. A positive payoff can still be smaller than the premium and leave a loss."
  ],
  "parity": [
    "Call price · dollars per share today",
    "The put, stock and strike are dollars per share. Time is years. The interest rate is continuously compounded per year, entered as a decimal. Discount the future strike payment before comparing today’s prices.",
    "This is the present call price consistent with the stated matching European options and no-dividend assumption. It is not the call’s payoff at expiration."
  ],
  "binomial": [
    "Hedge ratio · shares per option on one share",
    "Compute the option payoff in each modeled state, in dollars per share of underlying. Divide its payoff difference by the stock-price difference. The dollar units cancel to give the required share exposure.",
    "This tells you the stock part of a replicating hedge for the modeled states. It is neither an option price nor a probability; cash borrowing or lending completes the replication."
  ],
  "carry": [
    "Agreed delivery price · dollars per asset unit",
    "The spot price is dollars per unit now. Time to delivery is years. The assumed financing rate is continuously compounded per year. The exponential factor grows the spot purchase cost over that waiting time.",
    "This is the future exchange price agreed today, not money necessarily paid to open the forward. Income, storage and other holding benefits or costs are excluded here."
  ],
  "mortgage": [
    "Principal-and-interest payment · dollars per month",
    "The loan is dollars. The stated nominal annual rate is divided by 12 to obtain the monthly rate under this example’s convention. Years multiplied by 12 gives the number of monthly payments.",
    "This is the level monthly amount covering interest and principal repayment. It excludes taxes, insurance and fees. The interest and principal portions change over time."
  ],
  "ltv": [
    "Loan-to-value ratio · percent at the valuation date",
    "Loan balance and home value are dollars at a date. Divide the outstanding loan by property value, then multiply by 100. This compares two stocks of value, not yearly income.",
    "This is the share of property value represented by the debt. It is not an annual interest rate. The remaining owner’s value can change if the property price changes."
  ],
  "caprate": [
    "Cap rate · annual operating-income percentage",
    "Net operating income is dollars per year after operating expenses and before loan payments. Property value is dollars. Dividing compares one year’s operating income with the purchase value.",
    "This is an annual operating-income percentage before financing and price changes. It is not the owner’s complete annual investment return."
  ],
  "debt": [
    "Change in debt/GDP · percentage points for the modeled year",
    "Debt/GDP and the primary deficit/GDP are ratios. The interest and GDP-growth rates are nominal annual rates. Use decimals in the formula and multiply the resulting ratio change by 100 for percentage points.",
    "This is a change in the debt ratio’s percentage scale, not the percentage growth of the dollar debt stock. It uses the stated approximation and omits other valuation or fiscal adjustments."
  ]
};

export function generate(key,seed){
 const rnd=seeded(seed),pick=a=>a[Math.floor(rnd()*a.length)],int=(a,b)=>a+Math.floor(rnd()*(b-a+1));
 let q,a,work,givens=[],steps=[],unit='number',tol=.02;
 const F=pick([500,1000,2000]),y=pick([.03,.04,.05,.06,.07]),T=int(2,5),C=F*pick([.03,.04,.05,.06]);
 switch(key){
 case 'bond-price':q=`A bond promises face value F = $${F}, annual coupons C = $${C}, and ${T} years to maturity (T). Its required annual yield to maturity (y) is ${pct(y)}. What is its price? Assume annual compounding and no default.`;a=bondPrice(F,C,y,T);work=`P = Σ C/(1+y)^t + F/(1+y)^T = ${money(a)}. t runs from 1 to ${T}; the last cash flow is $${C+F}. Discount coupons as well as principal.`;unit='dollars';tol=.1;givens=[['Face value',money(F)],['Annual coupon payment',money(C)],['Required annual yield',pct(y)],['Remaining annual payments',String(T)]];steps=[`Final payment = coupon + principal = ${money(C)} + ${money(F)} = ${money(C+F)}.`,...Array.from({length:T},(_,i)=>{const t=i+1,cf=t===T?C+F:C;return `Payment ${t}: ${money(cf)} ÷ (1 + ${y})^${t} = ${money(cf/(1+y)**t)} today.`;}),`Add the discounted payments = ${money(a)}. Full precision is used before rounding the total.`];break;
 case 'bond-coupon':{const r=pick([.03,.04,.05,.06]);q=`A bond has $${F} face value and an annual coupon rate of ${pct(r)}, paid semiannually. How much is EACH coupon? Enter dollars.`;a=F*r/2;work=`C = F × annual coupon rate / 2 = ${money(a)}. At maturity add the $${F} principal to the final coupon. The quoted annual rate is not a payment amount.`;unit='dollars';givens=[['Face value',money(F)],['Annual coupon rate',pct(r)],['Payments each year','2 (semiannual)']];steps=[`Convert ${pct(r)} to decimal: ${r}.`,`Annual interest = ${money(F)} × ${r} = ${money(F*r)}.`,`Each coupon = ${money(F*r)} ÷ 2 = ${money(a)}.`];break;}
 case 'zero':q=`A zero-coupon bond pays $${F} in ${T} years. Required effective annual yield is ${pct(y)}. What is its price today?`;a=F/(1+y)**T;work=`P = F/(1+y)^T = ${money(a)}. No interim coupons means no coupon reinvestment problem.`;unit='dollars';tol=.1;givens=[['Payment at maturity',money(F)],['Annual yield',pct(y)],['Years to maturity',String(T)]];steps=[`Yield as a decimal = ${y}; annual growth factor = 1 + ${y} = ${(1+y).toFixed(2)}.`,`Discount factor denominator = ${(1+y).toFixed(2)}^${T} = ${((1+y)**T).toFixed(6)}.`,`Price = ${money(F)} ÷ ${((1+y)**T).toFixed(6)} = ${money(a)} (using full precision).`];break;
 case 'current-yield':{const P=pick([900,950,1050,1100]);q=`A bond trades at $${P} and pays a $${C} ANNUAL coupon. What is its current yield, in percent?`;a=C/P*100;work=`Current yield = coupon / price = ${pct(C/P)}. YTM also accounts for principal repayment and timing.`;unit='percent';givens=[['Purchase price',money(P)],['Annual coupon payment',money(C)]];steps=[`Current yield as a decimal = ${C} ÷ ${P} = ${(C/P).toFixed(6)}.`,`Convert to percent: ${(C/P).toFixed(6)} × 100 = ${a.toFixed(2)}%.`,`This excludes the eventual difference between purchase price and principal repayment.`];break;}
 case 'duration':{const D=int(3,10),dy=pick([.005,.01,.015]);q=`Modified duration is ${D}. Yield rises by ${pct(dy)} (${dy*100} percentage points). Approximate the signed percentage price change. Ignore convexity.`;a=-D*dy*100;work=`ΔP/P ≈ −D × Δy = −${D} × ${dy} = ${a.toFixed(2)}%. Enter a negative change for a decline.`;unit='percent';givens=[['Modified duration',String(D)],['Yield increase',`${dy*100} percentage points`]];steps=[`A ${dy*100} percentage-point change is ${dy} in decimal yield units.`,`Approximate fractional price change = −${D} × ${dy} = ${(-D*dy).toFixed(4)}.`,`Multiply by 100 = ${a.toFixed(2)}%. The minus sign means a decline; convexity is omitted.`];break;}
 case 'real-return':{const r=pick([.04,.06,.08,.1]),pi=pick([.02,.03,.05]);q=`Over one year, nominal return is ${pct(r)} and inflation is ${pct(pi)}. What is the EXACT real return in percent?`;a=((1+r)/(1+pi)-1)*100;work=`Real return = (1+r)/(1+inflation) − 1 = ${a.toFixed(2)}%. Subtraction is only an approximation.`;unit='percent';givens=[['Nominal return',pct(r)],['Inflation',pct(pi)]];steps=[`Convert to decimal rates: return ${r}, inflation ${pi}.`,`Compare wealth growth with price growth: (1 + ${r}) ÷ (1 + ${pi}) = ${((1+r)/(1+pi)).toFixed(6)}.`,`Subtract 1 and multiply by 100 = ${a.toFixed(2)}% purchasing-power return.`];break;}
 case 'pv':q=`You will receive $${F} in ${T} years. The effective annual discount rate is ${pct(y)}. What is the present value?`;a=F/(1+y)**T;work=`PV = ${F}/(1+${y})^${T} = ${money(a)}. The rate and periods use the same annual convention.`;unit='dollars';tol=.1;givens=[['Future payment',money(F)],['Annual discount rate',pct(y)],['Years until receipt',String(T)]];steps=[`Annual discount denominator is 1 + ${y} = ${(1+y).toFixed(2)}.`,`Over ${T} years it becomes ${(1+y).toFixed(2)}^${T} = ${((1+y)**T).toFixed(6)}.`,`Present value = ${money(F)} ÷ that full-precision denominator = ${money(a)}.`];break;
 case 'annuity':q=`An annuity pays $${C} at each year-end for ${T} years. The annual rate is ${pct(y)}. What is its present value?`;a=C*(1-(1+y)**(-T))/y;work=`PV = C[1−(1+r)^−T]/r = ${money(a)}. This is an ordinary annuity, not payments at the start of each period.`;unit='dollars';tol=.1;givens=[['Each year-end payment',money(C)],['Annual discount rate',pct(y)],['Total annual payments',String(T)]];steps=[`Discount each payment for its own waiting time.`,...Array.from({length:T},(_,i)=>`Year ${i+1}: ${money(C)} ÷ (1 + ${y})^${i+1} = ${money(C/(1+y)**(i+1))}.`),`Add the full-precision discounted payments = ${money(a)}. The compact annuity formula gives the same result.`];break;
 case 'forward-rate':{const s1=pick([.03,.04,.05]),s2=Number((s1+.01).toFixed(2));q=`One-year spot rate is ${pct(s1)}; two-year spot rate is ${pct(s2)}. Both are effective annual rates. What is the implied one-year rate starting in one year, in percent?`;a=((1+s2)**2/(1+s1)-1)*100;work=`(1+s₂)² = (1+s₁)(1+f), so f = ${a.toFixed(2)}%. This is a pricing rate, not a certain forecast.`;unit='percent';givens=[['One-year spot rate',pct(s1)],['Two-year spot rate',pct(s2)]];steps=[`Two-year growth factor = (1 + ${s2})² = ${((1+s2)**2).toFixed(6)}.`,`Divide by first-year growth, 1 + ${s1} = ${(1+s1).toFixed(2)}.`,`Forward gross factor = ${((1+s2)**2/(1+s1)).toFixed(6)}. Subtract 1 and multiply by 100 = ${a.toFixed(2)}%.`];break;}
 case 'compound':q=`Invest $${F} at ${pct(y)} effective annual return for ${T} years, with all gains reinvested. What is ending wealth?`;a=F*(1+y)**T;work=`FV = PV(1+r)^T = ${money(a)}. Compound growth is not initial principal plus T times one-year gains.`;unit='dollars';tol=.1;givens=[['Starting investment',money(F)],['Effective annual return',pct(y)],['Years invested',String(T)]];steps=[`Each year multiplies wealth by 1 + ${y} = ${(1+y).toFixed(2)}.`,`Total growth factor = ${(1+y).toFixed(2)}^${T} = ${((1+y)**T).toFixed(6)}.`,`Ending wealth = ${money(F)} × the full-precision factor = ${money(a)}.`];break;
 case 'portfolio':{const s=pick([.1,.2,.3]),rho=pick([-.5,0,.5]);q=`Two assets each have ${pct(s)} annual return volatility, correlation ${rho}, and equal 50% weights. What is portfolio volatility in percent?`;a=s*Math.sqrt((1+rho)/2)*100;work=`σp² = (0.5²+0.5²)σ² + 2(0.5)(0.5)ρσ². Taking the square root gives ${a.toFixed(2)}%.`;unit='percent';givens=[['Volatility of each asset',pct(s)],['Weight of each asset','50%'],['Correlation',String(rho)]];steps=[`Use decimal volatility ${s} and weights 0.5.`,`Variance = (0.5² + 0.5²) × ${s}² + 2 × 0.5 × 0.5 × ${rho} × ${s}² = ${(s*s*(1+rho)/2).toFixed(6)}.`,`Take the square root = ${(a/100).toFixed(6)}; multiply by 100 = ${a.toFixed(2)}% volatility.`];break;}
 case 'capm':{const rf=pick([.02,.03,.04]),premium=pick([.04,.05,.06]),b=pick([.5,1,1.5]);q=`Risk-free rate is ${pct(rf)}, expected MARKET RISK PREMIUM is ${pct(premium)}, and beta is ${b}. What is the Capital Asset Pricing Model (CAPM) required return in percent?`;a=(rf+b*premium)*100;work=`Required return = Rf + β × market risk premium = ${a.toFixed(2)}%. The premium is already the market return minus Rf.`;unit='percent';givens=[['Risk-free rate',pct(rf)],['Expected market risk premium',pct(premium)],['Beta',String(b)]];steps=[`Market-risk compensation = beta × premium = ${b} × ${premium*100}% = ${(b*premium*100).toFixed(2)}%.`,`Add the risk-free return: ${rf*100}% + ${(b*premium*100).toFixed(2)}% = ${a.toFixed(2)}%.`,`The premium is already the expected market return minus the risk-free rate.`];break;}
 case 'expected':{const up=pick([20,30,40]),down=pick([-10,-20]),p=pick([.4,.6]);q=`Over one year, an investment returns +${up}% with probability ${p}, and ${down}% otherwise. What is its arithmetic expected return in percent?`;a=p*up+(1-p)*down;work=`E[R] = ${p} × ${up} + ${1-p} × (${down}) = ${a.toFixed(2)}%. This does not describe guaranteed compounded wealth.`;unit='percent';givens=[['Up-state return',up+'%'],['Down-state return',down+'%'],['Probability of up state',p*100+'%']];steps=[`Remaining probability = 1 − ${p} = ${(1-p).toFixed(1)}.`,`Weight each return: ${p} × ${up}% = ${(p*up).toFixed(2)}%; ${(1-p).toFixed(1)} × ${down}% = ${((1-p)*down).toFixed(2)}%.`,`Add the contributions = ${a.toFixed(2)}% expected return.`];break;}
 case 'gordon':{const D=pick([2,3,4,5]),r=pick([.07,.08,.09]),g=pick([.02,.03]);q=`Next year’s dividend D₁ is $${D}; required annual equity return r is ${pct(r)}; perpetual growth g is ${pct(g)}. What is Gordon-model value?`;a=D/(r-g);work=`P₀ = D₁/(r−g) = ${D}/(${r}−${g}) = ${money(a)}. The assumptions require r > g.`;unit='dollars';tol=.1;givens=[['Next dividend per share',money(D)],['Required equity return',pct(r)],['Perpetual dividend growth',pct(g)]];steps=[`Rate gap = ${r} − ${g} = ${(r-g).toFixed(2)}.`,`Value = ${money(D)} ÷ ${(r-g).toFixed(2)} = ${money(a)}.`,`The required return must exceed perpetual growth; a small gap makes valuation sensitive.`];break;}
 case 'marketcap':{const P=int(10,50),n=pick([2,5,10]);q=`Share price is $${P}; there are ${n} million shares outstanding. What is market cap in MILLIONS of dollars?`;a=P*n;work=`Equity market cap = price × shares = $${a} million. This is not enterprise value or annual revenue.`;unit='million dollars';givens=[['Share price',money(P)],['Shares outstanding',n+' million']];steps=[`Multiply share price by share count: ${P} × ${n} million = ${a} million dollars.`,`This is the market value of equity, rather than annual revenue or enterprise value.`];break;}
 case 'npv':{const cost=pick([900,1000,1100]);q=`A project costs $${cost} now and pays $${F} once in ${T} years. Appropriate annual discount rate is ${pct(y)}. What is net present value (NPV) in dollars?`;a=F/(1+y)**T-cost;work=`NPV = future payout/(1+r)^T − initial outlay = ${money(a)}. Positive NPV indicates value creation under these assumptions.`;unit='dollars';tol=.1;givens=[['Initial investment',money(cost)],['Single future payment',money(F)],['Annual discount rate',pct(y)],['Years until payment',String(T)]];steps=[`Discount denominator = (1 + ${y})^${T} = ${((1+y)**T).toFixed(6)}.`,`Future payment’s present value = ${money(F)} ÷ that full-precision denominator = ${money(F/(1+y)**T)}.`,`Subtract the initial investment: ${money(F/(1+y)**T)} − ${money(cost)} = ${money(a)} (using full precision).`];break;}
 case 'leverage':{const lev=pick([2,4,5]),r=pick([-.1,-.05,.05,.1]);q=`Assets/equity leverage is ${lev}×. Assets move ${pct(r)}. With unchanged debt and ignoring financing costs, what is equity return in percent?`;a=lev*r*100;work=`Equity return = leverage × asset return = ${a.toFixed(2)}%. Dollar losses hit the smaller equity cushion.`;unit='percent';givens=[['Assets divided by equity',lev+' times'],['Asset return',pct(r)]];steps=[`The equity cushion is one-${lev===2?'half':lev===4?'quarter':'fifth'} of the assets in this fixed-debt example.`,`Equity return = ${lev} × ${r*100}% = ${a.toFixed(2)}%.`,`The same dollar gain or loss falls on the smaller equity investment; interest and fees are ignored.`];break;}
 case 'bank-capital':{const assets=pick([50,100,200]),weight=pick([.5,.75,1]),rate=.08;q=`A simplified bank exposure is $${assets} million with ${weight*100}% risk weight. Using ONLY an illustrative 8% capital requirement, how much regulatory capital is required, in millions?`;a=assets*weight*rate;work=`RWA = ${assets} × ${weight} = ${assets*weight} million. Capital = RWA × 0.08 = $${a} million. Real requirements include capital categories, buffers and other rules.`;unit='million dollars';givens=[['Exposure',assets+' million dollars'],['Regulatory risk weight',weight*100+'%'],['Illustrative capital requirement','8%']];steps=[`Risk-weighted assets = ${assets} million × ${weight} = ${assets*weight} million dollars.`,`Illustrative required capital = ${assets*weight} million × 0.08 = ${a} million dollars.`,`The 8% is an assumed example rule, before buffers and other requirements; it is not a lending rate or a cash-reserve requirement.`];break;}
 case 'bank-loss':{const A=100,L=pick([85,90,95]),loss=pick([3,6,8]);q=`A bank has $100 million assets and $${L} million liabilities. Assets suffer $${loss} million loss with liabilities unchanged. What is remaining equity, in millions?`;a=A-L-loss;work=`Equity = assets − liabilities. After loss: (${A}−${loss})−${L} = $${a} million. Negative economic equity indicates insolvency in this simplified case.`;unit='million dollars';givens=[['Assets before the loss','100 million dollars'],['Liabilities',L+' million dollars'],['Asset loss',loss+' million dollars']];steps=[`Starting equity = 100 − ${L} = ${100-L} million dollars.`,`Assets after the loss = 100 − ${loss} = ${100-loss} million dollars.`,`Remaining equity = ${100-loss} − ${L} = ${a} million dollars.`];break;}
 case 'call':case 'put':{const S=pick([80,90,110,120,130]),K=100,premium=pick([5,8,10]);const call=key==='call';q=`You buy a ${call?'call':'put'} with strike $100 and pay $${premium} premium per share. Stock is $${S} at expiration. What is NET PROFIT per share, ignoring financing and fees?`;const payoff=Math.max(call?S-K:K-S,0);a=payoff-premium;work=`Payoff = max(${call?'S−K':'K−S'},0) = $${payoff}. Profit = payoff − premium = ${money(a)} per share. A usual 100-share contract multiplies this result by 100.`;unit='dollars';givens=call?[['Stock price at expiration',money(S)],['Strike price',money(K)],['Premium per share',money(premium)]]:[['Stock price at expiration',money(S)],['Strike price',money(K)],['Premium per share',money(premium)]];steps=call?[`Price minus strike = ${money(S)} − ${money(K)} = ${money(S-K)}.`,`Call payoff cannot be negative: max(${S-K}, 0) = ${money(payoff)}.`,`Subtract the premium: ${money(payoff)} − ${money(premium)} = ${money(a)} profit per share. A conventional 100-share contract would multiply this by 100; adjusted contracts can differ.`]:[`Strike minus price = ${money(K)} − ${money(S)} = ${money(K-S)}.`,`Put payoff cannot be negative: max(${K-S}, 0) = ${money(payoff)}.`,`Subtract the premium: ${money(payoff)} − ${money(premium)} = ${money(a)} profit per share.`];break;}
 case 'parity':{const S=100,K=100,T=.5,r=.04,put=pick([4,6,8]);q=`European options on a non-dividend-paying stock: current stock price (S₀) is $100, strike price (K) is $100, time to expiration (T) is 0.5 years, continuously compounded risk-free annual rate (r) is 4%, and put price is $${put}. What must the call cost by parity?`;a=put+S-K*Math.exp(-r*T);work=`C = P + S₀ − Ke^(−rT) = ${money(a)}. Match exercise style, strike and maturity.`;unit='dollars';tol=.1;givens=[['Stock price today',money(S)],['Strike price',money(K)],['Years to expiration',String(T)],['Continuous risk-free annual rate',pct(r)],['Put price',money(put)]];steps=[`Discount exponent = −${r} × ${T} = ${(-r*T).toFixed(4)}; exponential factor = ${Math.exp(-r*T).toFixed(6)}.`,`Present value of strike = ${money(K)} × that factor = ${money(K*Math.exp(-r*T))}.`,`Call price = put + stock − discounted strike = ${money(put)} + ${money(S)} − ${money(K*Math.exp(-r*T))} = ${money(a)} (using full precision).`];break;}
 case 'binomial':{const u=pick([120,130,140]),d=pick([70,80,90]),K=100;const cu=u-K;q=`A stock is $100. Next period it is $${u} or $${d}. A call has a strike price of $100. What hedge ratio (Δ), in shares per option, replicates the call’s change in payoff?`;a=cu/(u-d);work=`Up payoff = $${cu}; down payoff = $0. Δ = (${cu}−0)/(${u}−${d}) = ${a.toFixed(4)} shares. This hedge ratio does not require actual state probabilities.`;unit='shares';tol=.005;givens=[['Stock price today','$100'],['Up-state stock price',money(u)],['Down-state stock price',money(d)],['Call strike','$100']];steps=[`Up-state call payoff = max(${u} − 100, 0) = ${cu} dollars; down-state payoff = max(${d} − 100, 0) = 0.`,`Stock-price difference = ${u} − ${d} = ${u-d} dollars.`,`Hedge ratio = (${cu} − 0) ÷ ${u-d} = ${a.toFixed(4)} shares per option.`];break;}
 case 'carry':{const S=pick([80,100,120]),r=.04,T=.5;q=`A non-income-producing asset costs $${S}. Continuous risk-free rate is 4%, delivery in 0.5 years. Ignore all other carry costs. What is the no-arbitrage forward price?`;a=S*Math.exp(r*T);work=`F₀ = S₀e^(rT) = ${money(a)}. Storage, income and convenience yield would change the carry relation.`;unit='dollars';tol=.1;givens=[['Spot price',money(S)],['Continuous risk-free annual rate','4%'],['Years to delivery','0.5'],['Income and other carry costs','None in this example']];steps=[`Financing exponent = 0.04 × 0.5 = 0.02.`,`Continuous growth factor = e^0.02 = ${Math.exp(.02).toFixed(6)}.`,`Forward delivery price = ${money(S)} × that full-precision factor = ${money(a)}.`];break;}
 case 'mortgage':{const L=pick([100000,200000,300000]),r=pick([.03,.045,.06]),n=360;q=`A $${L.toLocaleString()} loan amortizes over 30 years with level monthly payments. Nominal annual rate is ${pct(r)}, divided by 12 for monthly interest. What is the monthly payment, excluding taxes, insurance and fees?`;a=mortgage(L,r/12,n);work=`i = ${r}/12; n = 360. Payment = L×i/[1−(1+i)^−n] = ${money(a)}. Each payment includes interest and principal.`;unit='dollars';tol=.1;givens=[['Starting loan principal',money(L)],['Nominal annual interest rate',pct(r)],['Loan term','30 years'],['Payment frequency','Monthly']];steps=[`Monthly rate = ${r} ÷ 12 = ${(r/12).toFixed(6)}; total payments = 30 × 12 = 360.`,`Denominator = 1 − (1 + ${r/12})^(−360) = ${(1-(1+r/12)**(-360)).toFixed(6)}.`,`Numerator = ${L} × ${r/12} = ${(L*r/12).toFixed(6)}. Divide by the full-precision denominator = ${money(a)} per month.`,`Payments include principal and interest; taxes and insurance are excluded.`];break;}
 case 'ltv':{const value=pick([200000,400000,600000]),l=pick([.6,.75,.8,.9]);q=`A home is worth $${value.toLocaleString()}; mortgage balance is $${(value*l).toLocaleString()}. What is the loan-to-value ratio (LTV) in percent?`;a=l*100;work=`LTV = mortgage balance / home value = ${a}%. Owner equity before sale costs is the remaining ${100-a}%.`;unit='percent';givens=[['Property value',money(value)],['Outstanding mortgage',money(value*l)]];steps=[`Loan-to-value = ${money(value*l)} ÷ ${money(value)} = ${l}.`,`Multiply by 100 = ${a}% LTV. The remaining equity share is 100% − ${a}% = ${100-a}% before selling costs.`];break;}
 case 'caprate':{const value=pick([500000,800000,1000000]),rate=pick([.04,.05,.06]);q=`Property value is $${value.toLocaleString()}; annual net operating income (NOI), before debt service, is $${(value*rate).toLocaleString()}. What is its cap rate in percent?`;a=rate*100;work=`Cap rate = NOI/property value = ${a.toFixed(2)}%. This excludes debt financing and appreciation.`;unit='percent';givens=[['Property value',money(value)],['Annual net operating income',money(value*rate)]];steps=[`Capitalization rate = ${money(value*rate)} ÷ ${money(value)} = ${rate}.`,`Multiply by 100 = ${a.toFixed(2)}%. Financing and price appreciation are outside this ratio.`];break;}
 case 'debt':{const d=pick([.6,.8,1]),r=.05,g=.03,p=pick([.01,.02]);q=`Debt/GDP is ${d*100}%; effective nominal interest r=5%; nominal GDP growth g=3%; primary deficit/GDP=${p*100}%. Using Δd ≈ (r−g)d+p, what is the change in PERCENTAGE POINTS of GDP?`;a=((r-g)*d+p)*100;work=`Δd ≈ (0.05−0.03)×${d}+${p} = ${a.toFixed(2)} percentage points. This approximation excludes valuation and other adjustments.`;unit='percentage points';givens=[['Existing debt/GDP',d*100+'%'],['Effective nominal interest','5%'],['Nominal GDP growth','3%'],['Primary deficit/GDP',p*100+'%']];steps=[`Use decimal inputs: debt ratio ${d}, interest 0.05, growth 0.03, primary deficit ${p}.`,`Interest-growth contribution = (0.05 − 0.03) × ${d} = ${((r-g)*d).toFixed(4)}.`,`Add the primary deficit = ${((r-g)*d+p).toFixed(4)}. Multiply by 100 = ${a.toFixed(2)} percentage points of GDP.`,`This is the stated approximation; the exact ratio and valuation adjustments can differ.`];break;}
 default:throw Error('Unknown calculation '+key);
 }
 const [formula,symbols]=calculationReferences[key];
 const [unitLabel,readingGuide,resultMeaning]=calculationReadingGuides[key];
 return {prompt:q,answer:a,explanation:work,givens,steps,formula,symbols:symbols+'; Units: '+readingGuide,unitLabel,readingGuide,resultMeaning,unit,tolerance:tol,answerText:unit==='dollars'?money(a):a.toFixed(unit==='shares'?4:2)+' '+unit};
}
export function parseNumber(text){const s=String(text).trim().replace(/[$,%\s]/g,'');if(!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(s))return null;const x=Number(s);return Number.isFinite(x)?x:null;}
export function isCorrect(value,result){return value!==null&&Math.abs(value-result.answer)<=result.tolerance+1e-9;}
