import { Sparkles, ShieldCheck } from "lucide-react";
import type { Exception } from "@/lib/mock-data";

export function AiExplanationCard({ ex }: { ex: Exception }) {
  return (
    <section className="fiori-card overflow-hidden border-l-[4px] !border-l-fiori-blue">
      <header className="px-5 py-3 bg-fiori-blue-tint/60 border-b border-fiori-blue/15 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-[6px] bg-white border border-fiori-blue/25 flex items-center justify-center">
            <Sparkles className="h-3.5 w-3.5 text-fiori-blue" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-[12.5px] font-semibold text-fiori-blue">
              Concur Intelligence · Recommendation
            </span>
            <span className="text-[11px] text-fiori-text-secondary">
              Reasoning generated from policy, history, and transaction signals
            </span>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-[6px] bg-fiori-positive-bg text-fiori-positive text-[12px] font-semibold px-2 py-1">
          <ShieldCheck className="h-3.5 w-3.5" />
          Recommended: {ex.recommendation}
        </span>
      </header>

      <div className="p-5 flex flex-col lg:flex-row gap-6 lg:items-stretch">
        <div className="flex-1 min-w-0">
          <h3 className="text-[18px] font-semibold text-fiori-text leading-snug">
            {ex.aiHeadline}
          </h3>
          <p className="mt-2 text-[13.5px] text-fiori-text-secondary leading-relaxed">
            {ex.aiReasoning}
          </p>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <Stat label="Policy overage" value={ex.policyOverage} tone="warning" />
            <Stat label="Recommendation confidence" value={"High"} tone="positive" />
            <Stat label="Match basis" value="14-quarter window" tone="muted" />
          </div>
        </div>

        <div className="lg:w-[240px] flex flex-col items-center bg-[#FAFBFC] border border-fiori-border rounded-[8px] p-4">
          <Ring pct={ex.precedentPct} />
          <p className="mt-3 text-center text-[12.5px] text-fiori-text-secondary leading-snug">
            of similar exceptions
            <br />
            were approved
          </p>
          <p className="mt-2 text-[11px] uppercase tracking-wider text-fiori-text-muted font-semibold">
            Precedent · {ex.precedentPct >= 90 ? "Strong" : "Moderate"}
          </p>

          <div className="mt-3 pt-3 w-full border-t border-fiori-border">
            <p className="text-[10.5px] uppercase tracking-[0.06em] font-semibold text-fiori-text-muted text-center">
              Why {ex.precedentPct}%?
            </p>
            <ul className="mt-1.5 space-y-0.5 text-[11px] text-fiori-text-secondary leading-snug">
              <li className="flex items-baseline justify-between gap-2">
                <span>Similar approvals</span>
                <span className="tnum font-semibold text-fiori-text">
                  {ex.precedentBasis.similarApprovals.toLocaleString()}
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Quarters of history</span>
                <span className="tnum font-semibold text-fiori-text">
                  {ex.precedentBasis.quarters}
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Business units</span>
                <span className="tnum font-semibold text-fiori-text">
                  {ex.precedentBasis.businessUnits}
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Policy engine</span>
                <span className="font-semibold text-fiori-positive">
                  Validated
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "warning" | "positive" | "muted";
}) {
  const c =
    tone === "warning"
      ? "text-fiori-warning"
      : tone === "positive"
        ? "text-fiori-positive"
        : "text-fiori-text";
  return (
    <div className="flex flex-col gap-0.5">
      <span className="caption-label">{label}</span>
      <span className={`text-[13px] font-semibold ${c} leading-tight`}>
        {value}
      </span>
    </div>
  );
}

function Ring({ pct }: { pct: number }) {
  const r = 36;
  const c = 2 * Math.PI * r;
  const dash = (pct / 100) * c;
  return (
    <div className="relative h-[96px] w-[96px]">
      <svg viewBox="0 0 96 96" className="h-full w-full -rotate-90">
        <circle
          cx="48"
          cy="48"
          r={r}
          fill="none"
          stroke="#E5E6E8"
          strokeWidth="7"
        />
        <circle
          cx="48"
          cy="48"
          r={r}
          fill="none"
          stroke="#107E3E"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${c - dash}`}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[24px] font-semibold tnum text-fiori-text">
          {pct}%
        </span>
      </div>
    </div>
  );
}
