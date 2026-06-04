"use client";

import { Check, ArrowUpRight, MessageSquare, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import type { Exception } from "@/lib/mock-data";
import { useExceptionsStore } from "@/lib/store";

export function DecisionPanel({ ex }: { ex: Exception }) {
  const approve = useExceptionsStore((s) => s.approve);
  const escalate = useExceptionsStore((s) => s.escalate);

  const onApprove = () => {
    approve(ex.id);
    toast.success("Report approved · posted to finance", {
      description: `${ex.employee} · ${ex.objectTitle} · ${ex.amountLabel}`,
    });
  };

  const onEscalate = () => {
    escalate(ex.id);
    toast.success("Routed to senior approver", {
      description: `${ex.employee} · escalated for second review`,
    });
  };

  const onClarify = () => {
    toast.success("Clarification requested from " + ex.employee, {
      description: "Concur will follow up automatically.",
    });
  };

  return (
    <section className="fiori-card p-5">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="h-8 w-8 rounded-[6px] bg-fiori-positive-bg flex items-center justify-center">
            <ShieldCheck className="h-4 w-4 text-fiori-positive" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-[13px] font-semibold text-fiori-text">
              Ready for your decision
            </span>
            <span className="text-[12px] text-fiori-text-muted">
              Concur recommends:{" "}
              <span className="font-semibold text-fiori-positive">
                {ex.recommendation}
              </span>{" "}
              · {ex.precedentPct}% precedent
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onClarify}
            className="h-10 px-3.5 inline-flex items-center gap-1.5 rounded-[6px] text-[13px] font-medium text-fiori-text-secondary hover:bg-fiori-row-hover hover:text-fiori-blue fiori-transition"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            Request Clarification
          </button>
          <button
            onClick={onEscalate}
            className="h-10 px-3.5 inline-flex items-center gap-1.5 rounded-[6px] border border-fiori-border bg-white text-[13px] font-medium text-fiori-text hover:border-fiori-blue/40 hover:text-fiori-blue hover:bg-fiori-row-hover fiori-transition"
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
            Escalate
          </button>
          <button
            onClick={onApprove}
            className="h-10 px-5 inline-flex items-center gap-2 rounded-[6px] bg-fiori-blue text-white text-[14px] font-semibold hover:bg-fiori-blue-hover fiori-transition shadow-[0_1px_0_rgba(0,0,0,0.05)]"
          >
            <Check className="h-4 w-4" strokeWidth={3} />
            Approve · {ex.amountLabel}
          </button>
        </div>
      </div>

      <p className="mt-3.5 pt-3 border-t border-fiori-border text-[11.5px] text-fiori-text-muted leading-snug">
        Decision generated using transaction data, booking context, policy
        rules, and historical approval patterns. Concur records the decision
        and posts to finance instantly on approval.
      </p>
    </section>
  );
}
