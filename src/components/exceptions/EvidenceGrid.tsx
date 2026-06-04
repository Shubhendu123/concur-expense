import { Check } from "lucide-react";
import type { EvidenceItem } from "@/lib/mock-data";

export function EvidenceGrid({ items }: { items: EvidenceItem[] }) {
  return (
    <section className="fiori-card p-5">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-[15px] font-semibold text-fiori-text">
            Supporting Evidence
          </h3>
          <p className="text-[12px] text-fiori-text-muted">
            Signals Concur used to form its recommendation
          </p>
        </div>
        <span className="text-[11px] font-semibold tnum uppercase tracking-wider text-fiori-positive bg-fiori-positive-bg rounded-[6px] px-2 py-1">
          {items.length} / {items.length} verified
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
        {items.map((it) => (
          <div
            key={it.label}
            className="flex items-center gap-2 px-3 py-2.5 rounded-[6px] border border-fiori-border bg-[#FAFBFC]"
          >
            <span className="h-5 w-5 shrink-0 rounded-full bg-fiori-positive-bg flex items-center justify-center">
              <Check className="h-3 w-3 text-fiori-positive" strokeWidth={3} />
            </span>
            <span className="text-[12.5px] text-fiori-text leading-tight">
              {it.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
