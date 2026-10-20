import {bondPrice} from './calculations.js';
export const guidedLessons=[
  {
    "id": "promise",
    "topic": "bonds",
    "title": "The promise",
    "conceptIds": [
      "bonds-face",
      "bonds-time"
    ],
    "context": "Maya lends money to Cedar Workshop by buying its bond. In this teaching example, the contract lasts three years. It promises to repay $1,000 at the end and to pay interest once each year at a coupon rate of 5% per year.",
    "question": "Maya resells the bond at a different market price. What happens to the principal the company promises to repay?",
    "options": [
      "It becomes the resale price",
      "It remains the $1,000 contractual face value",
      "It becomes the coupon payment"
    ],
    "correct": 1,
    "explanation": "Selling changes who owns the payments. It does not rewrite the company’s promise to repay $1,000 principal. The price paid between investors is a separate dollar amount.",
    "calculations": [
      "bond-coupon"
    ],
    "units": "Face value and payments are dollar amounts. The coupon rate is a percentage of face value per year. The term is a number of years.",
    "sections": [
      {
        "title": "Start with the money the company owes",
        "text": "The $1,000 promised at the end is called the face value, or principal. The final repayment date is called maturity. Face value tells you what the company promises to repay. The price you pay another investor to buy the bond can be different."
      },
      {
        "title": "Separate interest from repayment",
        "text": "A coupon is an interest payment, measured in dollars. A coupon rate is a percentage used to calculate it. Here, 5% means 5 ÷ 100 = 0.05. Multiplying the $1,000 face value by 0.05 gives a $50 interest payment each year."
      },
      {
        "title": "Follow the payments through time",
        "text": "At the end of year 1, Maya is promised $50. At the end of year 2, she is promised another $50. At the end of year 3, she is promised $50 interest plus $1,000 principal: $1,050 altogether. Selling the bond passes these promises to a new owner. It does not change the amounts in the contract."
      }
    ]
  },
  {
    "id": "price",
    "topic": "bonds",
    "title": "The price can change",
    "conceptIds": [
      "bonds-market",
      "bonds-price"
    ],
    "context": "Keep the same example bond: $1,000 promised principal, a coupon rate of 5% per year, and three years left. Assume prices of similar traded bonds now imply that buyers require a yield of 6% per year.",
    "question": "Comparable required yields rise further while this bond’s payments stay fixed. What should happen to its price?",
    "options": [
      "It should fall",
      "Its coupon must increase",
      "It should rise"
    ],
    "correct": 0,
    "explanation": "The future dollar payments stay the same. Paying a lower price for them increases the annual percentage return implied by the purchase. The coupon rate stays in the contract.",
    "calculations": [
      "bond-price"
    ],
    "units": "Price and future payments are in dollars. Coupon rate and required yield are percentages per year. The formula uses years because payments are annual.",
    "sections": [
      {
        "title": "Why would a buyer pay less?",
        "text": "The bond still promises $50 interest per year: $1,000 × 5/100 = $50. A new buyer compares that promise with other investments. If similar risks now require a higher annual percentage return, this bond becomes attractive at a lower purchase price. The company does not have to change its coupon."
      },
      {
        "title": "What does “required yield” mean?",
        "text": "Yield is a percentage associated with the money you pay and the payments you are promised. In this example it is stated per year. The assumed 6% per year is a market comparison for the exercise. In real trading, buyers and sellers agree on prices; those prices imply yields. There is no universal yield announced for every bond."
      },
      {
        "title": "Bring each future payment back to today",
        "text": "Ask how much money today, growing at 6% per year, would become each promised payment. Working backward is called discounting. For a payment one year away, divide by 1 + 6/100 = 1.06. For two years, divide by 1.06 twice. For three years, divide by it three times. Add the resulting dollar values to obtain today’s price."
      }
    ]
  },
  {
    "id": "yield",
    "topic": "bonds",
    "title": "Coupon rate and yield",
    "conceptIds": [
      "bonds-ytminverse",
      "bonds-current",
      "bonds-reinvest"
    ],
    "context": "Two of Cedar Workshop’s annual interest payments have already happened. Exactly one year remains. A new buyer will receive the final $50 interest payment plus $1,000 principal, or $1,050. Assume the company pays in full and the buyer requires a 6% return over that remaining year.",
    "question": "Why can a buyer’s yield exceed the unchanged coupon rate?",
    "options": [
      "The issuer secretly increases the coupon",
      "Buying below face value adds a gain when principal is repaid",
      "Yield is always guaranteed even if the issuer defaults"
    ],
    "correct": 1,
    "explanation": "The buyer pays less than the $1,000 principal that will be repaid and also receives interest. That extra dollar gain helps the yield exceed the coupon rate. This calculation assumes promised payments arrive.",
    "calculations": [
      "current-yield"
    ],
    "units": "Gain is measured in dollars. Percentage return is gain divided by the dollars invested, multiplied by 100. Here the holding period is exactly one year.",
    "sections": [
      {
        "title": "First, what is a return?",
        "text": "A return describes what you gain or lose on an investment. A dollar gain is the money received minus the money paid. A percentage return compares that gain with the amount invested. For example, paying $1,000 and receiving $1,060 after one year gives a $60 gain. The calculation $60 ÷ $1,000 × 100 gives a 6% return for that year. These are chosen example amounts, not market quotes."
      },
      {
        "title": "Apply that idea to this bond",
        "text": "The $1,050 final payment is fixed in the example. To obtain a 6% one-year return, the buyer pays $1,050 ÷ 1.06, or about $990.57 today. The gain is $1,050 minus the unrounded purchase price, about $59.43. That gain divided by the purchase price is 6%. The calculation below keeps full precision before rounding."
      },
      {
        "title": "Coupon rate and yield answer different questions",
        "text": "The 5% coupon rate uses the $1,000 contractual face value. Yield uses the price the buyer actually pays. Buying below face value adds a gain when principal is repaid, so the yield can exceed the coupon rate. Current yield considers only annual interest divided by purchase price. Yield to maturity also accounts for principal repayment and the dates of the payments."
      },
      {
        "title": "What is promised is not always what is earned",
        "text": "Yield to maturity is an annual percentage calculated from promised payments. Default means the borrower does not make all those payments. Selling early also changes your result. If several coupons remain, what you earn by reinvesting those interest payments affects the value of your money at the end. These risks are why a quoted yield is not a guaranteed investment result."
      }
    ]
  },
  {
    "id": "waiting",
    "topic": "bonds",
    "title": "Money across time",
    "conceptIds": [
      "bonds-annuity"
    ],
    "context": "Maya can receive money today or wait for a future payment. She also compares a single future payment with a contract that pays the same dollar amount at the end of each year.",
    "question": "Two otherwise identical certain payments arrive at different dates. With a positive discount rate, which is worth more today?",
    "options": [
      "The later payment",
      "The earlier payment",
      "Waiting never affects present value"
    ],
    "correct": 1,
    "explanation": "The earlier payment can be used or invested sooner. With a positive discount rate, the same dollar payment received later has a lower value today.",
    "calculations": [
      "pv",
      "zero",
      "compound",
      "annuity"
    ],
    "units": "Present and future values are dollar amounts. The examples use interest or discount rates in percent per year and waiting times in years.",
    "sections": [
      {
        "title": "Why does the date matter?",
        "text": "Money received today can be used today or invested while you wait. If an investment earns a positive rate, a smaller amount today can grow into a larger amount later. Compounding means adding investment gains to the money that can earn further gains."
      },
      {
        "title": "Run growth backward",
        "text": "Present value means the dollar amount today that corresponds to a future payment at a chosen rate. Discounting is the calculation that finds it. The rate must fit the payment’s risk and timing. An annual rate goes with years; a monthly rate goes with months."
      },
      {
        "title": "Name the payment pattern",
        "text": "An annuity is a series of payments. Here the examples use equal payments at each year-end for a fixed number of years. A perpetuity is an imagined series continuing indefinitely. Each payment waits a different length of time, so each gets its own present-value calculation. Paying at the start of a year would be a different timing assumption."
      }
    ]
  },
  {
    "id": "curve",
    "topic": "bonds",
    "title": "A curve of rates",
    "conceptIds": [
      "bonds-spot",
      "bonds-forward",
      "bonds-curve"
    ],
    "context": "Maya compares safe payments arriving at different dates. She notices that locking money away for a longer period does not always offer a higher annual interest percentage.",
    "question": "Does today’s implied forward interest rate tell Maya exactly what the future spot rate will be?",
    "options": [
      "Yes, it is a guaranteed forecast",
      "No; it connects today’s prices rather than guaranteeing a future rate",
      "Yes, the issuer sets it for every investor"
    ],
    "correct": 1,
    "explanation": "The forward rate connects investment choices at today’s prices. It is an annual percentage for a named future interval. The actual market rate in that interval can turn out differently.",
    "calculations": [
      "forward-rate"
    ],
    "units": "The rates shown are annual percentages. A maturity is the time until repayment. A forward rate must also name the future interval it covers.",
    "sections": [
      {
        "title": "One payment date, one spot rate",
        "text": "A spot rate is a rate available today for a payment at a particular future date. There can be a different rate for each date. A coupon bond makes several payments at different dates. Its yield to maturity summarizes the price of that whole schedule using one annual percentage."
      },
      {
        "title": "A forward rate connects two periods",
        "text": "Compare investing for a longer term with investing for a shorter term and arranging another investment for the remaining time. A forward rate is the rate for that future interval that makes those arrangements consistent at today’s prices. That is a pricing calculation. It does not guarantee what rates will be when the future arrives."
      },
      {
        "title": "Read the shape without treating it as a prophecy",
        "text": "A yield curve plots yields against repayment dates. It is inverted when shorter-term yields exceed longer-term yields. That may reflect expected rate cuts, demand for longer bonds, or compensation for taking risk over time. Inversions have provided recession warnings historically, but they do not identify a certain recession date."
      }
    ]
  },
  {
    "id": "sensitivity",
    "topic": "bonds",
    "title": "How sensitive is the price?",
    "conceptIds": [
      "bonds-duration",
      "bonds-convexity"
    ],
    "context": "Maya owns a bond with fixed promised dollar payments. Market yields change. She wants a quick estimate of how much its price might change before recalculating every payment.",
    "question": "When a yield move is large, why should Maya be cautious about a duration-only estimate?",
    "options": [
      "Duration is a default probability",
      "The price–yield relationship is curved and options may change cash flows",
      "Bond prices cannot change"
    ],
    "correct": 1,
    "explanation": "Duration draws a straight-line estimate near the current yield. The actual relationship is curved, and early repayment can change the payments. Large rate moves can therefore produce a different price change.",
    "calculations": [
      "duration"
    ],
    "units": "A yield change is measured in percentage points. The estimated bond-price change is a percent of its starting price. Modified duration converts between those changes; it is not the number of years until maturity.",
    "sections": [
      {
        "title": "Keep two kinds of percentage separate",
        "text": "A movement from 5% per year to 6% per year is an increase of one percentage point. The rate is one point higher on the percentage scale. In the duration formula, that change is entered as 1 ÷ 100 = 0.01. The output describes a percentage change in the bond’s dollar price."
      },
      {
        "title": "Use duration as a nearby estimate",
        "text": "Modified duration estimates how sensitive price is to a small change in yield. A positive yield change usually gives a negative price change for a fixed-payment bond. Macaulay duration is related but different: it is an average waiting time, measured in years and weighted by the present value of each payment."
      },
      {
        "title": "Why can the estimate miss?",
        "text": "The exact relationship between price and yield is curved. Convexity is the name for that curvature. A straight-line duration estimate becomes less accurate for a large rate move. A borrower’s right to repay early can also change the payments investors receive, making a simple fixed-payment estimate less useful."
      }
    ]
  },
  {
    "id": "purchasing-power",
    "topic": "bonds",
    "title": "What return do you really receive?",
    "conceptIds": [
      "bonds-real",
      "bonds-credit",
      "bonds-clean"
    ],
    "context": "Maya compares a government bond with a company bond offering a higher annual yield. She also wants to know what the money will buy and the actual dollar amount she must pay to complete a purchase.",
    "question": "Why is the corporate bond’s higher quoted yield insufficient to establish that it is the better investment?",
    "options": [
      "Higher yield eliminates default risk",
      "Promised payments can differ from the payments actually expected",
      "Inflation applies only to government debt"
    ],
    "correct": 1,
    "explanation": "The higher quoted annual percentage uses promised payments. Missed payments, recovery after default and difficulty selling can reduce what the investor actually earns. Inflation also affects what the money buys.",
    "calculations": [
      "real-return"
    ],
    "units": "Nominal and real returns are percentages over the same period. A credit spread is a difference in annual yields, measured in percentage points. Purchase price and accrued interest are dollars.",
    "sections": [
      {
        "title": "Money gained and goods bought are different",
        "text": "Nominal return measures the change in your money before adjusting for inflation. Inflation means prices of goods and services rise. Real return measures the change in what your money can buy. A positive dollar gain can still leave you able to buy less if prices rose faster."
      },
      {
        "title": "A higher promised yield can carry a bigger chance of loss",
        "text": "A company may promise a higher annual percentage because repayment is less certain. The extra yield above comparable safer debt is called a credit spread. It can also reflect how hard the bond is to sell. The promised percentage is calculated as if payments arrive. Expected return also considers missed payments and what may be recovered after default."
      },
      {
        "title": "Check the dollars needed to buy",
        "text": "A clean price is a bond quotation that leaves out interest accumulated since the last coupon date. The buyer usually pays the clean price plus that accrued interest. The combined amount is called the dirty price. Compare investments using the amount actually paid and the payment dates."
      }
    ]
  },
  {
    "id": "sharing",
    "topic": "purpose",
    "title": "Who bears which risk?",
    "conceptIds": [
      "purpose-claims",
      "purpose-sharing",
      "purpose-innovation"
    ],
    "context": "Cedar Workshop wants new equipment. Its founder cannot comfortably bear every possible business loss alone. Investors, lenders and an insurer can each take on a different part of the uncertainty.",
    "question": "The founder buys insurance and gives up some expected income. Can this improve the founder’s welfare?",
    "options": [
      "Yes, reducing a painful risk can be worth the premium",
      "No, only the highest average dollar payoff matters",
      "Yes, because insurance eliminates all risk from society"
    ],
    "correct": 0,
    "explanation": "Paying an insurance premium can make a damaging loss manageable. The person can prefer that protection even with a lower average dollar income. The insurer takes the defined risk; the underlying damage is not erased.",
    "calculations": [],
    "units": "Funding, insurance premiums and payments are dollar amounts. Risk describes uncertain outcomes, not a payment or a percentage by itself.",
    "sections": [
      {
        "title": "Follow who gets paid",
        "text": "Selling equity gives investors a share of the business’s ownership. Borrowing creates a debt: a promise to repay under agreed terms. Insurance pays for specified losses, such as a covered fire. Each arrangement changes who receives money in different future situations. A payment that depends on an event is called a contingent claim."
      },
      {
        "title": "Why pay someone to take a risk?",
        "text": "The founder might prefer a steadier financial position even if insurance reduces average income by its cost. A premium is the price paid for insurance. Being risk-averse means caring about damaging losses as well as average gains. The protection can make it possible to run a useful business without putting the founder’s whole livelihood at stake."
      },
      {
        "title": "The risk goes somewhere",
        "text": "An insurer can combine many customers’ risks. Losses may become more predictable when customers do not all suffer together. That process is risk pooling. It does not undo a fire or erase society’s loss. A financial innovation is useful when its protection or funding benefits justify its costs and the new weaknesses it may introduce."
      }
    ]
  },
  {
    "id": "incentives",
    "topic": "purpose",
    "title": "Hidden information and incentives",
    "conceptIds": [
      "purpose-adverse",
      "purpose-moral",
      "purpose-agency"
    ],
    "context": "An insurer decides which workshops to cover. A workshop manager chooses how carefully to maintain fire alarms. A fund manager separately decides how to invest money belonging to clients.",
    "question": "An insured workshop stops maintaining fire alarms because it expects the insurer to pay. Which mechanism is at work?",
    "options": [
      "Adverse selection alone",
      "Moral hazard after obtaining protection",
      "A market-wide change in beta"
    ],
    "correct": 1,
    "explanation": "The owner’s behavior changed after receiving coverage. That is moral hazard. Adverse selection instead concerns hidden information that affects who joins the agreement in the first place.",
    "calculations": [],
    "units": "These are differences in information and incentives. They are not numerical investment-return measures.",
    "sections": [
      {
        "title": "Before the agreement: who knows the risk?",
        "text": "A workshop owner may know more about dangerous equipment than the insurer. Owners expecting a claim may be especially eager to buy insurance. Adverse selection is the name for this problem: the people joining a contract may be riskier than the provider expects."
      },
      {
        "title": "After the agreement: what behavior changes?",
        "text": "Once insured, an owner may pay less attention to fire prevention because someone else will pay part of the loss. That change in incentives is moral hazard. It need not involve deliberate dishonesty. A deductible, the part of a loss the customer pays, can help keep prevention worthwhile."
      },
      {
        "title": "When someone acts for someone else",
        "text": "The investor owns the savings, but a manager makes the decisions. This is a principal–agent relationship: the principal delegates work to the agent. If the manager is rewarded for short-term results while clients bear later losses, their interests can differ. Pay arrangements and monitoring can reduce that conflict without removing it completely."
      }
    ]
  },
  {
    "id": "responsibility",
    "topic": "purpose",
    "title": "Ownership and wider consequences",
    "conceptIds": [
      "purpose-liability",
      "purpose-externality"
    ],
    "context": "Maya buys ordinary shares in Cedar Workshop. Elsewhere, a lender protects itself by selling investments that many other institutions also own.",
    "question": "Can a lender act rationally for itself while making the financial system less stable?",
    "options": [
      "No, rational choices always benefit everyone",
      "Yes, its asset sales can impose losses on other holders",
      "Only if every shareholder has unlimited liability"
    ],
    "correct": 1,
    "explanation": "A hurried sale can lower prices for other investors holding the same assets. The seller does not bear all of that wider damage, so a sensible action for one firm can worsen conditions for others.",
    "calculations": [],
    "units": "An investment, a debt and a sale price are dollar amounts. Limited liability describes responsibility for losses; it does not promise an investment return.",
    "sections": [
      {
        "title": "How much can a shareholder lose?",
        "text": "Limited liability usually means Maya can lose the money invested in her shares without having to use unrelated personal assets to pay the company’s debts. The shares can still become worthless. Personal guarantees and legal exceptions are separate matters."
      },
      {
        "title": "One firm’s protection can affect others",
        "text": "A lender may need cash and sell assets quickly. Selling pressure can lower the market price of those assets. Other institutions holding the same assets may then face losses or demands for more collateral, meaning additional assets pledged to support borrowing."
      },
      {
        "title": "Name the wider effect",
        "text": "An externality is an effect on other people that is not fully included in the decision-maker’s own costs. The lender may make a sensible choice for itself while making everyone’s funding problem worse. This is one reason finance needs attention to the system as well as individual contracts."
      }
    ]
  },
  {
    "id": "uncertainty",
    "topic": "risk",
    "title": "Average return is only part of the story",
    "conceptIds": [
      "risk-expected",
      "risk-variance",
      "risk-utility"
    ],
    "context": "Maya compares investments that can gain or lose money over the next year. She needs to protect money used for essential expenses as well as consider what she might earn.",
    "question": "Why might Maya reject an investment with a positive average expected gain?",
    "options": [
      "Positive expected value guarantees failure",
      "Its downside can threaten obligations more than its upside helps",
      "The probability-weighted average must be wrong"
    ],
    "correct": 1,
    "explanation": "An average gain does not remove a severe possible loss. If the loss threatens essential expenses, avoiding that possibility may matter more than the chance of extra money.",
    "calculations": [
      "expected"
    ],
    "units": "Dollar gain is an amount of money. Percentage return compares gain with the initial investment. The worked example’s returns and probabilities describe one year.",
    "sections": [
      {
        "title": "An average is not a promised outcome",
        "text": "Expected return is the average percentage return across possible outcomes, weighted by how likely each outcome is. It is useful for comparing uncertain investments. It does not mean the investment will earn that percentage in the coming year. There may be a substantial chance of loss even when the average is positive."
      },
      {
        "title": "How far apart are the outcomes?",
        "text": "Two investments can have the same average return but very different possible losses. Volatility describes how much returns tend to vary around their average. It is measured in return units for a stated period. Variance is the related calculation before taking a square root, so its units are squared return units."
      },
      {
        "title": "Why might the safer choice be worth it?",
        "text": "Losing money needed for rent can hurt much more than an equal gain would help. Utility is economists’ word for how valuable an outcome is to a person. Diminishing marginal utility means another dollar often matters less when you already have plenty. This explains why the highest average payoff need not be the best choice for Maya."
      }
    ]
  },
  {
    "id": "diversification",
    "topic": "risk",
    "title": "How holdings move together",
    "conceptIds": [
      "risk-correlation",
      "risk-systematic",
      "risk-frontier"
    ],
    "context": "Maya splits her savings among several businesses. Some do well in circumstances that hurt others. Several of her holdings, however, all depend on the same technology industry.",
    "question": "Maya adds more technology firms to an already technology-heavy portfolio. What can remain?",
    "options": [
      "Common sector and recession exposure",
      "A guarantee of independent returns",
      "No possible loss once she has enough names"
    ],
    "correct": 0,
    "explanation": "More company names can reduce dependence on one business while leaving most money exposed to the same industry. A shared shock can still hurt many holdings together.",
    "calculations": [
      "portfolio"
    ],
    "units": "A portfolio weight is a percentage of invested money. Correlation is a unitless number from −1 to +1. The worked example uses annual return volatility, stated as a percentage.",
    "sections": [
      {
        "title": "Watch the investments together",
        "text": "Diversification means spreading exposure to reduce dependence on a particular outcome. A portfolio is the collection of investments held together. Its risk depends on the money assigned to each holding and how their returns move together. Correlation measures that joint movement; it does not measure how much either investment earns."
      },
      {
        "title": "More names can still share one problem",
        "text": "A factory accident may mainly hurt one business. That is company-specific risk. A recession can hurt many businesses at once. That is shared or systematic risk. Owning more technology companies can reduce dependence on a single company while leaving a large bet on the industry."
      },
      {
        "title": "What does “efficient” mean here?",
        "text": "The efficient frontier describes portfolios offering the best modeled tradeoffs between expected return and volatility. Both are estimates for a stated period. The frontier changes when estimates or investment restrictions change. It is a useful comparison, rather than a guarantee about which portfolio will perform best."
      }
    ]
  },
  {
    "id": "market-risk",
    "topic": "risk",
    "title": "Pricing exposure to the market",
    "conceptIds": [
      "risk-beta",
      "risk-capm",
      "risk-cml"
    ],
    "context": "Maya compares a share that tends to move strongly with the broad stock market and another share whose problems mostly come from its own business.",
    "question": "Does a low-beta asset necessarily have low total risk?",
    "options": [
      "Yes, beta measures every possible risk",
      "No; company-specific failures and unusual large losses can remain",
      "Yes, as long as it pays dividends"
    ],
    "correct": 1,
    "explanation": "Beta measures a particular relationship with market returns. Company failure and unusual large losses can remain even when estimated beta is low.",
    "calculations": [
      "capm"
    ],
    "units": "Beta is a unitless sensitivity measure. The risk-free rate, market risk premium and CAPM result in the example are percentages per year.",
    "sections": [
      {
        "title": "What does beta tell you?",
        "text": "Beta summarizes how an investment’s returns tend to move with a chosen market benchmark. A larger beta means stronger measured exposure to that benchmark. It does not count every possible risk. A company can have a low beta and still lose money because its product fails."
      },
      {
        "title": "Turn that exposure into a model of required return",
        "text": "The Capital Asset Pricing Model, or CAPM, begins with a safer benchmark rate. It then adds compensation for market exposure. The market risk premium is the expected annual market return minus the risk-free annual rate. CAPM multiplies that premium by beta and adds the risk-free rate. The result is an annual percentage required by the model."
      },
      {
        "title": "Two lines answer different questions",
        "text": "The security market line compares model expected returns with beta. The capital market line compares return with total volatility for portfolios built by mixing a risk-free asset and an efficient risky portfolio. These are theoretical comparisons. Actual returns can depend on risks and patterns that the basic model leaves out."
      }
    ]
  },
  {
    "id": "tails",
    "topic": "risk",
    "title": "Pooling and extreme losses",
    "conceptIds": [
      "risk-lln",
      "risk-var",
      "risk-tails"
    ],
    "context": "An insurer covers workshops in many places. It can plan for ordinary claims, but a flood could damage many workshops together. Maya’s investment manager also uses a model to describe unusually large losses.",
    "question": "A risk model gives a loss threshold at a chosen confidence level. What remains unknown from that threshold alone?",
    "options": [
      "The severity of losses beyond it",
      "Whether the portfolio has a price",
      "Every historical return"
    ],
    "correct": 0,
    "explanation": "A loss threshold says how often losses cross a line in the model. It does not state how much money can be lost after crossing it. That severity requires further information.",
    "calculations": [],
    "units": "A loss is a dollar amount or a percentage of portfolio value. A risk estimate must state its time horizon and probability. Correlation describes joint movement without dollar units.",
    "sections": [
      {
        "title": "Why pooling helps, and where it stops helping",
        "text": "The law of large numbers explains why averages can become more predictable as sufficiently independent risks are combined. Independent here means knowing that one loss occurred does not change the probability of another loss. A common flood can defeat that benefit because many customers need payment at once."
      },
      {
        "title": "A threshold does not cap the loss",
        "text": "Value at Risk, often shortened to VaR, is a modeled loss threshold for a chosen time period and probability. It describes how often losses are expected to cross a line. It does not tell you the largest possible loss. Expected shortfall asks a further question: how large are losses on average in the worst part of the modeled outcomes?"
      },
      {
        "title": "Allow for events the model has rarely seen",
        "text": "A distribution is a description of possible outcomes and their probabilities. Fat tails means its extreme outcomes are more common than a familiar thin-tailed model would suggest. A stress test asks what would happen in a chosen severe situation. Neither a short historical sample nor one stress scenario can cover every future problem."
      }
    ]
  },
  {
    "id": "expectations",
    "topic": "behavior",
    "title": "News relative to expectations",
    "conceptIds": [
      "behavior-news",
      "behavior-emh",
      "behavior-walk",
      "behavior-joint"
    ],
    "context": "Cedar Workshop announces that its earnings grew. Its share price falls anyway. Maya wonders why seemingly good news did not make investors pay more.",
    "question": "What could explain a price decline after a strong earnings announcement?",
    "options": [
      "Investors had expected an even stronger result or outlook",
      "Strong results always force prices upward",
      "The stock has become a bond"
    ],
    "correct": 0,
    "explanation": "The result can be good in isolation and still below what investors expected. The market also reacts to new information about future business results.",
    "calculations": [],
    "units": "Earnings are dollars earned over a stated reporting period. A share price is dollars per share. A share’s percentage return compares its gain or loss with its earlier price.",
    "sections": [
      {
        "title": "Compare the result with what was already expected",
        "text": "A share’s price reflects beliefs about future business results. If investors expected more growth than the company delivered, an increase can still disappoint. New information about future plans also matters. The surprise is the difference from expectations, not whether the headline sounds positive."
      },
      {
        "title": "What does an efficient market claim?",
        "text": "Market efficiency concerns how much available information is already reflected in prices. Weak-form efficiency concerns past prices and trading data. Semi-strong efficiency also concerns publicly available company and economic information. It can be difficult to beat the market using information many others already have. This does not require every price to be perfectly correct."
      },
      {
        "title": "A test needs a comparison",
        "text": "News may be hard to predict even when the return investors require changes over time. To decide whether a strategy earned unusually high returns, researchers need a model of the return that would normally compensate for its risk. A poor comparison model can make ordinary risk-taking look like exceptional performance. That difficulty is called the joint-hypothesis problem."
      }
    ]
  },
  {
    "id": "feedback",
    "topic": "behavior",
    "title": "Stories, valuation and feedback",
    "conceptIds": [
      "behavior-excess",
      "behavior-bubbles",
      "behavior-arbitrage",
      "behavior-narratives"
    ],
    "context": "A new technology attracts investors. Its rising share prices bring more attention, and stories about future success spread. Maya thinks some prices have become too high.",
    "question": "Maya thinks an asset is overpriced. What does that establish about a short position?",
    "options": [
      "It is guaranteed to profit immediately",
      "Timing, financing and further price rises can still make the trade fail",
      "Its borrowing costs are zero"
    ],
    "correct": 1,
    "explanation": "The asset can rise further before it falls. Borrowing costs, losses and collateral demands can force the trader to close the position before a later correction.",
    "calculations": [],
    "units": "Price is dollars per share. A percentage price rise measures a change from the starting price over a stated interval. A valuation is an estimate in dollars, not a prediction of a sale date.",
    "sections": [
      {
        "title": "A rising price can become part of the reason people buy",
        "text": "A narrative is a story people share about why something matters. A persuasive story can attract buyers. Rising prices can then seem to confirm the story and attract still more buyers. Borrowing can amplify the process by letting people purchase more than they could with their own money."
      },
      {
        "title": "What Shiller questioned",
        "text": "A common valuation approach connects share prices to future dividends, the cash paid to shareholders. Shiller showed that prices moved more than simple constant-discount-rate versions of that approach could readily explain. Changing required returns can explain some movements too. The finding challenges a simple model; it does not label every price swing irrational."
      },
      {
        "title": "A valuation opinion is not a safe trading plan",
        "text": "Trading against an apparently excessive price can be costly. A short seller borrows a share to sell it and hopes to buy it back more cheaply. If the price rises first, the seller may face losses or demands for more collateral. Being right eventually does not ensure being able to keep the trade open until then."
      }
    ]
  },
  {
    "id": "judgment",
    "topic": "behavior",
    "title": "Reference points and judgment",
    "conceptIds": [
      "behavior-prospect",
      "behavior-anchoring",
      "behavior-disposition",
      "behavior-confidence"
    ],
    "context": "Maya keeps a losing investment mainly because she wants to get back to her purchase price. She sells profitable investments quickly and feels confident about frequent trading tips.",
    "question": "What is a useful question when Maya is keeping a loser mainly to “get back to even”?",
    "options": [
      "Would she choose this investment today given its future prospects?",
      "Can the past purchase price force a recovery?",
      "Does avoiding a sale eliminate the economic loss?"
    ],
    "correct": 0,
    "explanation": "The decision concerns the investment’s prospects and alternatives from today onward. The old purchase price can matter for taxes, but it cannot force the market to return there.",
    "calculations": [],
    "units": "A dollar loss and a percentage loss are different descriptions of the same investment change. A reference price is dollars per share, not a guarantee of future value.",
    "sections": [
      {
        "title": "The purchase price can become a mental target",
        "text": "Anchoring means giving too much weight to an initial reference, such as the price paid. That number can matter for taxes, but it does not make recovery more likely. A useful question is whether Maya would choose to buy the investment today, given what she now knows."
      },
      {
        "title": "Why gains and losses can feel different",
        "text": "Prospect theory describes choices made relative to a reference point. Losing from that reference may feel worse than an equal gain feels good. People may also react unevenly to small chances of big outcomes. These patterns help explain why a dollar calculation alone may not predict a choice."
      },
      {
        "title": "Recognize habits without assuming they explain every trade",
        "text": "The disposition effect is the tendency to sell winners while keeping losers too long. Overconfidence means believing your forecasts are more reliable than the evidence supports. It can lead to frequent trading and concentrated holdings. Trading costs and relevant taxes reduce what remains for the investor."
      }
    ]
  },
  {
    "id": "ownership",
    "topic": "equity",
    "title": "Residual ownership and financing",
    "conceptIds": [
      "equity-residual",
      "equity-preferred",
      "equity-capitalstructure"
    ],
    "context": "Cedar Workshop obtains money from lenders and different kinds of shareholders. Maya wants to understand what she would own and who would be paid before her if the business closed.",
    "question": "Why can the business retain some asset value while common shareholders receive nothing in liquidation?",
    "options": [
      "Senior claims may absorb all available value first",
      "Common shares guarantee repayment at face value",
      "All claimants must receive identical amounts"
    ],
    "correct": 0,
    "explanation": "Claims with higher priority may use all the available asset value. Ordinary owners receive only the remainder, which can be zero even if the business still has some assets.",
    "calculations": [],
    "units": "Assets, debt and equity value are dollar amounts. An ownership percentage is a share of the business, not a promised annual return.",
    "sections": [
      {
        "title": "Follow the repayment order",
        "text": "A creditor is someone the company owes money to. Common shareholders are ordinary owners. When a company is closed and its assets sold, obligations with higher priority must be dealt with before common owners receive the remainder. Residual ownership means owning that remainder. There may be nothing left."
      },
      {
        "title": "Different shares can carry different rights",
        "text": "Preferred shares usually have specified priority over common shares for dividends or liquidation payments. Their voting rights and payment conditions can differ. Preferred dividends are not automatically as certain as a bond interest payment. The contract matters."
      },
      {
        "title": "The funding mix changes who takes the risk",
        "text": "Capital structure is the mix of borrowing, ordinary shares and other funding used by a business. Borrowing creates obligations that remain even after a disappointing business year. Taxes, financial distress and managers’ incentives can therefore make the choice of funding important."
      }
    ]
  },
  {
    "id": "valuation",
    "topic": "equity",
    "title": "Valuing future cash flows",
    "conceptIds": [
      "equity-gordon",
      "equity-wacc",
      "equity-terminal"
    ],
    "context": "Maya wants to estimate what a business is worth today. She begins with the cash it might pay its owners in future years, then considers a valuation of the whole business.",
    "question": "Why can’t Maya use the simple Gordon model with perpetual annual growth at or above the required annual return?",
    "options": [
      "Its endless-growth assumptions no longer give the intended finite value",
      "It guarantees a very cheap share",
      "It removes the need to estimate dividends"
    ],
    "correct": 0,
    "explanation": "The simple Gordon formula needs annual growth below the required annual return. Otherwise its assumed infinite stream does not produce the intended finite dollar value. Different growth assumptions require a different valuation.",
    "calculations": [
      "gordon"
    ],
    "units": "Share value is dollars per share. Dividends are dollars per share per year in the example. Required return and dividend growth are annual percentages.",
    "sections": [
      {
        "title": "Begin with future money, not just a price label",
        "text": "A dividend is cash a company pays to shareholders. A valuation estimates what those future payments are worth today. Because later money is less useful than money available now, and payment may be uncertain, the calculation uses a required return to translate future payments into today’s dollar value."
      },
      {
        "title": "The Gordon model makes a strong simplifying assumption",
        "text": "The Gordon growth model assumes dividends grow at the same percentage every year forever. Its required annual return must exceed that annual growth percentage. The difference between those rates appears in the denominator. If it is very small, a small change in either assumption can produce a large change in the estimated price."
      },
      {
        "title": "Distinguish the business from the owners’ remainder",
        "text": "Free cash flow to the firm means cash available to the business’s lenders and shareholders after operating needs and investment. Valuing that cash uses a combined financing rate called the weighted average cost of capital, or WACC. The resulting business value must be adjusted for debt, cash and other claims to estimate the shareholders’ value. Terminal value is the estimate for cash flows beyond the years forecast individually."
      }
    ]
  },
  {
    "id": "ratios",
    "topic": "equity",
    "title": "Ratios and market value",
    "conceptIds": [
      "equity-pe",
      "equity-cape",
      "equity-marketcap"
    ],
    "context": "Maya compares a company’s share price with its earnings and checks the value of all its shares together. She also looks at an earnings measure smoothed across business cycles.",
    "question": "Does a low P/E ratio alone establish that a share is undervalued?",
    "options": [
      "Yes, the ratio guarantees excess return",
      "No, low growth, risk or unusual earnings can explain it",
      "Yes, it is the same as a contractual payout"
    ],
    "correct": 1,
    "explanation": "A low price relative to earnings can reflect weak future prospects, substantial risk or a temporarily large profit. The ratio needs an explanation before it supports a valuation judgment.",
    "calculations": [
      "marketcap"
    ],
    "units": "Share price and earnings per share are dollars per share. Market capitalization is dollars. P/E and CAPE are ratios, often described as “times earnings”; they are not annual return percentages.",
    "sections": [
      {
        "title": "Price for one share, value of all shares",
        "text": "Market capitalization means the market value of the company’s ordinary equity. Multiply dollars per share by the number of shares outstanding. The result is dollars for all those shares together. It is different from yearly sales, yearly profit, or the money the company originally raised."
      },
      {
        "title": "Compare price with earnings carefully",
        "text": "Earnings per share is the company’s earnings allocated across its shares for a stated period. The price-to-earnings ratio, or P/E, divides share price by earnings per share. A low ratio may reflect a low price, but it can also reflect weak growth prospects, risk, or unusually high temporary earnings. Negative earnings can make the ratio unhelpful."
      },
      {
        "title": "Why smooth earnings?",
        "text": "CAPE means cyclically adjusted price-to-earnings ratio. It compares a market price index with an average of ten years of earnings adjusted for inflation. That ten-year window is part of the definition. It reduces reliance on one unusually good or bad year. CAPE can inform long-term valuation comparisons, but cannot reliably tell you when a price will fall."
      }
    ]
  },
  {
    "id": "capital-decisions",
    "topic": "equity",
    "title": "Issuance, payouts and projects",
    "conceptIds": [
      "equity-dilution",
      "equity-buyback",
      "equity-npv"
    ],
    "context": "Cedar Workshop can issue new shares to finance equipment, invest in a project, or return spare cash to shareholders. Maya wants to distinguish changes in share counts from changes in business value.",
    "question": "A repurchase mechanically increases earnings per share. What should Maya check before calling it value creation?",
    "options": [
      "The cash spent, price paid and financing consequences",
      "Only the change in the denominator",
      "Whether the shares have a colorful ticker"
    ],
    "correct": 0,
    "explanation": "The company has spent cash and reduced its share count. Earnings per share can increase without a rise in total business earnings. Purchase price, financing and alternative uses of the cash still matter.",
    "calculations": [
      "npv"
    ],
    "units": "Cash flows and project value are dollars. Earnings per share are dollars per share over a reporting period. An ownership percentage is not an investment-return percentage.",
    "sections": [
      {
        "title": "More shares can mean a smaller fraction of a larger business",
        "text": "Issuing new shares reduces an existing owner’s percentage if that owner does not buy more. This is percentage dilution. But the company receives new money, which may pay for something valuable. Whether old owners lose economic value depends on the price of the new shares and what the business does with the money."
      },
      {
        "title": "A payout does not create money from nowhere",
        "text": "A dividend pays cash to owners. A buyback uses company cash to repurchase shares. Fewer remaining shares can increase earnings per share even if total business earnings have not improved. To judge a buyback, consider the cash spent, the purchase price and any borrowing used to finance it."
      },
      {
        "title": "Compare a project’s future benefits with its cost",
        "text": "Net present value, or NPV, means the present dollar value of future cash added by a project, minus the investment needed now. A positive result supports the project under those assumptions. A sunk cost has already been incurred and cannot be recovered by today’s choice. It should not be counted as a new cost of deciding to continue."
      }
    ]
  },
  {
    "id": "property",
    "topic": "housing",
    "title": "Housing services and investment",
    "conceptIds": [
      "housing-caprate",
      "housing-rentbuy",
      "housing-reits"
    ],
    "context": "Maya compares renting a home, buying one, and buying shares in a property business. She also examines a rental building that earns money after its ordinary operating expenses.",
    "question": "Why is a property’s cap rate different from Maya’s complete investment return?",
    "options": [
      "It excludes financing and price changes",
      "It already guarantees all future appreciation",
      "It is the mortgage interest rate"
    ],
    "correct": 0,
    "explanation": "Cap rate compares one year’s operating income with property value. It leaves out borrowing costs, later property-price changes and some other cash needs. Those still affect the owner’s result.",
    "calculations": [
      "caprate"
    ],
    "units": "Property value is dollars. Net operating income is dollars per year. Cap rate is annual operating income as a percentage of property value, before borrowing costs.",
    "sections": [
      {
        "title": "A home supplies somewhere to live",
        "text": "An owner-occupied home gives housing services as well as an exposure to future property prices. Comparing ownership with rent means considering maintenance, insurance, taxes and transaction costs. The down payment also ties up money that could have been used elsewhere. That forgone use is called an opportunity cost."
      },
      {
        "title": "Read the income measure before the percentage",
        "text": "Net operating income, or NOI, is rental income after operating expenses, before debt payments. The capitalization rate, or cap rate, divides annual NOI by property value. It describes current operating income relative to the price. It leaves out how the buyer borrows and how the property’s future sale price changes."
      },
      {
        "title": "Property shares are another kind of ownership",
        "text": "A real estate investment trust, or REIT, is a structure that holds real-estate-related assets. Buying its shares gives exposure to a property business. Its debts, management costs and share-market price still matter. It is a different experience from owning a specific home directly."
      }
    ]
  },
  {
    "id": "mortgage",
    "topic": "housing",
    "title": "Payments, equity and refinancing",
    "conceptIds": [
      "housing-amortization",
      "housing-ltv",
      "housing-refinance",
      "housing-arm"
    ],
    "context": "Maya considers a home loan with equal monthly payments. She wants to know how much of each payment is interest, how much repays the debt, and what changes when market rates move.",
    "question": "Why does the principal portion of a level mortgage payment generally increase over time?",
    "options": [
      "The same payment owes less interest as the balance shrinks",
      "The contracted rate must decline every month",
      "No principal is repaid until the final date"
    ],
    "correct": 0,
    "explanation": "Interest is charged on the remaining debt. As that balance falls, less interest is due, leaving more of the unchanged payment to repay principal.",
    "calculations": [
      "mortgage",
      "ltv"
    ],
    "units": "Loan balance and monthly payment are dollars. The quoted annual interest rate is a percentage per year. The formula converts it to a monthly rate and counts monthly payments.",
    "sections": [
      {
        "title": "Separate the fee for borrowing from repayment",
        "text": "Principal is the amount still owed on the loan. Each month, interest is charged on that outstanding balance. Part of the payment covers this interest; the rest reduces principal. Paying principal down over time is called amortization. As the balance shrinks, the interest part usually shrinks, leaving more of the same payment to repay principal."
      },
      {
        "title": "Compare the loan with the home’s value",
        "text": "Loan-to-value, or LTV, is the outstanding loan divided by the property’s value. Multiplying by 100 expresses it as a percentage. The owner’s equity is the property value minus the loan balance, before selling costs. A price decline can sharply reduce this cushion even if the debt has barely changed."
      },
      {
        "title": "Who is exposed to changing rates?",
        "text": "An adjustable-rate mortgage can change its interest rate at contractually specified reset dates, changing future payments. A fixed-rate mortgage keeps its contractual rate. If refinancing is permitted and worthwhile, the borrower can replace that loan after rates fall. Early repayment can leave the lender needing to reinvest the returned money at a lower rate."
      }
    ]
  },
  {
    "id": "pooling",
    "topic": "housing",
    "title": "Pools, tranches and credit protection",
    "conceptIds": [
      "housing-mbs",
      "housing-tranches",
      "housing-cds"
    ],
    "context": "A lender gathers payments from many home loans and sells claims on the combined payments. Some investors are paid before others. Maya asks what happens if many homeowners miss payments together.",
    "question": "What does senior payment priority do when the pool suffers extremely large correlated losses?",
    "options": [
      "It provides a cushion that can still be exhausted",
      "It eliminates the underlying defaults",
      "It guarantees a constant market price"
    ],
    "correct": 0,
    "explanation": "Many defaults together can create a loss larger than the junior layers can absorb. Payment priority reallocates losses; it does not make the combined losses disappear.",
    "calculations": [],
    "units": "Loan payments and investor losses are dollar amounts over payment dates. A tranche describes payment priority, not a guaranteed percentage return.",
    "sections": [
      {
        "title": "Turn a group of loans into an investment",
        "text": "A mortgage-backed security, or MBS, is a claim supported by payments from a pool of mortgages. Investors depend on borrowers paying, and on the rules for passing those payments through. Homeowners may also repay early, changing when investors receive their money."
      },
      {
        "title": "Decide who takes the first loss",
        "text": "A tranche is a layer of the investment with a particular payment and loss priority. Junior layers absorb losses before senior layers. This can protect senior investors against limited losses. It cannot make a very large combined loss disappear. If many borrowers fail together, losses may exhaust the protection."
      },
      {
        "title": "Credit protection is another contract to inspect",
        "text": "A credit default swap, or CDS, exchanges premium payments for protection when a specified credit event occurs. The event and payout are defined by the agreement. Protection also depends on the other party being able to meet its obligation. Buying the protection is not the same as eliminating every risk."
      }
    ]
  },
  {
    "id": "forwards",
    "topic": "derivatives",
    "title": "Locking a future price",
    "conceptIds": [
      "derivatives-forward",
      "derivatives-futures",
      "derivatives-carry",
      "derivatives-basis"
    ],
    "context": "Cedar Workshop needs to buy an input later. It wants to agree on a price now. Maya compares a private forward agreement with an exchange-traded futures contract.",
    "question": "The hedge is economically useful, but its price moves against the workshop before delivery. What can it still require?",
    "options": [
      "Immediate margin cash even if the eventual business exposure offsets the move",
      "No funding until the business earns its revenue",
      "A guarantee that the input price never changes"
    ],
    "correct": 0,
    "explanation": "The hedge’s daily cash demands can arrive before the workshop receives its offsetting business benefit. Reducing eventual price uncertainty does not remove the need for funding along the way.",
    "calculations": [
      "carry"
    ],
    "units": "Spot and forward prices are dollars per unit of the asset. Delivery time is measured in years in the example. The financing rate is an annual percentage under the stated compounding convention.",
    "sections": [
      {
        "title": "Agree today on a later exchange",
        "text": "A forward obligates the parties to exchange an asset later at a delivery price agreed today. Spot price means the price for buying now. A fair new forward often requires no initial payment, but the agreed delivery price is not zero. The contract can gain or lose value after it is agreed."
      },
      {
        "title": "Why the agreed price relates to today’s price",
        "text": "An alternative is to borrow money, buy the asset now and hold it until delivery. Cost-of-carry pricing compares those alternatives. Carry includes financing and, where relevant, storage costs and income received while holding the asset. The simple worked example assumes no income or storage costs."
      },
      {
        "title": "A hedge can help and still need cash",
        "text": "Futures are standardized contracts, usually settled for daily gains and losses through a clearing system. Margin is cash or collateral required to support the position. A losing daily adjustment can demand cash before the business receives its offsetting benefit. Basis risk is a mismatch between the hedge and the exact input, location or date the business actually needs."
      }
    ]
  },
  {
    "id": "options",
    "topic": "derivatives",
    "title": "Rights, payoffs and profit",
    "conceptIds": [
      "derivatives-call",
      "derivatives-put",
      "derivatives-exercise",
      "derivatives-short",
      "derivatives-embedded"
    ],
    "context": "Maya wants protection if a share price falls. She compares buying a put option with short selling the share. Both can benefit from a price decline, but their obligations and possible losses differ.",
    "question": "An option expires with a positive payoff smaller than its premium. What is the buyer’s simple net result?",
    "options": [
      "A loss after subtracting the premium",
      "A guaranteed profit because it is in the money",
      "A free ownership share"
    ],
    "correct": 0,
    "explanation": "Payoff is the amount delivered by the option. Profit also subtracts the premium paid to buy it. If the premium is larger than the positive payoff, the buyer still has a dollar loss.",
    "calculations": [
      "call",
      "put"
    ],
    "units": "Option prices, strike prices and expiration payoffs are dollars per share in these examples. A contract’s share count determines the whole-contract dollar amount. These are not annual return percentages.",
    "sections": [
      {
        "title": "A right is different from an obligation",
        "text": "A call option gives its holder the right to buy at the strike price. A put gives the right to sell at that price. The strike is the contract’s exercise price. The premium is the dollar price paid to obtain the option. The holder can choose not to use an option that offers no benefit."
      },
      {
        "title": "A positive payoff can still mean losing money",
        "text": "Payoff describes what the option delivers before subtracting its purchase cost. Net profit subtracts the premium too. The worked example shows both amounts in dollars per share. European-style options can be exercised at expiration; American-style options permit earlier exercise under their terms."
      },
      {
        "title": "Compare the shape of the risk",
        "text": "A short seller borrows shares and sells them, hoping to repurchase them more cheaply. Rising prices can produce very large losses. A long option ordinarily limits loss to its premium, but it expires: a later price decline may come too late. Similar rights can appear inside other contracts, such as a borrower’s right to refinance, or a business’s ability to abandon a project."
      }
    ]
  },
  {
    "id": "replication",
    "topic": "derivatives",
    "title": "Matching payoffs",
    "conceptIds": [
      "derivatives-parity",
      "derivatives-binomial",
      "derivatives-riskneutral"
    ],
    "context": "Maya compares financial arrangements that pay the same money in the same modeled future situations. She asks whether their prices today can differ without creating a trading opportunity.",
    "question": "Why can a replicable option be priced without estimating the real-world probability of an up move?",
    "options": [
      "A portfolio of traded shares and borrowing or lending matches the modeled payments",
      "Every up move has the same actual probability",
      "The option seller chooses the future stock price"
    ],
    "correct": 0,
    "explanation": "Matching modeled payments links the option’s price to the prices of the stock and cash used to build it. The real probability of an up move is not needed for that matching calculation.",
    "calculations": [
      "binomial",
      "parity"
    ],
    "units": "Option and stock prices are dollars per share. The hedge ratio is shares held per option on one share. A pricing probability is a unitless weight between 0 and 1.",
    "sections": [
      {
        "title": "Start with matching payments",
        "text": "Replication means building an arrangement whose payments match another investment’s payments. If both can be traded and financed on the assumed terms, equal future payments should have equal present values. Otherwise traders could buy the cheaper arrangement and sell the dearer one. This is the no-arbitrage idea."
      },
      {
        "title": "Match the option’s up and down outcomes",
        "text": "A binomial model allows the stock to move to an up price or a down price next period. Calculate the call’s payoff at each price. The hedge ratio compares the difference in option payoffs with the difference in stock prices. It tells you how many shares reproduce the option’s change across those states; borrowing or lending supplies the remaining cash part."
      },
      {
        "title": "Where the probabilities fit",
        "text": "Real-world probabilities describe what you think will happen. Risk-neutral probabilities are different: they are pricing weights constructed to fit the traded prices and risk-free financing in the model. Matching payoffs can determine an option’s price without estimating the real probability of an up move. Put–call parity is another matching-payoff relationship, for calls and puts with compatible terms."
      }
    ]
  },
  {
    "id": "model-risk",
    "topic": "derivatives",
    "title": "Models and hedge limits",
    "conceptIds": [
      "derivatives-bs",
      "derivatives-vol",
      "derivatives-greeks",
      "derivatives-deltahedge"
    ],
    "context": "A dealer sells an option and buys shares to reduce the effect of a small share-price move. The dealer uses a pricing model but knows that actual trades happen at separate times and can cost money.",
    "question": "After setting a delta hedge, can the dealer ignore all further risk?",
    "options": [
      "Yes, the trade now guarantees profit",
      "No, delta changes and other exposures remain",
      "Yes, gamma and volatility cease to matter"
    ],
    "correct": 1,
    "explanation": "Delta describes the effect of a small underlying-price move near current conditions. Delta itself changes, and time, volatility, rates and trading costs also affect the position. The hedge therefore leaves other risks.",
    "calculations": [],
    "units": "Delta is dollars of option-price change per $1 underlying-price change, equivalently shares per option on one share. Other sensitivities must specify their time, rate or volatility unit.",
    "sections": [
      {
        "title": "A model connects assumptions to a price",
        "text": "The Black–Scholes–Merton model links a European option’s price to inputs such as the stock price, strike, time, interest rate and volatility. It assumes a particular pattern of price changes and idealized trading. A model price is only as useful as those assumptions for the problem at hand."
      },
      {
        "title": "Volatility is an input, not a promise",
        "text": "Volatility describes variability of returns over a stated period. Implied volatility is the input value that makes the model reproduce an option’s current market price. It can differ by strike and expiration. It is not a guaranteed forecast of future price variation."
      },
      {
        "title": "A hedge reduces one exposure at a time",
        "text": "Delta measures the option price’s local response to the underlying price. Gamma describes how delta changes. Theta concerns passing time; vega concerns changes in volatility; rho concerns interest rates. Those names are called Greeks. A delta hedge can offset a small price move while leaving these other effects, trading costs and sudden jumps. It must be reconsidered as conditions change."
      }
    ]
  },
  {
    "id": "balance-sheet",
    "topic": "banking",
    "title": "A bank’s loss cushion",
    "conceptIds": [
      "banking-balance",
      "banking-capital",
      "banking-liquid"
    ],
    "context": "Cedar Workshop deposits money in a bank. The bank has loans, securities and cash, owes money to depositors and other lenders, and has owners who bear losses.",
    "question": "A bank has valuable long-term loans but cannot obtain cash quickly enough for withdrawals. What problem appears first?",
    "options": [
      "A liquidity problem",
      "The automatic disappearance of its loans",
      "Proof that deposits are equity"
    ],
    "correct": 0,
    "explanation": "The immediate problem is liquidity: obtaining cash to pay withdrawals. The bank’s longer-term assets may still be valuable. Losses from forced sales can later weaken its ability to cover all obligations.",
    "calculations": [
      "bank-loss"
    ],
    "units": "Assets, liabilities, equity and losses are dollar amounts at a date. Capital is a funding and loss-absorption concept, not an annual interest rate.",
    "sections": [
      {
        "title": "Read the bank’s two sides",
        "text": "An asset is something the bank owns or a claim it expects to collect, such as a loan. A liability is money it owes. Your deposit is an asset to you, but a liability to the bank because it owes the money back. Equity is the value of assets minus liabilities: the owners’ remaining stake."
      },
      {
        "title": "Why the loss cushion matters",
        "text": "If loan or security values fall while liabilities stay unchanged, equity takes the loss. Regulatory capital consists of qualifying funding that can absorb losses under the applicable rules. Capital should not be confused with a pile of cash in a vault. The worked example follows an asset loss into the bank’s remaining equity."
      },
      {
        "title": "Enough value does not always mean enough cash now",
        "text": "Liquidity means being able to meet payments when needed. Solvency means assets are worth enough to cover obligations. A bank can own valuable long-term loans yet struggle to obtain immediate cash for withdrawals. Selling assets in a hurry can then produce losses that weaken solvency as well."
      }
    ]
  },
  {
    "id": "money-creation",
    "topic": "banking",
    "title": "Loans, deposits and policy",
    "conceptIds": [
      "banking-creation",
      "banking-reserves",
      "banking-policy"
    ],
    "context": "The bank grants Cedar Workshop a loan and credits money to its account. The workshop pays a supplier, who may use another bank. Maya asks where the new deposit came from.",
    "question": "Does creating the loan and deposit give the bank unlimited capacity to lend?",
    "options": [
      "No, balance-sheet and economic constraints remain",
      "Yes, capital and funding no longer matter",
      "Yes, all borrowers must be approved"
    ],
    "correct": 0,
    "explanation": "The loan and deposit are accounting entries, not free bank equity. The bank still needs to absorb possible losses, settle payments and obtain funding under its constraints.",
    "calculations": [],
    "units": "Loan balances, deposits and bank reserves are dollar amounts. The policy interest rate is a percentage per year. Creating a deposit is not the same as earning a profit.",
    "sections": [
      {
        "title": "The loan and the deposit appear together",
        "text": "When the bank lends, it records a loan asset: the workshop now owes it money. It also records a deposit liability: the workshop can spend or withdraw the credited balance. This is a common way bank lending creates deposits, which are part of the money used by the public."
      },
      {
        "title": "Payments still require settlement",
        "text": "If the workshop pays someone at another bank, the banks need to settle the transfer. Reserves are balances banks hold at the central bank, used for settlement and liquidity. A bank cannot meet every obligation merely by writing another loan into its own books."
      },
      {
        "title": "Why banks cannot lend without limit",
        "text": "Loans can go unpaid. Lending uses capital and requires access to funding and payment liquidity. Borrower demand, credit checks and financing costs also matter. Central-bank policy influences market interest rates and the cost of borrowing, but the effects on lending and spending vary and take time."
      }
    ]
  },
  {
    "id": "central-bank",
    "topic": "banking",
    "title": "Asset purchases and emergency funding",
    "conceptIds": [
      "banking-qe",
      "banking-qt",
      "banking-lender"
    ],
    "context": "The central bank buys bonds from financial markets, later reduces its holdings, and separately offers emergency loans to eligible banks. These operations do different jobs.",
    "question": "Why can emergency funding be insufficient to save an economically insolvent institution?",
    "options": [
      "More borrowing does not erase its asset losses",
      "Emergency lending cancels every creditor’s claim",
      "Reserves automatically become shareholders’ equity"
    ],
    "correct": 0,
    "explanation": "New borrowing gives the institution cash and a new repayment obligation. It does not cancel losses already greater than the owners’ cushion. Restoring that cushion requires separate action.",
    "calculations": [],
    "units": "Central-bank holdings, reserve balances and emergency loans are dollar amounts. Bond yields and lending rates are percentages per year under their stated conventions.",
    "sections": [
      {
        "title": "Buying assets changes balance sheets",
        "text": "Quantitative easing, or QE, means central-bank purchases of financial assets. The central bank receives securities and creates central-bank money to pay for them, increasing reserve balances. The transactions can affect bond yields and investors’ choices. They are different from a government directly giving a household money."
      },
      {
        "title": "Reducing holdings works in the other direction",
        "text": "Quantitative tightening, or QT, means reducing the central bank’s asset holdings. It can allow securities to mature without replacing them, or sell assets. Its market effects depend on the details and the surrounding demand for money and bonds."
      },
      {
        "title": "An emergency loan supplies liquidity",
        "text": "A lender of last resort provides emergency funding under rules about eligibility, collateral and pricing. This can help a bank meet urgent payments when ordinary funding fails. Borrowing more does not cancel losses that have already used up its equity. Repairing those losses requires adding capital, allocating losses, or managing the bank’s failure."
      }
    ]
  },
  {
    "id": "regulation",
    "topic": "banking",
    "title": "Capital, funding and deposit protection",
    "conceptIds": [
      "banking-rwa",
      "banking-liquidityrules",
      "banking-insurance"
    ],
    "context": "A supervisor checks whether a bank can absorb investment losses and meet withdrawals. Maya also wants to understand what protection applies to her deposit.",
    "question": "Does an illustrative regulatory capital percentage mean that the same percentage must be held as cash?",
    "options": [
      "No, capital and liquid reserves serve different functions",
      "Yes, capital is cash by definition",
      "Yes, it is the interest rate charged on loans"
    ],
    "correct": 0,
    "explanation": "Capital is qualifying funding that can absorb losses. Cash and readily saleable assets help make payments. A percentage capital requirement is different from a rule about the amount of cash held.",
    "calculations": [
      "bank-capital"
    ],
    "units": "Capital and risk-weighted assets are dollar amounts. A capital ratio is a percentage of its specified denominator. The example’s 8% requirement is an illustrative assumption, not a universal current rule.",
    "sections": [
      {
        "title": "A capital ratio compares a cushion with exposures",
        "text": "Risk-weighted assets, or RWA, combine bank exposures after applying regulatory weights. A capital ratio divides qualifying capital by those weighted assets. A separate leverage ratio compares capital with a broader exposure measure without the same risk weights. Neither ratio means the bank must hold that percentage as physical cash."
      },
      {
        "title": "Liquidity rules ask a different question",
        "text": "A bank also needs assets that can become cash and funding that is likely to remain available. The liquidity coverage ratio considers a stressed short-term payment period. The net stable funding ratio considers how the funding mix fits the assets held. These requirements complement the capital loss cushion."
      },
      {
        "title": "Deposit insurance has boundaries",
        "text": "Deposit insurance protects eligible deposits within the applicable scheme’s limits. It can reduce the incentive for covered customers to run to the bank together. Protection can also weaken the reason to monitor the bank’s risks. Supervision and capital rules help address that incentive problem. The institution, account type and jurisdiction determine the actual coverage."
      }
    ]
  },
  {
    "id": "issuance",
    "topic": "institutions",
    "title": "Getting securities to investors",
    "conceptIds": [
      "institutions-investmentbank",
      "institutions-underwriting",
      "institutions-ratings"
    ],
    "context": "Cedar Workshop wants to sell new bonds or shares to investors. It hires an investment bank to help arrange the offering. Investors also read an opinion about the company’s ability to repay.",
    "question": "Does an investment-grade rating guarantee repayment or a stable market price?",
    "options": [
      "No, it is an opinion about credit that may change",
      "Yes, the agency reimburses any loss",
      "Yes, it fixes the security at its issue price"
    ],
    "correct": 0,
    "explanation": "The rating provider gives an opinion about repayment risk. It does not reimburse investment losses or fix the security’s market price. Interest-rate and trading-liquidity risks can remain.",
    "calculations": [],
    "units": "Issue prices and amounts raised are dollars. A bond yield is an annual percentage. A credit rating is an ordered opinion category, not a return percentage or a guarantee.",
    "sections": [
      {
        "title": "What does the investment bank arrange?",
        "text": "Investment banks advise on raising capital and business transactions. In an offering, they help prepare, price and distribute securities. Bookbuilding means gathering indications of investor demand to learn what terms may attract buyers. The issuer can propose terms, but investors decide whether to participate."
      },
      {
        "title": "Who bears the risk of selling the issue?",
        "text": "Underwriting specifies the intermediary’s responsibilities. In a firm-commitment arrangement, the underwriter agrees to buy the securities and resell them under the agreement, taking specified distribution risk. Other arrangements can allocate that risk differently."
      },
      {
        "title": "What does a rating leave out?",
        "text": "A credit rating is an opinion about repayment risk. It can change and it can be wrong. It does not promise a stable market price or insure against losses. Investors still need to understand interest-rate risk, how easily the security can be sold, and the incentives of the people arranging it."
      }
    ]
  },
  {
    "id": "execution",
    "topic": "institutions",
    "title": "What happens when you trade?",
    "conceptIds": [
      "institutions-roles",
      "institutions-spread",
      "institutions-orders",
      "institutions-pfof",
      "institutions-hft"
    ],
    "context": "Maya wants to buy a share through a broker. She sees one price at which someone will buy and another at which someone will sell. She must choose what instructions to give.",
    "question": "Maya needs a maximum purchase price she will accept, even if the trade does not fill. Which order best states that constraint?",
    "options": [
      "A buy limit order",
      "A market order with an assumed guaranteed price",
      "A promise from the stock issuer"
    ],
    "correct": 0,
    "explanation": "A buy limit order states the highest dollar price per share Maya will pay. It may not fill, but it does not authorize a purchase above that limit.",
    "calculations": [],
    "units": "Bid, ask and spread are dollars per share. An order size is a number of shares. Trading speed does not state a guaranteed price or profit.",
    "sections": [
      {
        "title": "Identify the people involved",
        "text": "A broker arranges or executes a client’s trade. A dealer buys and sells for its own account. A market maker is a dealer that quotes buying and selling prices. The bid is the price offered to buy from you. The ask is the price requested to sell to you. The spread is ask minus bid."
      },
      {
        "title": "Choose which constraint matters",
        "text": "A market order prioritizes trading promptly at available prices. It does not guarantee a particular price. A buy limit order gives the highest price Maya will accept. That controls the price boundary, but the order may never fill if no seller accepts the limit."
      },
      {
        "title": "Routing and speed can change execution",
        "text": "Some brokers receive payment for sending orders to particular trading firms. That is payment for order flow and can create conflicts over the route chosen. High-frequency trading uses very fast automated strategies. It can provide quotes in ordinary markets, but quoted liquidity can disappear when conditions become stressed."
      }
    ]
  },
  {
    "id": "funds",
    "topic": "institutions",
    "title": "A fund wrapper and its holdings",
    "conceptIds": [
      "institutions-funds",
      "institutions-nav",
      "institutions-fees",
      "institutions-endowment"
    ],
    "context": "Maya compares an exchange-traded fund, a mutual fund and a university endowment. Each pools money, but the way investors trade and the assets inside can differ.",
    "question": "A fund is an ETF. What can Maya infer about its investment strategy?",
    "options": [
      "It could be active or passive; she must inspect the mandate",
      "It must hold an equally weighted broad stock index",
      "It cannot use an illiquid underlying asset"
    ],
    "correct": 0,
    "explanation": "ETF tells Maya how fund shares trade. It does not tell her whether managers follow an index or make active choices. The holdings, costs and rules need to be inspected.",
    "calculations": [],
    "units": "Fund prices and net asset value are dollars per fund share. Fees are percentages per year when quoted as annual expense ratios. Fund labels do not specify an expected annual return.",
    "sections": [
      {
        "title": "Look inside the container",
        "text": "A fund collects investors’ money into a portfolio. A mutual fund typically issues and redeems shares at a calculated value under its rules. An exchange-traded fund, or ETF, has shares that investors trade on an exchange during the day. An ETF can follow an index or use active decisions. ETF describes the trading structure, not necessarily the strategy."
      },
      {
        "title": "How is the fund’s underlying value measured?",
        "text": "Net asset value, or NAV, is assets minus liabilities; divide by the share count to obtain NAV per fund share. ETF creation and redemption let authorized participants exchange fund shares and the relevant assets or cash. That normally helps keep trading prices near NAV, but trading and funding costs can limit the process."
      },
      {
        "title": "Fit the portfolio to the person or institution",
        "text": "Annual fees reduce money available to grow in later years. A university endowment may hold investments that cannot be sold quickly because it has a long horizon and specialist staff. A household with near-term expenses may need a different mix. Copying an institution’s percentages alone does not copy its access, expertise or ability to wait."
      }
    ]
  },
  {
    "id": "leverage",
    "topic": "crises",
    "title": "Borrowing magnifies the path",
    "conceptIds": [
      "crises-leverage",
      "crises-margin",
      "crises-cycle"
    ],
    "context": "Maya buys an investment using her own money and a loan. The lender may ask for extra protection if the investment’s value falls, even if Maya expects it to recover later.",
    "question": "Why can a correct long-term valuation view fail as a leveraged trade?",
    "options": [
      "A collateral call can force an early sale",
      "Debt absorbs all losses before equity",
      "Lenders must wait indefinitely for recovery"
    ],
    "correct": 0,
    "explanation": "Maya must keep meeting the lender’s terms during the whole trade. A collateral demand can force an early sale even if her prediction of a later recovery is eventually correct.",
    "calculations": [
      "leverage"
    ],
    "units": "Assets, borrowing and equity are dollar amounts. Assets divided by equity is leverage, stated in times. The worked equity return is a percent over the modeled price move, not an annual forecast.",
    "sections": [
      {
        "title": "Separate the investment from Maya’s stake",
        "text": "Assets are the investments held. Debt is borrowing owed. Equity is asset value minus debt: Maya’s remaining stake. With debt unchanged, a dollar asset loss reduces that smaller stake by the same number of dollars. The percentage loss on her own money is therefore magnified."
      },
      {
        "title": "The lender can require cash before the story ends",
        "text": "Collateral is an asset pledged to support a loan. A haircut is the reduction a lender applies to collateral’s value when deciding how much to lend. A margin call demands additional cash or collateral. If Maya cannot supply it, she may have to sell during the decline."
      },
      {
        "title": "A cycle can reinforce itself",
        "text": "Rising asset prices can support more borrowing, which can fund more purchases. Falling prices reverse that process. More collateral demands can force more sales, pushing prices down further. A belief about eventual value must therefore be paired with a way to finance the position along the path."
      }
    ]
  },
  {
    "id": "contagion",
    "topic": "crises",
    "title": "Losses and funding reinforce each other",
    "conceptIds": [
      "crises-2008",
      "crises-svb",
      "crises-contagion"
    ],
    "context": "Maya compares the mortgage-related financial crisis around 2008 with Silicon Valley Bank’s failure in 2023. Different starting problems became more damaging through borrowing, funding pressure and linked institutions.",
    "question": "Why does holding government-backed securities not alone guarantee a bank’s resilience?",
    "options": [
      "Duration losses and a funding run can still interact",
      "Those securities eliminate every liquidity need",
      "Deposit concentration cannot matter"
    ],
    "correct": 0,
    "explanation": "A government-backed security can still lose market value when interest rates rise. Rapid withdrawals create cash needs now, which can turn those price losses into an urgent bank problem.",
    "calculations": [],
    "units": "Asset values and withdrawals are dollar amounts. A low probability of default does not mean a stable market price. The years identify historical events, not exercise assumptions.",
    "sections": [
      {
        "title": "When mortgage losses spread",
        "text": "Before the global crisis, weak home loans were packaged into securities held across institutions. Borrowing magnified exposure to losses. Many firms relied on funding that could disappear quickly. Falling housing prices and loan losses therefore affected both investment values and confidence in institutions’ ability to pay."
      },
      {
        "title": "A safe borrower can still issue a price-sensitive bond",
        "text": "Silicon Valley Bank held substantial long-term securities. Their market values fell as interest rates rose. Its concentrated depositor base could withdraw quickly, creating acute cash pressure. Low credit risk in a security did not remove its sensitivity to interest rates or the bank’s funding problem. Governance and supervision also mattered."
      },
      {
        "title": "Follow more than direct loans between firms",
        "text": "Contagion means distress spreading. A firm can transmit losses through money it owes others. It can also sell shared assets at depressed prices, or cause lenders and depositors to lose confidence in similar firms. These links can hurt institutions that never directly lent to the original failing firm."
      }
    ]
  },
  {
    "id": "system",
    "topic": "crises",
    "title": "Resilience beyond individual banks",
    "conceptIds": [
      "crises-shadow",
      "crises-resolution",
      "crises-micro_macro"
    ],
    "context": "Lending also takes place through funds and other firms that are not ordinary deposit-taking banks. Authorities ask how their borrowing and payment promises affect the wider system.",
    "question": "What does system-wide supervision add to checking each institution separately?",
    "options": [
      "Attention to shared exposures and destabilizing feedback",
      "A guarantee that every creditor is protected",
      "A rule that all institutions must hold the same assets"
    ],
    "correct": 0,
    "explanation": "Institutions may own similar assets or depend on the same funding. Their combined reactions can cause damage that separate checks of each firm would miss.",
    "calculations": [],
    "units": "Asset holdings, debts and losses are dollar amounts. System-wide risk describes interactions between firms, not one numerical probability that applies to every institution.",
    "sections": [
      {
        "title": "Moving a loan does not erase its risk",
        "text": "Nonbank financial intermediation means financial activity through institutions outside ordinary banks. Some of it is called shadow banking. A fund can still borrow heavily or promise withdrawals sooner than its loans can be sold. These are familiar funding problems in a different organizational setting."
      },
      {
        "title": "Plan what happens when an institution fails",
        "text": "Resolution is the legal process for managing a failing financial institution, allocating its losses and trying to preserve critical services. The goal is not necessarily to protect every owner or creditor. Payment services and access to essential functions can matter to the wider economy."
      },
      {
        "title": "Check the crowd as well as each firm",
        "text": "Microprudential supervision checks individual institutions. Macroprudential policy also examines common exposures and feedback across the system. Several firms can each make a reasonable decision to sell while collectively depressing the same market. Looking at their separate balance sheets may miss that interaction."
      }
    ]
  },
  {
    "id": "public-debt",
    "topic": "society",
    "title": "Debt, growth and repayment sources",
    "conceptIds": [
      "society-debtdynamics",
      "society-currency",
      "society-municipal"
    ],
    "context": "A government borrows to finance spending. Maya asks how the amount owed compares with the size of the economy and what will provide money for repayment.",
    "question": "If GDP grows faster than effective debt interest, does that alone guarantee fiscal sustainability?",
    "options": [
      "No, primary deficits and financing constraints still matter",
      "Yes, any level of spending is permanently affordable",
      "Yes, currencies cannot depreciate"
    ],
    "correct": 0,
    "explanation": "Growth above borrowing costs helps the debt-ratio arithmetic. A large primary deficit, meaning spending above revenue before interest, or difficulty replacing maturing debt can still create problems.",
    "calculations": [
      "debt"
    ],
    "units": "Debt and GDP are dollar amounts; GDP measures production over a year here. Debt/GDP is a percentage. Its change is measured in percentage points. Interest and growth rates use the same annual period.",
    "sections": [
      {
        "title": "Compare debt with the economy supporting it",
        "text": "Gross domestic product, or GDP, measures an economy’s production over a period. Debt-to-GDP compares the debt stock with annual GDP. The ratio can rise because debt increases or because the economy shrinks. It can fall even with more dollars of debt if GDP grows sufficiently faster."
      },
      {
        "title": "Separate old interest from new spending gaps",
        "text": "The primary deficit is government spending minus revenue before interest on existing debt. Debt-ratio dynamics combine that deficit with the difference between the effective interest rate and GDP growth. Growth exceeding interest can help the arithmetic, but large primary deficits or difficulty refinancing can still create problems."
      },
      {
        "title": "Ask which income supports the promise",
        "text": "Borrowing in a currency a government issues changes its constraints, but does not guarantee investors’ purchasing power. Local government general-obligation bonds rely on the issuer’s specified general repayment pledge. Revenue bonds rely on a named revenue source, such as a project’s receipts. The legal pledge and the available resources both matter."
      }
    ]
  },
  {
    "id": "lifetime",
    "topic": "society",
    "title": "Sharing risks across a lifetime",
    "conceptIds": [
      "society-social",
      "society-pensions",
      "society-longevity"
    ],
    "context": "Maya plans for unemployment and retirement. She compares savings invested for her own account with a promised retirement payment and an annuity that pays while she remains alive.",
    "question": "What specific uncertainty can a lifetime annuity help manage?",
    "options": [
      "Outliving available assets",
      "Every future increase in living costs under all contracts",
      "All possible insurer failures"
    ],
    "correct": 0,
    "explanation": "A lifetime annuity can keep paying if the covered person lives a long time. It does not automatically adjust for inflation or remove the risk that the insurer cannot pay.",
    "calculations": [],
    "units": "Contributions and retirement payments are dollars over a stated month or year. A lifetime payment period depends on survival; it is different from a fixed number of years.",
    "sections": [
      {
        "title": "Some risks are shared across a community",
        "text": "Social insurance includes public arrangements for risks such as unemployment, disability or old age. These programs can cover people or risks that private providers would find difficult to insure affordably. Funding choices also involve taxes, redistribution and incentives."
      },
      {
        "title": "Ask what the retirement plan actually promises",
        "text": "In a defined-contribution plan, contributions enter an account and investment performance helps determine what is available later. In a defined-benefit plan, the employer or other sponsor promises benefits using a formula. That shifts more funding responsibility toward the sponsor, while its financial strength and the applicable protections still matter."
      },
      {
        "title": "What if you live longer than your savings last?",
        "text": "That uncertainty is longevity risk. A lifetime annuity exchanges money for payments that continue while the covered person lives. Pooling people with different lifetimes helps finance the promise. A fixed dollar payment still needs to be checked for inflation exposure, access to the money and the insurer’s ability to pay."
      }
    ]
  },
  {
    "id": "purpose-of-finance",
    "topic": "society",
    "title": "Governance, advice and access",
    "conceptIds": [
      "society-nonprofit",
      "society-advice",
      "society-democratization"
    ],
    "context": "Maya compares a member-owned institution, a nonprofit and financial advice paid for in different ways. She wants to know whether the arrangements help people make useful decisions.",
    "question": "What is a useful sign that broader financial access is improving welfare?",
    "options": [
      "People can fund worthwhile projects and protect important risks on understandable terms",
      "Only the number of leveraged trades increases",
      "Every participant receives a guaranteed market-beating return"
    ],
    "correct": 0,
    "explanation": "Access helps when people can fund useful projects or protect essential needs on terms they understand. More participation or trading alone does not establish an improvement in people’s lives.",
    "calculations": [],
    "units": "Fees and contributions are dollar amounts or explicitly stated annual percentages. An organization’s purpose or ownership model does not guarantee a return.",
    "sections": [
      {
        "title": "Ownership rules affect what an organization does",
        "text": "A cooperative is owned and governed by its members. A nonprofit can earn a surplus, but faces restrictions on distributing profits to private owners. These structures can support different aims. They still need oversight because managers can have interests that differ from the people they serve."
      },
      {
        "title": "Understand how the adviser gets paid",
        "text": "An adviser may be paid directly by the client or receive compensation connected with a product sold. That can influence recommendations. The client needs understandable information about costs, obligations and conflicts. Legal duties differ across arrangements and jurisdictions."
      },
      {
        "title": "Use access as a means to improve lives",
        "text": "Shiller’s idea of financial democratization includes access to useful funding and risk protection. More participation is valuable when it helps people finance worthwhile projects or withstand damaging events on terms they understand. More transactions alone do not establish that people are better off."
      }
    ]
  },
  {
    "id": "market-plumbing",
    "topic": "modern",
    "title": "Trading rules and evolving oversight",
    "conceptIds": [
      "modern-tplus",
      "modern-capital26",
      "modern-stress26"
    ],
    "context": "Maya buys a share, then waits for money and ownership to be formally exchanged. She also reads an announcement about a bank rule and asks when it will actually apply.",
    "question": "Does the announcement of a final rule mean every provision already operates that day?",
    "options": [
      "No, scope and effective dates must be read separately",
      "Yes, proposals and final rules are interchangeable",
      "Yes, every jurisdiction implements it identically"
    ],
    "correct": 0,
    "explanation": "Publication, legal adoption and the start date can differ. Read which institutions and transactions a rule covers and when each provision applies. Different jurisdictions can use different timetables.",
    "calculations": [],
    "units": "Settlement is counted in business days after a trade. Capital requirements are ratios or percentages under specific rules. Announcement and implementation dates are historical or regulatory facts.",
    "sections": [
      {
        "title": "Trading and settlement are separate events",
        "text": "Execution means agreeing the trade. Settlement means completing the transfer of money and securities. T+1 means one business day after the trade date for covered transactions. Weekends and market holidays affect that count. The U.S. standard transition occurred on May 28, 2024, according to the SEC."
      },
      {
        "title": "A proposal is an invitation to consider a change",
        "text": "A proposed rule is not yet the final adopted requirement. The March 19, 2026 U.S. bank-capital package was issued as proposals. Its scope and status must be read from the dated source, rather than inferred from the announcement headline."
      },
      {
        "title": "A final rule can still start later",
        "text": "The Federal Reserve’s September 30, 2026 stress-test rules have their own implementation timing. They include averaging stress capital buffer requirements across two years starting in 2028. A stress capital buffer is an extra capital requirement linked to modeled stress losses. The dates here come from the linked official sources; this app does not refresh them automatically."
      }
    ]
  },
  {
    "id": "hidden-liquidity",
    "topic": "modern",
    "title": "Reported smoothness and real liquidity",
    "conceptIds": [
      "modern-private",
      "modern-liquidity",
      "modern-concentration"
    ],
    "context": "Maya compares a private loan fund with public investments whose prices update frequently. She notices that a broad share index can also be dominated by a few large businesses.",
    "question": "A private fund reports very stable prices. What should Maya investigate?",
    "options": [
      "How and when assets are valued, and how redemptions are funded",
      "Whether stable marks guarantee no defaults",
      "Only how many decimal places are reported"
    ],
    "correct": 0,
    "explanation": "A steady reported estimate can hide changing borrower conditions. Check when values are updated and how the fund can find cash if investors ask to withdraw.",
    "calculations": [],
    "units": "Reported values are dollars at each valuation date. A portfolio weight is a percentage of money invested. A smooth reported return series does not state how quickly investments can be sold.",
    "sections": [
      {
        "title": "An unchanged estimate does not mean an unchanged borrower",
        "text": "Private credit is lending outside traditional publicly traded debt markets. A private loan may be valued infrequently using estimates. Its reported price can therefore look steady even when the borrower’s finances or market interest rates have changed. Refinancing risk means difficulty replacing debt when it comes due."
      },
      {
        "title": "A withdrawal promise needs a source of cash",
        "text": "Redemption means an investor asks a fund to return money under its rules. If investors can request money faster than the loans can be sold or repaid, there is a liquidity mismatch. Notice periods, limits on withdrawals and cash reserves can change that exposure. The exact terms matter."
      },
      {
        "title": "A long list can hide concentrated weights",
        "text": "A capitalization-weighted index gives larger companies larger weights based on the market value of their shares. Many small holdings may coexist with a large exposure to a few dominant companies. Check where the money is actually invested and which economic shocks could hurt those holdings together."
      }
    ]
  },
  {
    "id": "digital-claims",
    "topic": "modern",
    "title": "The claim behind the token",
    "conceptIds": [
      "modern-stable",
      "modern-token",
      "modern-crypto"
    ],
    "context": "Maya sees a stablecoin, a token representing a bond and a company offering to hold cryptoassets for her. She starts by asking what each arrangement promises and who must deliver.",
    "question": "What should Maya check before treating a tokenized bond as reliable?",
    "options": [
      "The underlying obligation, legal rights, custody and settlement terms",
      "Only the ledger’s speed",
      "Whether the token’s name includes safe"
    ],
    "correct": 0,
    "explanation": "The holder needs a real payment obligation, valid legal rights and a reliable way to hold and transfer the claim. Recording a token on a ledger does not establish all those protections by itself.",
    "calculations": [],
    "units": "A token price is money per token. A peg names a target reference value. A bond token’s interest rate must state a percentage and payment period just like an ordinary bond.",
    "sections": [
      {
        "title": "A stable name needs a working mechanism",
        "text": "A stablecoin aims to track a reference value, often a currency. Its peg is that target relationship. Reserves are assets intended to support it. Redemption rights describe how a holder can exchange the token for the promised reference payment or asset. Designs differ, and a target price can fail."
      },
      {
        "title": "A new record does not change every obligation",
        "text": "Tokenization records or transfers an asset claim using tokens on a ledger. If the token represents a company’s bond, the company still has to pay the debt. A ledger alone does not guarantee repayment or establish all the legal rights of ownership."
      },
      {
        "title": "Who controls access to the asset?",
        "text": "Self-custody means managing the signing keys yourself; losing access can mean losing control of the assets. A custodian manages access for customers but introduces exposure to its own operations and obligations. Smart contracts are programs that execute rules. Their code, governance and legal arrangements can all create risks."
      }
    ]
  },
  {
    "id": "changing-models",
    "topic": "modern",
    "title": "Models and shared dependencies",
    "conceptIds": [
      "modern-ai",
      "modern-climate",
      "modern-cyber"
    ],
    "context": "A firm tests an AI trading model on past prices. An insurer uses past disaster claims, and several financial firms depend on the same technology provider. All are relying on patterns that might not hold next time.",
    "question": "Why is an excellent historical backtest insufficient evidence for live reliability?",
    "options": [
      "It may exploit leakage or relationships that do not persist",
      "Model complexity guarantees accuracy",
      "Historical prices contain every future shock"
    ],
    "correct": 0,
    "explanation": "Past results can rely on accidental patterns, hindsight or unrealistic costs. Conditions and other participants’ behavior can also change. Test unfamiliar data and realistic operation before treating a backtest as evidence of reliability.",
    "calculations": [],
    "units": "Forecasts must name what is predicted and over what period. Backtest returns are percentages over the tested period after the costs included. A good historical score is not a promised future return.",
    "sections": [
      {
        "title": "A historical simulation is a test, not a guarantee",
        "text": "A backtest applies a proposed strategy to historical data. Overfitting happens when a model learns the sample’s accidental patterns rather than a relationship that works elsewhere. Data leakage happens when testing uses information that would not have been available at the decision time. Both can make results look better than real trading would."
      },
      {
        "title": "The setting can change",
        "text": "Borrowers, markets and other traders react to new conditions and new models. Climate changes and changes in where property is built can also alter insurance losses. The probabilities estimated from yesterday’s sample may no longer describe tomorrow’s risks."
      },
      {
        "title": "Look for a common point of failure",
        "text": "Separate firms can share a payment service, cloud provider, custodian or data feed. A failure there can affect them together. Realistic testing therefore includes trading costs, unfamiliar data, severe scenarios and recovery plans. Reliable operation needs more than a model that fits the past."
      }
    ]
  }
];
// A combined text view supports term matching; the displayed source is the sections above.
for(const lesson of guidedLessons)lesson.teaching=lesson.sections.map(s=>s.text).join('\n\n');

// Fixed bond examples keep the familiar story while showing every intermediate amount.
function fixedBondExample(id){
 const assumptions=[['Face value','$1,000 (assumed contract)'],['Annual coupon rate','5% (assumed contract)'],['Coupon payments per year','1 (annual)']];
 const annualCoupon=1000*.05,finalPayment=1000+annualCoupon;
 if(id==='promise')return {givens:assumptions.concat([['Term','3 years (assumed contract)']]),steps:['Convert the coupon rate: 5 ÷ 100 = 0.05.','Annual coupon = $1,000 × 0.05 ÷ 1 = $50.','Each earlier year pays the $50 coupon. Final payment = $1,000 principal + $50 coupon = $1,050.'],formula:'Coupon payment = face value × annual coupon rate ÷ payments per year',symbols:'Face value = principal promised at maturity; coupon rate = annual interest percentage; coupon payment = interest amount each payment date; maturity = repayment date.',answerText:'$50 annual coupon; $1,050 final payment'};
 if(id==='price'){const y=.06;return {givens:assumptions.concat([['Remaining annual periods','3 (assumed)'],['Required annual yield','6% (assumed market comparison)']]),steps:['Annual coupon = $1,000 × 0.05 = $50; final payment = $1,000 + $50 = $1,050.','Required yield: 6 ÷ 100 = 0.06. Gross annual discount factor = 1 + 0.06 = 1.06.',`Year 1 payment today: $50 ÷ 1.06 = $${(annualCoupon/(1+y)).toFixed(2)}.`,`Year 2 payment today: $50 ÷ 1.06² = $${(annualCoupon/(1+y)**2).toFixed(2)}.`,`Year 3 payment today: $1,050 ÷ 1.06³ = $${(finalPayment/(1+y)**3).toFixed(2)}.`,`Add the discounted payments, using full precision before rounding: $${bondPrice(1000,50,y,3).toFixed(2)}.`],formula:'P = Σₜ₌₁ᵀ C/(1+y)ᵗ + F/(1+y)ᵀ',symbols:'P = bond price today; C = coupon payment per period; F = face value; y = yield per payment period; t = payment-period index; T = total remaining periods; Σ means add the discounted payments.',answerText:'$'+bondPrice(1000,50,y,3).toFixed(2)};}
 const price=finalPayment/1.06;return {givens:assumptions.concat([['Time still remaining','1 year (assumed; earlier coupons already paid)'],['Required one-year return','6% (assumed comparison)']]),steps:['Required return: 6 ÷ 100 = 0.06; gross return factor = 1 + 0.06 = 1.06.','Remaining coupon = $1,000 × 0.05 = $50. Final payment = $1,000 + $50 = $1,050.',`Price today = $1,050 ÷ (1 + 0.06) = $${price.toFixed(2)}.`,`Gain over the purchase price = $1,050 − price = $${(finalPayment-price).toFixed(2)}.`,`Gain ÷ price = 0.06; multiply by 100 = 6% (using unrounded values).`],formula:'Price = final payment/(1 + required one-year return); return = (final payment − price)/price',symbols:'Price = what the new buyer pays today; final payment = last coupon plus principal; required return = the desired one-year gain relative to the price; 1 + return is the gross growth factor.',answerText:'$'+price.toFixed(2)};
}
export const guidedTermLists={
  "bonds": [
    [
      "Face value",
      "The dollar principal a bond promises to repay at the end. It can differ from the dollars you pay to buy it today."
    ],
    [
      "Coupon",
      "An interest payment, measured in dollars per payment date. The contract states whether it is paid yearly, every six months, or on another schedule."
    ],
    [
      "Coupon rate",
      "The annual interest payment as a percentage of face value. It is stated in percent per year. The dollar coupon is face value × coupon rate ÷ payments per year."
    ],
    [
      "Yield",
      "A percentage associated with an investment’s price and payments, usually stated per year for bonds. Ask which yield measure is meant. Yield is not a dollar payment or a guarantee of profit."
    ],
    [
      "Yield to maturity",
      "The annual percentage calculated from today’s purchase price and all promised bond payments through the final repayment date. It accounts for payment timing. Missing payments or selling early can change what you earn."
    ],
    [
      "Current yield",
      "Annual coupon dollars ÷ purchase-price dollars × 100. This gives an annual interest-income percentage. It leaves out the difference between purchase price and principal repayment."
    ],
    [
      "Discounting",
      "Working backward from future dollars to their value today using a rate and a waiting time. Divide a payment one year away by 1 plus the annual rate written as a decimal."
    ],
    [
      "Spot rate",
      "A rate available today for money paid at one particular future date. State the date and rate convention; different dates can have different annual percentages."
    ],
    [
      "Forward rate",
      "A rate implied by today’s prices for an investment during a specified future interval. It helps compare financing arrangements. It is not a certain prediction of the future market rate."
    ],
    [
      "Duration",
      "Check which kind is meant. Macaulay duration is an average waiting time in years. Modified duration estimates percentage price sensitivity to a small yield change; it is different from the maturity date."
    ],
    [
      "Convexity",
      "The curvature in the relationship between bond price and yield. It explains why a straight-line duration estimate becomes less accurate as yields move farther."
    ],
    [
      "Term premium",
      "Extra expected compensation associated with holding longer-term debt instead of shorter-term debt over the relevant horizon. In yield comparisons it is a rate difference, not a cash payment."
    ],
    [
      "Annuity",
      "A series of payments. The exercises use equal dollar payments at each year-end for a fixed number of years. A lifetime annuity has a different ending condition: the covered person’s survival."
    ],
    [
      "Perpetuity",
      "An idealized series of payments continuing forever. Its value can still be a finite dollar amount when future payments are discounted at an appropriate rate."
    ],
    [
      "Spread",
      "A difference between comparable rates or prices. A bond yield spread is a difference in annual yields, measured in percentage points. A trading bid–ask spread is usually dollars per share."
    ],
    [
      "Accrued interest",
      "Coupon interest accumulated since the previous payment date. It is a dollar amount usually added to a clean bond quotation to obtain the amount paid at settlement."
    ],
    [
      "Nominal",
      "Measured in money without adjusting for changing prices. A nominal dollar gain can buy less than before if inflation is higher than the money return."
    ],
    [
      "Real",
      "Adjusted for inflation to describe purchasing power. A real percentage return compares the change in your money with the change in prices over the same period."
    ]
  ],
  "purpose": [
    [
      "Equity",
      "An ownership stake. Its dollar value is what remains for owners after debts and other higher-priority obligations. Its value can fall to zero."
    ],
    [
      "Debt",
      "Money owed under a contract that specifies repayment and, usually, interest. Principal and interest payments are dollar amounts on stated dates."
    ],
    [
      "Contingent claim",
      "A right to receive a payment depending on what happens. A fire policy pays after a covered fire; a share depends on the business’s results."
    ],
    [
      "Risk pooling",
      "Combining many customers’ risks so that losses are easier to predict when they do not all happen together. It makes planning easier without preventing the underlying damage."
    ],
    [
      "Adverse selection",
      "People know different things before entering an agreement. Customers expecting more losses may be more eager to buy insurance, changing the risks in the insured group."
    ],
    [
      "Moral hazard",
      "Protection changes incentives after an agreement. Someone who expects insurance to cover a loss may take less care to prevent it. Dishonesty is not required."
    ],
    [
      "Principal–agent problem",
      "One person makes decisions for another but may be rewarded differently. A manager paid for immediate results might take risks whose later losses fall on clients."
    ],
    [
      "Limited liability",
      "An ordinary shareholder can generally lose the money invested without using unrelated personal assets to pay the company’s debts. Personal guarantees and legal exceptions are separate issues."
    ],
    [
      "Externality",
      "A decision affects other people, but the decision-maker does not bear all of those effects. A forced sale can lower prices for other holders too."
    ]
  ],
  "risk": [
    [
      "Expected return",
      "An average across possible percentage returns, weighted by each outcome’s probability. Always name the period, such as one year. The average is not a promised result."
    ],
    [
      "Variance",
      "An average of squared differences from the mean return. Its units are squared return units. Taking its square root gives standard deviation, also called volatility."
    ],
    [
      "Volatility",
      "How much returns tend to vary around their average. It is measured in return units for a stated period. Annual volatility describes variation of annual returns; it is not an annual loss forecast."
    ],
    [
      "Utility",
      "A model of how valuable an outcome feels to a person. A dollar needed for food may matter more than an extra dollar after all needs are covered."
    ],
    [
      "Correlation",
      "A unitless measure from −1 to +1 of how two sets of returns move together. It is not a return percentage. Lower correlation can help holdings offset each other’s fluctuations."
    ],
    [
      "Systematic risk",
      "Risk shared across many investments, such as an economic downturn. Owning more companies does not necessarily remove this common exposure."
    ],
    [
      "Idiosyncratic risk",
      "Risk mainly specific to one company or asset, such as a failed product. Spreading money across different businesses can reduce dependence on it."
    ],
    [
      "Efficient frontier",
      "The portfolios offering the best modeled combinations of expected return and volatility for a specified period. The answer depends on estimates and what investments are allowed."
    ],
    [
      "Beta",
      "A unitless measure of sensitivity to a chosen market benchmark. It describes one relationship with market returns, not every possible risk in the investment."
    ],
    [
      "CAPM",
      "The Capital Asset Pricing Model. It estimates required return as the risk-free rate plus beta times the expected market risk premium. Rate inputs and output use the same period, usually percent per year."
    ],
    [
      "Capital market line",
      "A model’s return-versus-volatility comparison for portfolios mixing a risk-free investment and a particular efficient risky portfolio. It concerns whole portfolios, not any stock you choose."
    ],
    [
      "Security market line",
      "The CAPM comparison between expected return and beta. The return is a percentage for a stated period; beta has no units."
    ],
    [
      "Value at Risk",
      "A modeled loss threshold for a specified horizon and probability. It may be dollars lost in one day, for example. Losses beyond the threshold can be much larger."
    ],
    [
      "Expected shortfall",
      "The average modeled loss among the worst outcomes beyond a chosen threshold. It needs a probability level, time horizon and loss units, just as Value at Risk does."
    ],
    [
      "Fat tails",
      "Extreme outcomes are more common than a thin-tailed comparison model would predict. The phrase concerns the shape of the possible outcomes, not a fixed loss percentage."
    ]
  ],
  "behavior": [
    [
      "Market efficiency",
      "How much a market price already reflects available information. A claim about efficiency must say which information and what return comparison are being used."
    ],
    [
      "Joint-hypothesis problem",
      "To test whether returns are unusually high, you need a model of normal compensation for risk. A surprising result could mean mispricing or a weak comparison model."
    ],
    [
      "Risk premium",
      "An expected return above a safer benchmark as compensation for uncertainty. It is a difference in percentage returns over the same period, not a guarantee of extra money."
    ],
    [
      "Narrative",
      "A story people share that can affect spending, investment or borrowing. A persuasive story can shape expectations without proving that a price is justified."
    ],
    [
      "Arbitrage",
      "Using inconsistent prices for equivalent payments to construct an advantage under the assumed trading and financing conditions. Practical strategies can still face costs, timing and execution problems."
    ],
    [
      "Prospect theory",
      "A model of choices based on gains and losses relative to a reference point. Losses can weigh more heavily than equal gains, and small probabilities can receive unusual attention."
    ],
    [
      "Anchoring",
      "Giving an initial number too much influence. Your purchase price can become a mental target even when it tells you little about the investment’s future."
    ],
    [
      "Disposition effect",
      "A tendency to sell profitable holdings quickly while keeping losing holdings too long, sometimes to avoid acknowledging a loss."
    ],
    [
      "Overconfidence",
      "Believing your knowledge or forecast is more reliable than the evidence supports. It can encourage excessive trading or too much money in one investment."
    ]
  ],
  "equity": [
    [
      "Common equity",
      "Ordinary ownership of a company. Owners receive value left after obligations with higher priority. The dollar value can be zero even when the company still owns some assets."
    ],
    [
      "Preferred shares",
      "Shares with specified rights that often give payment priority over common shares. Voting rights and whether dividends can be suspended depend on the terms."
    ],
    [
      "Capital structure",
      "The mix of debt, ordinary shares and other funding used by a business. It determines who must be paid and who absorbs losses first."
    ],
    [
      "Gordon model",
      "A share-valuation model assuming dividends grow at a constant percentage forever. The required return must exceed the growth rate. The result is dollars per share."
    ],
    [
      "Free cash flow to the firm",
      "Cash available to lenders and shareholders after operating needs and investment in the business. It is a dollar amount over a stated period, not a profit percentage."
    ],
    [
      "WACC",
      "Weighted average cost of capital: a financing rate combining the costs of debt and equity. It is a percentage per period, commonly per year, used to value suitable cash flows to the whole firm."
    ],
    [
      "Enterprise value",
      "The dollar value of the operating business to its capital providers. Debt, nonoperating cash and other claims must be handled consistently to obtain ordinary shareholders’ value."
    ],
    [
      "Terminal value",
      "The estimated dollar value, at a future forecast date, of cash flows beyond the years forecast individually. It must then be discounted back to today."
    ],
    [
      "Market capitalization",
      "Dollars per share × shares outstanding. The result is the market value of the company’s equity in dollars. It is not annual revenue or cash newly paid to the company."
    ],
    [
      "P/E",
      "Price-to-earnings ratio: share price ÷ earnings per share for a stated earnings period. Usually described as times earnings, not a return percentage. It is difficult to interpret with negative earnings."
    ],
    [
      "CAPE",
      "Cyclically adjusted price-to-earnings ratio. It uses a ten-year average of inflation-adjusted earnings to reduce dependence on one business-cycle year. It is a ratio, not a promised return."
    ],
    [
      "Dilution",
      "New shares reduce an existing owner’s percentage if the owner does not buy more. Whether the owner loses dollar value also depends on the price received and the value added with the new funding."
    ],
    [
      "EPS",
      "Earnings per share: the earnings allocated to ordinary shareholders divided by the share count. Units are dollars per share over the stated reporting period."
    ],
    [
      "NPV",
      "Net present value: the present dollar value of additional future project cash flows minus the initial investment. A positive result indicates value added under the model’s assumptions."
    ],
    [
      "Sunk cost",
      "Money or effort already spent that cannot be recovered by today’s decision. It is different from a new cost you can still choose to avoid."
    ]
  ],
  "housing": [
    [
      "NOI",
      "Net operating income: rent and other property income minus operating expenses for a stated period. Usually dollars per year, before loan payments and some other costs."
    ],
    [
      "Cap rate",
      "Capitalization rate: annual net operating income ÷ property value × 100. It is an annual operating-income percentage before financing and future property-price changes."
    ],
    [
      "REIT",
      "Real estate investment trust. It holds real-estate-related assets under a particular organizational structure. Its shares carry business, property, debt and market risks."
    ],
    [
      "Amortization",
      "Gradually repaying loan principal. A monthly payment can stay the same in dollars while its interest and principal portions change as the loan balance falls."
    ],
    [
      "LTV",
      "Loan-to-value ratio: outstanding loan dollars ÷ property-value dollars × 100. It is a percentage at a date, not an annual interest rate."
    ],
    [
      "Refinancing",
      "Replacing an existing loan with a new loan. Compare the new rate and payments with fees, time remaining and the old loan’s terms."
    ],
    [
      "Prepayment",
      "Repaying loan principal earlier than scheduled. It changes when a lender receives money and may require reinvesting it at a different interest rate."
    ],
    [
      "MBS",
      "Mortgage-backed security: an investment supported by payments from a group of home loans. Borrower defaults, early repayment and the security’s rules affect investor payments."
    ],
    [
      "Tranche",
      "A layer of a financial structure with a defined payment priority. Junior layers take losses before senior layers, up to the protection the structure actually provides."
    ],
    [
      "CDS",
      "Credit default swap: a contract exchanging premiums for a payment after a specified credit event. Its terms and the protection seller’s ability to pay matter."
    ],
    [
      "Subordination",
      "A claim is paid after another claim. Lower-priority claims can absorb losses first, giving higher-priority claims a limited cushion."
    ]
  ],
  "derivatives": [
    [
      "Forward",
      "An agreement made today obligating an exchange at a future date and an agreed price. The delivery price is money per unit; the contract’s value after agreement can be positive or negative."
    ],
    [
      "Futures",
      "A standardized contract, usually traded and cleared through an exchange structure. Gains and losses are settled regularly, so the holder can need cash before the final delivery date."
    ],
    [
      "Basis risk",
      "The hedge does not exactly match the real exposure. Different products, dates or locations can make the two prices move differently."
    ],
    [
      "Carry",
      "The financing and other costs, less benefits or income, associated with holding an asset until later delivery. Keep dollar costs and annual percentage rates consistent in the formula."
    ],
    [
      "Margin",
      "Cash or collateral required to support a trading position. It is a dollar resource you may need to provide, not the same as your eventual profit or loss."
    ],
    [
      "Call",
      "An option giving its holder the right to buy the asset at the strike price under the contract. Buying that right costs a premium."
    ],
    [
      "Put",
      "An option giving its holder the right to sell the asset at the strike price under the contract. It can gain value when the asset price falls."
    ],
    [
      "Strike",
      "The price at which an option may be exercised. In stock examples it is dollars per share. A forward’s agreed exchange price is usually called its delivery price."
    ],
    [
      "Premium",
      "The price paid to buy an option. These examples quote dollars per share; multiply by the contract’s share count for the whole purchase cost."
    ],
    [
      "Payoff",
      "What a contract delivers at the specified outcome or settlement date, before subtracting its purchase cost. Here an option payoff is dollars per share; profit subtracts the premium too."
    ],
    [
      "American-style",
      "An option that permits exercise before expiration under its contract. The term concerns exercise rights, not where it is traded."
    ],
    [
      "European-style",
      "An option that permits exercise at expiration under its contract. It can still be bought or sold before that date if a market is available."
    ],
    [
      "Replication",
      "Building another portfolio with matching payments in the modeled future outcomes. Its purpose is to connect the prices of equivalent claims."
    ],
    [
      "Risk-neutral",
      "A pricing method using weights consistent with the model’s asset prices and financing rate. These weights are not necessarily the actual probabilities of future events."
    ],
    [
      "Implied volatility",
      "The volatility input that makes a pricing model match an observed option price. It is usually quoted as an annualized percentage, not a promised future fluctuation."
    ],
    [
      "Delta",
      "The approximate change in an option’s dollar price for a $1 change in the underlying price. For an option on one share it can also be read as shares per option needed for a local hedge."
    ],
    [
      "Gamma",
      "How much delta changes for a $1 change in the underlying price, under that quotation convention. It helps explain why a delta hedge needs adjustment."
    ],
    [
      "Theta",
      "Option-price sensitivity to passing time. Traders often quote dollars per share per day; check the convention and whether the measure describes decay as time passes."
    ],
    [
      "Vega",
      "Option-price sensitivity to implied volatility. Often quoted as dollars per share for a one-percentage-point volatility change. The model’s raw derivative may use decimal volatility instead."
    ],
    [
      "Rho",
      "Option-price sensitivity to interest rates. Often quoted as dollars per share for a one-percentage-point rate change. Check the unit convention before comparing numbers."
    ]
  ],
  "banking": [
    [
      "Assets",
      "Things the bank owns or expects to collect, such as cash, securities and loans. Their values are dollar amounts at a date."
    ],
    [
      "Liabilities",
      "Amounts the bank owes, including deposits and other borrowing. Your deposit is your asset but the bank’s liability."
    ],
    [
      "Equity",
      "Assets minus liabilities in dollars. It is the owners’ remaining stake and a cushion that falls when asset losses occur with obligations unchanged."
    ],
    [
      "Capital",
      "Funding that qualifies to absorb losses under banking rules. It is measured in dollars; a capital ratio compares it with a specified exposure measure. It is not simply cash held for withdrawals."
    ],
    [
      "Reserves",
      "Balances banks hold at the central bank, measured in dollars. They help settle transfers between banks and meet liquidity needs."
    ],
    [
      "Liquidity",
      "Ability to obtain cash and make payments when due. A valuable long-term asset may not provide cash quickly enough to meet a withdrawal today."
    ],
    [
      "Solvency",
      "Having assets worth enough to meet obligations. An institution can struggle with immediate cash payments even if its asset value exceeds what it owes."
    ],
    [
      "QE",
      "Quantitative easing: a central bank buys financial assets, increasing its holdings and usually reserve balances. It can affect market yields and is different from a direct household payment."
    ],
    [
      "QT",
      "Quantitative tightening: a central bank reduces its asset holdings, for example by not replacing maturing securities. Effects depend on the details and financial conditions."
    ],
    [
      "RWA",
      "Risk-weighted assets: bank exposures after applying regulatory risk weights. This is a dollar measure used in some capital-ratio denominators, not an interest rate or a cash reserve."
    ],
    [
      "Lender of last resort",
      "An institution supplying emergency liquidity when ordinary funding fails, subject to its eligibility, collateral and pricing rules. The loan does not itself erase prior losses."
    ]
  ],
  "institutions": [
    [
      "Underwriting",
      "An intermediary’s arrangement to help issue and distribute securities. The agreement determines who bears the risk that investors do not buy them on expected terms."
    ],
    [
      "Bookbuilding",
      "Collecting prospective investors’ indications of how much they would buy and on what terms. It helps set an offering’s price and other terms."
    ],
    [
      "Broker",
      "A firm or person arranging or executing trades for a client, rather than necessarily owning the investment sold to the client."
    ],
    [
      "Dealer",
      "A firm buying and selling for its own account. It can be the other side of a customer’s trade."
    ],
    [
      "Market maker",
      "A dealer supplying prices at which it is willing to buy and sell, subject to the quoted size and conditions."
    ],
    [
      "Bid",
      "The dollar price someone offers to pay to buy from you. In share trading, normally dollars per share."
    ],
    [
      "Ask",
      "The dollar price someone requests to sell to you. In share trading, normally dollars per share."
    ],
    [
      "Limit order",
      "An instruction setting the most you will pay to buy or the least you will accept to sell. It controls price but may not be executed."
    ],
    [
      "Payment for order flow",
      "A payment for routing customer orders to a trading firm. It can create a conflict between the broker’s revenue and the customer’s execution interests."
    ],
    [
      "ETF",
      "Exchange-traded fund: a pool of investments whose shares trade on an exchange. It can follow an index or use active management. The label does not describe all the risks inside."
    ],
    [
      "NAV",
      "Net asset value: asset dollars minus liability dollars. Divide by fund shares to obtain dollars per share. It is a value measure, not an annual return."
    ],
    [
      "Redemption",
      "Returning a fund share or other claim for the payment or assets allowed by its terms. Timing, charges and restrictions can matter."
    ]
  ],
  "crises": [
    [
      "Leverage",
      "Using borrowing to hold investments. Assets divided by equity is one leverage measure, stated in times. A price change then falls on a smaller amount of the owner’s money."
    ],
    [
      "Haircut",
      "The reduction applied to an asset’s value when deciding how much can be borrowed against it. Usually a percentage of collateral value, not an annual interest rate."
    ],
    [
      "Margin call",
      "A request for additional cash or pledged assets to keep a loan or trading position supported. It may force action before an investment can recover."
    ],
    [
      "Fire sale",
      "A pressured sale to obtain cash, potentially at a price below what a patient seller could obtain. It can lower prices faced by other holders."
    ],
    [
      "Contagion",
      "Financial distress spreading through obligations, shared holdings, funding conditions or confidence. Firms can be affected without directly lending to the first failing institution."
    ],
    [
      "Resolution",
      "The legal management of a failing financial institution, including allocating losses and trying to preserve critical services. Not every creditor or owner is necessarily protected."
    ],
    [
      "Microprudential",
      "Supervision focused on the financial soundness of individual institutions."
    ],
    [
      "Macroprudential",
      "Policy concerned with financial-system risks, including many institutions sharing the same exposure or reacting in destabilizing ways."
    ]
  ],
  "society": [
    [
      "GDP",
      "Gross domestic product: the value of an economy’s production over a stated period. These debt examples use annual GDP in dollars."
    ],
    [
      "Primary deficit",
      "Government spending minus revenue before interest on existing debt. It is dollars over a stated fiscal period, or a share of that period’s GDP when shown as a percentage."
    ],
    [
      "General-obligation bond",
      "Local government borrowing supported by the issuer’s specified general repayment pledge. The precise tax powers and legal terms must be checked."
    ],
    [
      "Revenue bond",
      "Borrowing supported by a specified revenue source, such as receipts from a project. The label does not guarantee enough revenue will arrive."
    ],
    [
      "Defined contribution",
      "A retirement plan in which contributions enter an account and investment results affect what is available later. The contribution formula does not guarantee a particular retirement income."
    ],
    [
      "Defined benefit",
      "A retirement plan promising benefits under a formula, such as payments based on salary and service. Its funding and the sponsor’s ability to pay still matter."
    ],
    [
      "Longevity risk",
      "The uncertainty of living longer than the resources available for retirement. A lifetime annuity can share this risk across people with different lifetimes."
    ],
    [
      "Cooperative",
      "An organization owned and governed by members, such as customers or workers. Its ownership rules do not eliminate the need for good management."
    ]
  ],
  "modern": [
    [
      "T+1",
      "Settlement one business day after the trade date for covered transactions. Business days exclude relevant weekends and holidays; settlement is different from agreeing the trade."
    ],
    [
      "GSIB",
      "Global systemically important bank: a bank identified as especially significant to the wider financial system. Additional rules can apply because its problems could have wider effects."
    ],
    [
      "Private credit",
      "Lending outside traditional publicly traded debt markets. The loans can have infrequent valuations and limited opportunities for investors to obtain cash quickly."
    ],
    [
      "Liquidity mismatch",
      "Money can be demanded sooner than assets can be sold or repaid. The issue is the timing of cash needs compared with cash availability."
    ],
    [
      "Stablecoin",
      "A token aiming to track a reference value, often a currency. Reserves, conversion rules and legal redemption rights differ across designs; the target can fail."
    ],
    [
      "Tokenization",
      "Recording or transferring an asset claim using tokens on a ledger. It does not by itself make the borrower reliable or establish every legal ownership right."
    ],
    [
      "Self-custody",
      "Controlling asset-signing keys yourself. It avoids some intermediary exposure but leaves key security and recovery with you."
    ],
    [
      "Overfitting",
      "Learning accidental patterns in the historical sample that do not work reliably on other data. It can make a model’s backtest look better than future use."
    ],
    [
      "Data leakage",
      "Using information in a test that would not have been available at the real decision time. This gives the model an unfair hindsight advantage."
    ]
  ]
};

export const basicTermDefinitions = [
 ['Return','The gain or loss from an investment over a stated period. A dollar gain subtracts the amount paid from payments received and remaining value. A percentage return divides that gain by the starting investment and multiplies by 100. Always state the time period.'],
 ['Percentage','A share out of 100. Convert a percentage to a decimal by dividing by 100 before multiplying. A percentage needs a base: percent of face value, purchase price or portfolio value can mean different things.'],
 ['Percentage point','A difference between percentages. For example, 6% minus 5% is 1 percentage point. In decimal-rate formulas that difference is 0.06 − 0.05 = 0.01. It is different from calculating a percentage change relative to the old rate.'],
 ['Annual','Per year. An annual percentage and a monthly percentage describe different periods, so the payment schedule and rate convention must be matched before calculation.'],
 ['Per share','For one share. Multiply dollars per share by the number of shares to obtain dollars for the whole holding.'],
 ['Cash flow','Money paid or received on a date or during a stated period. A cash-flow amount is dollars; a rate is a different kind of number.'],
 ['Principal','The amount of a loan still owed, excluding interest. A bond’s face value is the principal promised at its repayment date.'],
 ['Maturity','The contractual date for final repayment. Time to maturity is how long remains until that date.'],
 ['Default','Failure to meet a payment or other contractual obligation. What investors recover afterward depends on the assets, priorities and legal arrangements.'],
 ['Required return','The percentage compensation an investor requires over a stated period to accept an investment’s price and risk. It is a valuation input, not a guarantee that the money will be earned.'],
 ['Discount rate','The rate used to translate future payments into a value today. Use the same period for the rate and waiting time, and consider the payment’s risk.'],
 ['Portfolio','The investments held together. Each holding’s weight describes how much of the total money is invested in it.']
];

export function bondLessonExample(id){
 const result=fixedBondExample(id);
 const descriptions={
  promise:['Coupon and final payment · dollars','The coupon rate is 5% of face value per year. Face value is a dollar amount. A yearly coupon is dollars per year; the final payment adds principal to the last coupon.','The $50 is interest paid once each year. At maturity, $50 interest plus the $1,000 principal gives a $1,050 final payment.'],
  price:['Purchase price · dollars today','Promised payments are dollars at each year-end. The chosen required yield is a percentage per year, entered as a decimal. Discounting converts each future payment into a dollar value today.','This dollar result is the purchase price for the remaining payments under the assumed yield. It is not the yearly interest payment or the amount earned.'],
  yield:['Purchase price · dollars today','The final payment is $1,050 in exactly one year. The required return is 6% for that year. Divide the payment by 1 + 6/100 = 1.06 to find the purchase price.','The price is about $990.57. Subtracting the unrounded price from $1,050 gives about $59.43 gain. Gain divided by purchase price, multiplied by 100, is a 6% return over the remaining year, assuming full payment.']
 };
 const [unitLabel,readingGuide,resultMeaning]=descriptions[id]||descriptions.yield;
 return {...result,unitLabel,readingGuide,resultMeaning,symbols:result.symbols+'; Units: '+readingGuide};
}
