export type ReportStatus = "Auto-Filed" | "Needs Review";

export type Report = {
  id: string;
  employee: string;
  initials: string;
  expenseType: string;
  amount: number;
  status: ReportStatus;
  confidence: number;
  exceptionId?: string;
};

export type EvidenceItem = { label: string; ok: true };

export type Exception = {
  id: string;
  employee: string;
  initials: string;
  type: string;
  amount: number;
  amountLabel: string;
  location: string;
  date: string;
  reportId: string;
  shortReason: string;
  policyOverage: string;
  objectTitle: string;
  aiHeadline: string;
  aiReasoning: string;
  precedentPct: number;
  precedentBasis: {
    similarApprovals: number;
    quarters: number;
    businessUnits: number;
  };
  recommendation: "Approve" | "Escalate";
  confidence: number;
  evidence: EvidenceItem[];
};

export const reports: Report[] = [
  {
    id: "R-10481",
    employee: "Sarah Chen",
    initials: "SC",
    expenseType: "Hotel",
    amount: 842,
    status: "Auto-Filed",
    confidence: 98,
  },
  {
    id: "R-10482",
    employee: "Mike Johnson",
    initials: "MJ",
    expenseType: "Hotel",
    amount: 412,
    status: "Needs Review",
    confidence: 74,
    exceptionId: "exc-mike-hotel",
  },
  {
    id: "R-10483",
    employee: "Priya Patel",
    initials: "PP",
    expenseType: "Meals",
    amount: 186,
    status: "Auto-Filed",
    confidence: 99,
  },
  {
    id: "R-10484",
    employee: "Anna Müller",
    initials: "AM",
    expenseType: "Airfare",
    amount: 1290,
    status: "Needs Review",
    confidence: 71,
    exceptionId: "exc-anna-airfare",
  },
  {
    id: "R-10485",
    employee: "Tom Becker",
    initials: "TB",
    expenseType: "Meals",
    amount: 240,
    status: "Needs Review",
    confidence: 76,
    exceptionId: "exc-tom-meals",
  },
  {
    id: "R-10486",
    employee: "David Park",
    initials: "DP",
    expenseType: "Taxi",
    amount: 58,
    status: "Auto-Filed",
    confidence: 99,
  },
  {
    id: "R-10487",
    employee: "Lena Vogt",
    initials: "LV",
    expenseType: "Hotel",
    amount: 523,
    status: "Auto-Filed",
    confidence: 97,
  },
  {
    id: "R-10488",
    employee: "Raj Singh",
    initials: "RS",
    expenseType: "Software",
    amount: 1100,
    status: "Auto-Filed",
    confidence: 96,
  },
];

export const exceptions: Exception[] = [
  {
    id: "exc-mike-hotel",
    employee: "Mike Johnson",
    initials: "MJ",
    type: "Hotel",
    amount: 412,
    amountLabel: "$412.00",
    location: "San Francisco, CA",
    date: "Mar 18, 2026",
    reportId: "ER-2026-10482",
    shortReason: "Hotel $87 over cap",
    policyOverage: "$87 above corporate cap",
    objectTitle: "Hotel Stay",
    aiHeadline: "Hotel exceeded policy by $87.",
    aiReasoning:
      "Conference block rates in downtown San Francisco exceeded the standard corporate cap during the event window. This is a known, time-bound rate spike.",
    precedentPct: 92,
    precedentBasis: { similarApprovals: 421, quarters: 14, businessUnits: 7 },
    recommendation: "Approve",
    confidence: 74,
    evidence: [
      { label: "Conference rate detected", ok: true },
      { label: "Preferred vendor used", ok: true },
      { label: "Receipt verified", ok: true },
      { label: "Manager approval history", ok: true },
      { label: "Travel booking matched", ok: true },
      { label: "Policy engine evaluated", ok: true },
    ],
  },
  {
    id: "exc-anna-airfare",
    employee: "Anna Müller",
    initials: "AM",
    type: "Airfare",
    amount: 1290,
    amountLabel: "$1,290.00",
    location: "Frankfurt → New York",
    date: "Mar 16, 2026",
    reportId: "ER-2026-10484",
    shortReason: "Fare class above policy",
    policyOverage: "Premium economy on a long-haul policy route",
    objectTitle: "International Airfare",
    aiHeadline: "Fare class one tier above policy.",
    aiReasoning:
      "Long-haul transatlantic policy permits economy. Premium economy was booked due to last-minute itinerary change after a client meeting was rescheduled. Trip length and meeting outcome support the upgrade.",
    precedentPct: 84,
    precedentBasis: { similarApprovals: 187, quarters: 12, businessUnits: 5 },
    recommendation: "Approve",
    confidence: 71,
    evidence: [
      { label: "Late re-booking detected", ok: true },
      { label: "Client meeting confirmed", ok: true },
      { label: "Receipt verified", ok: true },
      { label: "Preferred carrier used", ok: true },
      { label: "Fare difference within $180", ok: true },
      { label: "Policy engine evaluated", ok: true },
    ],
  },
  {
    id: "exc-tom-meals",
    employee: "Tom Becker",
    initials: "TB",
    type: "Meals",
    amount: 240,
    amountLabel: "$240.00",
    location: "Chicago, IL",
    date: "Mar 19, 2026",
    reportId: "ER-2026-10485",
    shortReason: "Over per-diem",
    policyOverage: "$95 over standard per-diem",
    objectTitle: "Client Dinner",
    aiHeadline: "Client dinner exceeded per-diem by $95.",
    aiReasoning:
      "Itemized receipt indicates a four-person business dinner including two external attendees from a strategic account. Calendar confirms the meeting. Per-attendee spend is within the client-entertainment guideline.",
    precedentPct: 88,
    precedentBasis: { similarApprovals: 308, quarters: 14, businessUnits: 9 },
    recommendation: "Approve",
    confidence: 76,
    evidence: [
      { label: "External attendees recorded", ok: true },
      { label: "Calendar match confirmed", ok: true },
      { label: "Itemized receipt verified", ok: true },
      { label: "Per-attendee spend in range", ok: true },
      { label: "Strategic account flagged", ok: true },
      { label: "Policy engine evaluated", ok: true },
    ],
  },
];

export type FinanceCard = {
  label: string;
  value: string;
  tone: "positive" | "warning" | "neutral";
  sub?: string;
};

export const financeCards: FinanceCard[] = [
  {
    label: "Potential Annual Savings",
    value: "$420K",
    tone: "positive",
    sub: "Identified by Concur Intelligence",
  },
  { label: "Policy Leakage", value: "2.3%", tone: "warning", sub: "of total reimbursed spend" },
  {
    label: "Top Exception Driver",
    value: "Hotel Overages",
    tone: "neutral",
    sub: "38% of all exceptions YTD",
  },
  {
    label: "Most Delayed Approver",
    value: "Sales Directors",
    tone: "neutral",
    sub: "Avg. 4.2 days to approve",
  },
];

export type Insight = {
  id: string;
  headline: string;
  recommendation: string;
  delta?: string;
};

export type PolicyChange = {
  id: string;
  title: string;
  current: string;
  recommended: string;
  expectedImpact: string;
  estimatedSavings: string;
  status: "Recommended" | "High Confidence";
};

export const policyChanges: PolicyChange[] = [
  {
    id: "pol-hotel-cap",
    title: "Hotel Cap Adjustment",
    current: "$250 / night",
    recommended: "$300 / night in conference cities",
    expectedImpact: "34% fewer exceptions",
    estimatedSavings: "120 manager review hours annually",
    status: "Recommended",
  },
  {
    id: "pol-vendor-adoption",
    title: "Preferred Vendor Adoption",
    current: "62%",
    recommended: "80%",
    expectedImpact: "Higher negotiated discount tier",
    estimatedSavings: "$180K annual savings",
    status: "High Confidence",
  },
];

export type Recommendation = {
  id: string;
  action: string;
  expectedImpact: string;
  confidence: "High" | "Medium";
  potentialSavings: string;
};

export const recommendations: Recommendation[] = [
  {
    id: "rec-hotel-policy",
    action: "Review hotel policy in conference-heavy markets.",
    expectedImpact: "Fewer routine exceptions in Q3",
    confidence: "High",
    potentialSavings: "$92K + 120 review hours",
  },
  {
    id: "rec-vendor-emea",
    action: "Increase preferred vendor adoption in EMEA.",
    expectedImpact: "+18 pts vendor compliance",
    confidence: "High",
    potentialSavings: "$180K annually",
  },
  {
    id: "rec-conf-policy",
    action: "Create conference-specific travel policies.",
    expectedImpact: "38% of exceptions removed at source",
    confidence: "High",
    potentialSavings: "$64K + 80 review hours",
  },
  {
    id: "rec-sales-bottleneck",
    action: "Investigate approval bottlenecks in Sales.",
    expectedImpact: "Cycle time 4.2d → 1.8d",
    confidence: "Medium",
    potentialSavings: "Faster reimbursement, lower DSO",
  },
];

export const insights: Insight[] = [
  {
    id: "ins-1",
    headline: "Hotel exceptions increased 12% this quarter.",
    recommendation: "Review hotel caps in major conference cities.",
    delta: "+12% QoQ",
  },
  {
    id: "ins-2",
    headline: "EMEA travel spend is trending above forecast.",
    recommendation: "Review vendor agreements.",
    delta: "+8% vs. plan",
  },
  {
    id: "ins-3",
    headline: "38% of policy exceptions originate from conference-related travel.",
    recommendation: "Create conference-specific policy rules.",
    delta: "38% share",
  },
];
