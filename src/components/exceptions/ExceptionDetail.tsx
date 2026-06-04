"use client";

import { MapPin, Calendar, Hash, User2 } from "lucide-react";
import { exceptions as allExceptions } from "@/lib/mock-data";
import { useExceptionsStore } from "@/lib/store";
import { StatusChip } from "@/components/ui/StatusChip";
import { Avatar } from "@/components/ui/Avatar";
import { AiExplanationCard } from "./AiExplanationCard";
import { EvidenceGrid } from "./EvidenceGrid";
import { DecisionPanel } from "./DecisionPanel";
import { EmptyState } from "./EmptyState";

export function ExceptionDetail() {
  const selectedId = useExceptionsStore((s) => s.selectedId);
  const openIds = useExceptionsStore((s) => s.openExceptionIds);
  const ex = allExceptions.find((e) => e.id === selectedId) ?? null;

  if (!ex || openIds.length === 0) {
    return <EmptyState />;
  }

  return (
    <div key={ex.id} className="flex-1 min-w-0 flex flex-col gap-4 fiori-fade-in">
      <ObjectHeader ex={ex} />
      <AiExplanationCard ex={ex} />
      <EvidenceGrid items={ex.evidence} />
      <DecisionPanel ex={ex} />
    </div>
  );
}

function ObjectHeader({ ex }: { ex: (typeof allExceptions)[number] }) {
  return (
    <section className="fiori-card px-5 py-4">
      <div className="flex items-start gap-4">
        <Avatar initials={ex.initials} size={42} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="caption-label">{ex.type}</span>
            <span className="text-fiori-text-muted text-[11px]">·</span>
            <span className="caption-label">{ex.reportId}</span>
          </div>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h1 className="text-[22px] font-semibold text-fiori-text leading-tight">
              {ex.objectTitle}
            </h1>
            <span className="text-[20px] font-semibold tnum text-fiori-text">
              {ex.amountLabel}
            </span>
            <StatusChip tone="warning">Policy Exception</StatusChip>
          </div>
          <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[12.5px] text-fiori-text-secondary">
            <Meta icon={User2} label="Employee" value={ex.employee} />
            <Meta icon={MapPin} label="Location" value={ex.location} />
            <Meta icon={Calendar} label="Date" value={ex.date} />
            <Meta icon={Hash} label="Report" value={ex.reportId} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Meta({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <Icon className="h-3.5 w-3.5 text-fiori-text-muted" />
      <span className="text-fiori-text-muted">{label}:</span>
      <span className="font-medium text-fiori-text">{value}</span>
    </span>
  );
}
