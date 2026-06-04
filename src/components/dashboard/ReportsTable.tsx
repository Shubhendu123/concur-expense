"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown, Filter, Eye, ChevronRight } from "lucide-react";
import { reports } from "@/lib/mock-data";
import { fmtCurrency } from "@/lib/format";
import { StatusChip } from "@/components/ui/StatusChip";
import { Avatar } from "@/components/ui/Avatar";
import { ConfidenceMeter } from "@/components/ui/ConfidenceMeter";
import { useExceptionsStore } from "@/lib/store";

export function ReportsTable() {
  const select = useExceptionsStore((s) => s.select);
  const router = useRouter();

  const goReview = (exceptionId?: string) => {
    if (exceptionId) select(exceptionId);
    router.push("/exceptions");
  };

  return (
    <section className="fiori-card overflow-hidden">
      <header className="px-5 pt-4 pb-3 flex items-center justify-between border-b border-fiori-border">
        <div>
          <h2 className="text-[16px] font-semibold text-fiori-text">
            Recent Reports
          </h2>
          <p className="text-[12px] text-fiori-text-muted">
            Confidence indicates why each report auto-filed or routed for review.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-8 px-2.5 inline-flex items-center gap-1.5 text-[12.5px] text-fiori-text-secondary border border-fiori-border rounded-[6px] hover:bg-fiori-row-hover hover:text-fiori-blue fiori-transition">
            <Filter className="h-3.5 w-3.5" />
            All employees
            <ChevronDown className="h-3 w-3" />
          </button>
          <button className="h-8 px-2.5 inline-flex items-center gap-1.5 text-[12.5px] text-fiori-text-secondary border border-fiori-border rounded-[6px] hover:bg-fiori-row-hover hover:text-fiori-blue fiori-transition">
            Today
            <ChevronDown className="h-3 w-3" />
          </button>
        </div>
      </header>

      <div className="overflow-x-auto">
        <table className="w-full text-[13px] table-fixed">
          <colgroup>
            <col style={{ width: "26%" }} />
            <col style={{ width: "14%" }} />
            <col style={{ width: "12%" }} />
            <col style={{ width: "14%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "14%" }} />
          </colgroup>
          <thead>
            <tr className="bg-[#F5F6F7] border-b border-fiori-border">
              <Th>Employee</Th>
              <Th>Expense Type</Th>
              <Th className="text-right">Amount</Th>
              <Th>Status</Th>
              <Th>Confidence</Th>
              <Th className="text-right pr-5">Action</Th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r) => {
              const isException = r.status === "Needs Review";
              return (
                <tr
                  key={r.id}
                  className="border-b border-fiori-border last:border-b-0 hover:bg-fiori-row-hover fiori-transition"
                >
                  <td className="h-[44px] px-5">
                    <div className="flex items-center gap-2.5">
                      <Avatar initials={r.initials} size={26} />
                      <div className="flex flex-col leading-tight">
                        <span className="font-medium text-fiori-text">
                          {r.employee}
                        </span>
                        <span className="text-[11.5px] text-fiori-text-muted tnum">
                          {r.id}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 text-fiori-text-secondary">
                    {r.expenseType}
                  </td>
                  <td className="px-3 text-right font-semibold text-fiori-text tnum">
                    {fmtCurrency(r.amount)}
                  </td>
                  <td className="px-3">
                    <StatusChip tone={isException ? "warning" : "positive"}>
                      {r.status}
                    </StatusChip>
                  </td>
                  <td className="px-3">
                    <ConfidenceMeter
                      value={r.confidence}
                      tone={isException ? "warning" : "positive"}
                    />
                  </td>
                  <td className="px-3 pr-5 text-right whitespace-nowrap">
                    {isException ? (
                      <button
                        type="button"
                        onClick={() => goReview(r.exceptionId)}
                        className="inline-flex items-center gap-1 h-7 px-3 rounded-[6px] bg-fiori-blue text-white text-[12.5px] font-semibold hover:bg-fiori-blue-hover fiori-transition cursor-pointer"
                      >
                        Review
                        <ChevronRight className="h-3 w-3" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 h-7 px-2 rounded-[6px] text-fiori-text-secondary text-[12.5px] hover:bg-fiori-row-hover hover:text-fiori-blue fiori-transition cursor-pointer"
                      >
                        <Eye className="h-3 w-3" />
                        View
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <footer className="px-5 py-2.5 border-t border-fiori-border bg-[#FAFBFC] flex items-center justify-between text-[12px] text-fiori-text-muted">
        <span>
          Showing 8 of <span className="tnum text-fiori-text-secondary">42</span> reports
          processed today
        </span>
        <Link
          href="/exceptions"
          className="text-fiori-blue font-medium hover:underline"
        >
          View all reports
        </Link>
      </footer>
    </section>
  );
}

function Th({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <th
      className={
        "h-9 px-3 first:pl-5 text-left text-[11px] font-semibold uppercase tracking-wider text-fiori-text-muted " +
        (className ?? "")
      }
    >
      {children}
    </th>
  );
}
