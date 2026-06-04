import { HeroBanner } from "@/components/dashboard/HeroBanner";
import { KpiRow } from "@/components/dashboard/KpiRow";
import { ReportsTable } from "@/components/dashboard/ReportsTable";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-end justify-between gap-4 mb-1">
        <div>
          <div className="caption-label mb-1">Finance · Today</div>
          <h1 className="text-[22px] font-semibold text-fiori-text leading-tight">
            Expense Operations Center
          </h1>
          <p className="text-[13px] text-fiori-text-secondary mt-0.5">
            Trusted Autonomy Overview
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-8 px-3 rounded-[6px] border border-fiori-border bg-white text-[13px] text-fiori-text hover:bg-fiori-row-hover hover:text-fiori-blue fiori-transition">
            Period: Today
          </button>
          <button className="h-8 px-3 rounded-[6px] border border-fiori-border bg-white text-[13px] text-fiori-text hover:bg-fiori-row-hover hover:text-fiori-blue fiori-transition">
            Export
          </button>
        </div>
      </div>

      <HeroBanner />
      <KpiRow />
      <ReportsTable />
    </div>
  );
}
