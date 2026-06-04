import { Lightbulb, TrendingUp, ArrowUpRight, Sparkles } from "lucide-react";
import { financeCards, insights } from "@/lib/mock-data";
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

      <section className="fiori-card overflow-hidden relative border-l-[4px] !border-l-fiori-blue">
        <div className="absolute inset-0 bg-fiori-blue-tint/55 pointer-events-none" />
        <div className="relative px-6 py-5 flex items-center gap-5">
          <span className="h-10 w-10 rounded-[8px] bg-white border border-fiori-blue/30 flex items-center justify-center shadow-[0_1px_0_rgba(0,0,0,0.05)]">
            <Sparkles className="h-5 w-5 text-fiori-blue" />
          </span>
          <div className="flex-1">
            <div className="caption-label !text-fiori-blue mb-0.5">
              Key insight
            </div>
            <p className="text-[18px] md:text-[20px] font-semibold text-fiori-text leading-snug tracking-[-0.005em]">
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
