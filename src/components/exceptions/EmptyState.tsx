"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function EmptyState() {
  return (
    <div className="flex-1 min-w-0 fiori-card flex flex-col items-center justify-center text-center px-8 py-16 fiori-fade-in">
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-fiori-positive-bg blur-xl opacity-60" />
        <span className="relative h-16 w-16 rounded-full bg-fiori-positive-bg flex items-center justify-center border-2 border-white shadow-[0_4px_12px_rgba(16,126,62,0.15)]">
          <CheckCircle2 className="h-9 w-9 text-fiori-positive" strokeWidth={2.2} />
        </span>
      </div>

      <h2 className="text-[24px] font-semibold text-fiori-text mt-5 leading-tight">
        All exceptions resolved.
      </h2>
      <p className="text-[15px] text-fiori-text-secondary mt-2.5 max-w-md leading-snug">
        <span className="font-semibold text-fiori-text tnum">42</span>{" "}
        reports processed.{" "}
        <span className="font-semibold text-fiori-blue tnum">Only 3</span>{" "}
        required human judgment.
      </p>

      <div className="mt-6 grid grid-cols-3 gap-4 max-w-md w-full">
        <Stat value="39" label="Auto-filed" />
        <Stat value="3" label="You decided" />
        <Stat value="18.4h" label="Time saved" />
      </div>

      <Link
        href="/dashboard"
        className="mt-6 inline-flex items-center gap-1.5 h-10 px-4 rounded-[6px] bg-fiori-blue text-white text-[13px] font-semibold hover:bg-fiori-blue-hover fiori-transition shadow-[0_1px_0_rgba(0,0,0,0.05)]"
      >
        Back to Operations Center
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[6px] border border-fiori-border bg-[#FAFBFC] py-3">
      <div className="text-[16px] font-semibold tnum text-fiori-text">
        {value}
      </div>
      <div className="text-[11px] uppercase tracking-wider text-fiori-text-muted font-semibold mt-0.5">
        {label}
      </div>
    </div>
  );
}
