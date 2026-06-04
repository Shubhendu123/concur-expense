"use client";

import { useEffect, useState } from "react";
import { Sparkles, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useExceptionsStore } from "@/lib/store";

const TOTAL = 42;
const AUTO = 39;

export function HeroBanner() {
  const needsReview = useExceptionsStore((s) => s.openExceptionIds.length);
  const completedNow = TOTAL - needsReview;
  const pct = Math.round((AUTO / TOTAL) * 100);
  const allClear = needsReview === 0;

  const [todayLabel, setTodayLabel] = useState("");
  useEffect(() => {
    setTodayLabel(
      new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
    );
  }, []);

  return (
    <div className="fiori-card relative overflow-hidden border-l-[4px] !border-l-fiori-blue">
      <div className="absolute inset-0 bg-fiori-blue-tint/55 pointer-events-none" />
      <div className="relative px-6 py-5 flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 rounded-[6px] bg-white border border-fiori-blue/20 px-2 py-1 text-[11px] font-semibold text-fiori-blue">
              <Sparkles className="h-3 w-3" />
              CONCUR INTELLIGENCE
            </span>
            <span
              className="caption-label !text-fiori-text-secondary"
              suppressHydrationWarning
            >
              Live{todayLabel ? ` · ${todayLabel}` : ""}
            </span>
          </div>
          <h1 className="text-[20px] md:text-[22px] font-semibold text-fiori-text leading-snug tracking-[-0.005em]">
            {AUTO} of {TOTAL} reports completed automatically — no human action required.
          </h1>
          <p className="mt-1.5 text-[13px] text-fiori-text-secondary">
            Concur assembled, validated, and posted these reports.{" "}
            {allClear ? (
              <span className="text-fiori-positive font-medium">
                Every report has been processed.
              </span>
            ) : (
              <>
                <span className="text-fiori-warning font-medium">
                  {needsReview} need{needsReview === 1 ? "s" : ""} your review.
                </span>
              </>
            )}
          </p>
        </div>

        <div className="flex items-center gap-5 md:border-l md:border-fiori-blue/20 md:pl-7">
          <div className="flex flex-col items-end">
            <div className="text-[34px] leading-none font-semibold text-fiori-blue tnum">
              {pct}%
            </div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-fiori-text-muted mt-1.5">
              Autonomy rate
            </div>
            <div className="mt-2 h-1.5 w-[160px] rounded-full bg-white/80 border border-fiori-blue/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-fiori-blue"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="text-[11px] text-fiori-text-secondary tnum mt-1">
              {AUTO} of {TOTAL} this period · {completedNow} processed today
            </div>
          </div>

          {!allClear ? (
            <Link
              href="/exceptions"
              className="inline-flex items-center gap-1.5 h-9 px-3 rounded-[6px] bg-fiori-blue text-white text-[13px] font-medium hover:bg-fiori-blue-hover fiori-transition shadow-[0_1px_0_rgba(0,0,0,0.05)]"
            >
              Review exceptions
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          ) : (
            <Link
              href="/finance"
              className="inline-flex items-center gap-1.5 h-9 px-3 rounded-[6px] bg-white border border-fiori-blue/30 text-fiori-blue text-[13px] font-medium hover:bg-fiori-blue-tint fiori-transition"
            >
              Open insights
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
