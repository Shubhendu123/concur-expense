"use client";

import { useExceptionsStore } from "@/lib/store";
import { exceptions as allExceptions } from "@/lib/mock-data";
import { fmtCurrency } from "@/lib/format";
import { StatusChip } from "@/components/ui/StatusChip";
import { Avatar } from "@/components/ui/Avatar";
import { cn } from "@/lib/cn";
import { Inbox, CheckCircle2 } from "lucide-react";

export function QueueList() {
  const openIds = useExceptionsStore((s) => s.openExceptionIds);
  const selectedId = useExceptionsStore((s) => s.selectedId);
  const select = useExceptionsStore((s) => s.select);

  const queue = allExceptions.filter((e) => openIds.includes(e.id));

  return (
    <aside className="w-[320px] shrink-0 fiori-card overflow-hidden flex flex-col">
      <header className="px-4 pt-4 pb-3 border-b border-fiori-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Inbox className="h-3.5 w-3.5 text-fiori-text-secondary" />
            <h2 className="text-[13px] font-semibold text-fiori-text">
              Review Queue
            </h2>
          </div>
          <span className="text-[11px] font-semibold text-fiori-warning bg-fiori-warning-bg rounded-[6px] px-1.5 py-0.5 tnum">
            {queue.length} OPEN
          </span>
        </div>
        <p className="text-[12px] text-fiori-text-muted mt-1">
          Items below could not be auto-filed by policy engine.
        </p>
      </header>

      <div className="flex-1 overflow-y-auto fiori-scroll">
        {queue.length === 0 && (
          <div className="px-4 py-10 flex flex-col items-center text-center">
            <div className="h-10 w-10 rounded-full bg-fiori-positive-bg flex items-center justify-center">
              <CheckCircle2 className="h-5 w-5 text-fiori-positive" />
            </div>
            <p className="text-[13px] font-semibold text-fiori-text mt-3">
              Queue cleared
            </p>
            <p className="text-[12px] text-fiori-text-muted mt-1">
              No exceptions require review.
            </p>
          </div>
        )}

        {queue.map((e) => {
          const active = selectedId === e.id;
          return (
            <button
              key={e.id}
              onClick={() => select(e.id)}
              className={cn(
                "relative w-full text-left px-4 py-3 border-b border-fiori-border last:border-b-0 fiori-transition",
                active
                  ? "bg-fiori-blue-tint"
                  : "bg-white hover:bg-fiori-row-hover",
              )}
            >
              {active && (
                <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-fiori-blue" />
              )}
              <div className="flex items-start gap-2.5">
                <Avatar initials={e.initials} size={28} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={cn(
                        "text-[13px] font-semibold truncate",
                        active ? "text-fiori-blue" : "text-fiori-text",
                      )}
                    >
                      {e.employee}
                    </span>
                    <span className="text-[13px] font-semibold tnum text-fiori-text">
                      {fmtCurrency(e.amount)}
                    </span>
                  </div>
                  <div className="text-[12px] text-fiori-text-secondary mt-0.5">
                    {e.type} · {e.location.split(",")[0]}
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <StatusChip tone="warning">Policy Exception</StatusChip>
                    <span className="text-[11px] text-fiori-text-muted tnum">
                      Conf. {e.confidence}%
                    </span>
                  </div>
                  <div className="mt-1.5 text-[11.5px] text-fiori-warning font-medium">
                    {e.policyOverage}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <footer className="px-4 py-2.5 border-t border-fiori-border bg-[#FAFBFC]">
        <p className="text-[11px] text-fiori-text-muted leading-snug">
          Concur Intelligence routes exceptions by{" "}
          <span className="font-semibold text-fiori-text-secondary">
            policy risk
          </span>
          , not by submission time.
        </p>
      </footer>
    </aside>
  );
}
