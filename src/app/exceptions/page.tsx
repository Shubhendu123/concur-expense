"use client";

import Link from "next/link";
import { useExceptionsStore } from "@/lib/store";
import { QueueList } from "@/components/exceptions/QueueList";
import { ExceptionDetail } from "@/components/exceptions/ExceptionDetail";
import { ArrowLeft, ChevronRight, Sparkles } from "lucide-react";

export default function ExceptionsPage() {
  const n = useExceptionsStore((s) => s.openExceptionIds.length);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <div className="flex items-center gap-1.5 text-[12px] text-fiori-text-muted mb-2">
          <Link href="/dashboard" className="hover:text-fiori-blue">
            Expense
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-fiori-text-secondary">Exceptions</span>
        </div>
        <div className="flex items-end justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              aria-label="Back to Operations Center"
              className="h-9 w-9 inline-flex items-center justify-center rounded-[6px] border border-fiori-border bg-white text-fiori-text-secondary hover:bg-fiori-row-hover hover:text-fiori-blue hover:border-fiori-blue/40 fiori-transition"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <div>
            <h1 className="text-[22px] font-semibold text-fiori-text leading-tight">
              Exception Intelligence Workspace
            </h1>
            <p className="text-[13px] text-fiori-text-secondary mt-0.5">
              {n > 0 ? (
                <>
                  Only{" "}
                  <span className="font-semibold text-fiori-text tnum">{n}</span>{" "}
                  report{n === 1 ? "" : "s"} require human review.
                </>
              ) : (
                <span className="text-fiori-positive font-medium">
                  All reports processed. No human review required.
                </span>
              )}
            </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/dashboard"
              className="h-9 px-3 inline-flex items-center gap-1.5 rounded-[6px] border border-fiori-border bg-white text-[13px] font-medium text-fiori-text hover:bg-fiori-row-hover hover:text-fiori-blue hover:border-fiori-blue/40 fiori-transition"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Dashboard
            </Link>
            <span className="inline-flex items-center gap-1.5 rounded-[6px] bg-white border border-fiori-blue/25 px-2 py-1 text-[11px] font-semibold text-fiori-blue">
              <Sparkles className="h-3 w-3" />
              CONCUR INTELLIGENCE · ACTIVE
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-4 items-start">
        <QueueList />
        <ExceptionDetail />
      </div>
    </div>
  );
}
