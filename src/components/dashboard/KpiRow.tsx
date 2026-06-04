"use client";

import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useExceptionsStore } from "@/lib/store";
import { cn } from "@/lib/cn";

type Tile = {
  label: string;
  value: string | number;
  tone?: "neutral" | "positive" | "warning";
  delta?: { dir: "up" | "down"; label: string; tone: "positive" | "warning" | "muted" };
  sub?: string;
};

export function KpiRow() {
  const needsReview = useExceptionsStore((s) => s.openExceptionIds.length);

  const tiles: Tile[] = [
    {
      label: "Reports Processed Today",
      value: 42,
      tone: "neutral",
      delta: { dir: "up", label: "+18% vs. avg.", tone: "muted" },
      sub: "Across 12 cost centers",
    },
    {
      label: "Auto-Filed",
      value: 39,
      tone: "positive",
      delta: { dir: "up", label: "92.9% rate", tone: "positive" },
      sub: "No human action required",
    },
    {
      label: "Needs Review",
      value: needsReview,
      tone: "warning",
      delta:
        needsReview > 0
          ? { dir: "down", label: "Policy exceptions", tone: "warning" }
          : { dir: "up", label: "Queue cleared", tone: "positive" },
      sub: needsReview === 0 ? "All exceptions resolved" : "Awaiting your decision",
    },
    {
      label: "Hours Saved",
      value: "18.4",
      tone: "neutral",
      delta: { dir: "up", label: "+2.1h vs. yesterday", tone: "positive" },
      sub: "Manager + employee time",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {tiles.map((t) => (
        <KpiTile key={t.label} tile={t} />
      ))}
    </div>
  );
}

function KpiTile({ tile }: { tile: Tile }) {
  const valueColor =
    tile.tone === "positive"
      ? "text-fiori-positive"
      : tile.tone === "warning"
        ? "text-fiori-warning"
        : "text-fiori-text";

  const deltaTone =
    tile.delta?.tone === "positive"
      ? "text-fiori-positive"
      : tile.delta?.tone === "warning"
        ? "text-fiori-warning"
        : "text-fiori-text-muted";

  return (
    <div className="fiori-card px-4 py-3.5">
      <div className="caption-label">{tile.label}</div>
      <div className="mt-1.5 flex items-baseline gap-2">
        <div className={cn("text-[30px] leading-none font-semibold tnum", valueColor)}>
          {tile.value}
        </div>
        {tile.delta && (
          <div className={cn("flex items-center gap-0.5 text-[12px] font-medium", deltaTone)}>
            {tile.delta.dir === "up" ? (
              <ArrowUpRight className="h-3 w-3" />
            ) : (
              <ArrowDownRight className="h-3 w-3" />
            )}
            {tile.delta.label}
          </div>
        )}
      </div>
      {tile.sub && (
        <div className="mt-1.5 text-[12px] text-fiori-text-muted">{tile.sub}</div>
      )}
    </div>
  );
}
