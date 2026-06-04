import { cn } from "@/lib/cn";

export function ConfidenceMeter({
  value,
  tone,
  className,
}: {
  value: number;
  tone: "positive" | "warning";
  className?: string;
}) {
  const bar =
    tone === "positive"
      ? "bg-fiori-positive"
      : "bg-fiori-warning-strong";
  const text =
    tone === "positive" ? "text-fiori-positive" : "text-fiori-warning";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="h-1.5 w-14 sm:w-20 rounded-full bg-[#EEF0F2] overflow-hidden">
        <div
          className={cn("h-full rounded-full", bar)}
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
      <span className={cn("text-[12px] font-semibold tnum", text)}>
        {value}%
      </span>
    </div>
  );
}
