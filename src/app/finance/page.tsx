import {
  Lightbulb,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  CircleDot,
  CheckCircle2,
} from "lucide-react";
import {
  financeCards,
  insights,
  policyChanges,
  recommendations,
} from "@/lib/mock-data";
import { cn } from "@/lib/cn";

export default function FinancePage() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-end justify-between gap-3">
        <div>
          <div className="caption-label mb-1">Finance · Strategic</div>
          <h1 className="text-[22px] font-semibold text-fiori-text leading-tight">
            Finance Intelligence
          </h1>
          <p className="text-[13px] text-fiori-text-secondary mt-0.5">
            Insights generated from expense behavior.
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-[6px] bg-white border border-fiori-blue/25 px-2 py-1 text-[11px] font-semibold text-fiori-blue">
          <Sparkles className="h-3 w-3" />
          UPDATED HOURLY
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {financeCards.map((c) => (
          <FinanceCard key={c.label} {...c} />
        ))}
      </div>

      <section className="fiori-card overflow-hidden">
        <header className="px-5 pt-4 pb-3 border-b border-fiori-border flex items-center justify-between">
          <div>
            <h2 className="text-[16px] font-semibold text-fiori-text">
              Insights
            </h2>
            <p className="text-[12px] text-fiori-text-muted">
              Patterns Concur Intelligence surfaced from this quarter&apos;s expense data.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[12px] text-fiori-text-secondary">
            <TrendingUp className="h-3.5 w-3.5 text-fiori-blue" />3 active
            recommendations
          </span>
        </header>
        <div className="divide-y divide-fiori-border">
          {insights.map((ins) => (
            <article
              key={ins.id}
              className="px-5 py-4 flex items-start gap-4 hover:bg-fiori-row-hover fiori-transition"
            >
              <span className="h-9 w-9 shrink-0 rounded-[6px] bg-fiori-warning-bg flex items-center justify-center">
                <Lightbulb className="h-4 w-4 text-fiori-warning-strong" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="caption-label">Insight</span>
                  {ins.delta && (
                    <span className="text-[11px] font-semibold text-fiori-warning bg-fiori-warning-bg px-1.5 py-0.5 rounded-[6px] tnum">
                      {ins.delta}
                    </span>
                  )}
                </div>
                <h3 className="text-[14px] font-semibold text-fiori-text leading-snug">
                  {ins.headline}
                </h3>
                <p className="mt-1 text-[12.5px] text-fiori-text-secondary">
                  <span className="font-semibold text-fiori-text">
                    Recommendation:
                  </span>{" "}
                  {ins.recommendation}
                </p>
              </div>
              <button className="inline-flex items-center gap-1 h-8 px-3 rounded-[6px] text-[12.5px] font-medium text-fiori-blue hover:bg-fiori-blue-tint fiori-transition">
                Act
                <ArrowUpRight className="h-3 w-3" />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between mb-2.5 px-1">
          <div>
            <h2 className="text-[16px] font-semibold text-fiori-text leading-tight">
              Recommended Policy Changes
            </h2>
            <p className="text-[12px] text-fiori-text-muted mt-0.5">
              Concrete adjustments derived from this quarter&apos;s exception
              data.
            </p>
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-fiori-text-muted">
            {policyChanges.length} ready for review
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {policyChanges.map((p) => (
            <PolicyChangeCard key={p.id} {...p} />
          ))}
        </div>
      </section>

      <section className="fiori-card overflow-hidden">
        <header className="px-5 pt-4 pb-3 border-b border-fiori-border flex items-center justify-between">
          <div>
            <h2 className="text-[16px] font-semibold text-fiori-text">
              Concur Intelligence Recommendations
            </h2>
            <p className="text-[12px] text-fiori-text-muted">
              Proactive actions, ranked by expected financial impact.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[12px] text-fiori-text-secondary">
            <Sparkles className="h-3.5 w-3.5 text-fiori-blue" />
            {recommendations.length} actions identified
          </span>
        </header>

        <div className="hidden md:grid grid-cols-12 gap-3 px-5 py-2 bg-[#F5F6F7] border-b border-fiori-border">
          <ColHead className="col-span-5">Recommended action</ColHead>
          <ColHead className="col-span-3">Expected impact</ColHead>
          <ColHead className="col-span-2">Confidence</ColHead>
          <ColHead className="col-span-2 text-right">Potential savings</ColHead>
        </div>

        <ul className="divide-y divide-fiori-border">
          {recommendations.map((r) => (
            <li
              key={r.id}
              className="px-5 py-3.5 grid grid-cols-1 md:grid-cols-12 gap-3 hover:bg-fiori-row-hover fiori-transition"
            >
              <div className="md:col-span-5 flex items-start gap-2.5">
                <span className="h-6 w-6 shrink-0 rounded-full bg-fiori-blue-tint flex items-center justify-center mt-0.5">
                  <CircleDot className="h-3 w-3 text-fiori-blue" />
                </span>
                <span className="text-[13.5px] font-medium text-fiori-text leading-snug">
                  {r.action}
                </span>
              </div>
              <div className="md:col-span-3 text-[12.5px] text-fiori-text-secondary leading-snug">
                {r.expectedImpact}
              </div>
              <div className="md:col-span-2">
                <ConfidencePill level={r.confidence} />
              </div>
              <div className="md:col-span-2 text-[12.5px] font-semibold text-fiori-positive md:text-right leading-snug">
                {r.potentialSavings}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="fiori-card overflow-hidden relative border-l-[4px] !border-l-fiori-blue">
        <div className="absolute inset-0 bg-fiori-blue-tint/55 pointer-events-none" />
        <div className="relative px-6 py-6 flex items-center gap-5">
          <span className="h-12 w-12 rounded-[8px] bg-white border border-fiori-blue/30 flex items-center justify-center shadow-[0_1px_0_rgba(0,0,0,0.05)]">
            <Sparkles className="h-6 w-6 text-fiori-blue" />
          </span>
          <div className="flex-1">
            <div className="caption-label !text-fiori-blue mb-1">
              Strategic insight
            </div>
            <p className="text-[20px] md:text-[22px] font-semibold text-fiori-text leading-snug tracking-[-0.005em]">
              Expense automation saves minutes.{" "}
              <span className="text-fiori-blue">
                Spend intelligence saves millions.
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function FinanceCard({
  label,
  value,
  tone,
  sub,
}: {
  label: string;
  value: string;
  tone: "positive" | "warning" | "neutral";
  sub?: string;
}) {
  const valueClass =
    tone === "positive"
      ? "text-fiori-positive"
      : tone === "warning"
        ? "text-fiori-warning"
        : "text-fiori-text";

  return (
    <div className="fiori-card px-4 py-3.5">
      <div className="caption-label">{label}</div>
      <div
        className={cn(
          "mt-1.5 text-[30px] leading-none font-semibold tnum",
          valueClass,
        )}
      >
        {value}
      </div>
      {sub && (
        <div className="mt-1.5 text-[12px] text-fiori-text-muted">{sub}</div>
      )}
    </div>
  );
}

function PolicyChangeCard({
  title,
  current,
  recommended,
  expectedImpact,
  estimatedSavings,
  status,
}: {
  title: string;
  current: string;
  recommended: string;
  expectedImpact: string;
  estimatedSavings: string;
  status: "Recommended" | "High Confidence";
}) {
  const statusStyle =
    status === "High Confidence"
      ? "bg-fiori-positive-bg text-fiori-positive"
      : "bg-fiori-blue-tint text-fiori-blue";

  return (
    <article className="fiori-card p-5 flex flex-col gap-4">
      <header className="flex items-start justify-between gap-3">
        <h3 className="text-[15px] font-semibold text-fiori-text leading-snug">
          {title}
        </h3>
        <span
          className={cn(
            "inline-flex items-center gap-1 rounded-[6px] px-2 py-1 text-[11px] font-semibold",
            statusStyle,
          )}
        >
          {status === "High Confidence" && <CheckCircle2 className="h-3 w-3" />}
          {status}
        </span>
      </header>

      <div className="grid grid-cols-2 gap-3">
        <Field label="Current" value={current} tone="muted" />
        <Field label="Recommended" value={recommended} tone="emphasis" />
      </div>

      <div className="grid grid-cols-2 gap-3 border-t border-fiori-border pt-3">
        <Field label="Expected impact" value={expectedImpact} tone="muted" />
        <Field
          label="Estimated savings"
          value={estimatedSavings}
          tone="positive"
        />
      </div>
    </article>
  );
}

function Field({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "muted" | "emphasis" | "positive";
}) {
  const valueClass =
    tone === "positive"
      ? "text-fiori-positive"
      : tone === "emphasis"
        ? "text-fiori-blue"
        : "text-fiori-text";
  const weight = tone === "muted" ? "font-medium" : "font-semibold";
  return (
    <div className="flex flex-col gap-0.5">
      <span className="caption-label">{label}</span>
      <span className={cn("text-[13.5px] leading-tight", weight, valueClass)}>
        {value}
      </span>
    </div>
  );
}

function ColHead({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "text-[11px] font-semibold uppercase tracking-wider text-fiori-text-muted",
        className,
      )}
    >
      {children}
    </div>
  );
}

function ConfidencePill({ level }: { level: "High" | "Medium" }) {
  const cls =
    level === "High"
      ? "bg-fiori-positive-bg text-fiori-positive"
      : "bg-fiori-warning-bg text-fiori-warning";
  const dot =
    level === "High" ? "bg-fiori-positive" : "bg-fiori-warning-strong";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[6px] px-2 py-1 text-[12px] font-semibold leading-none",
        cls,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", dot)} />
      {level}
    </span>
  );
}
