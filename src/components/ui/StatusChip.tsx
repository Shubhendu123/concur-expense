import { cn } from "@/lib/cn";

type Tone = "positive" | "warning" | "negative" | "info" | "neutral";

const toneStyles: Record<Tone, { wrap: string; dot: string }> = {
  positive: {
    wrap: "bg-fiori-positive-bg text-fiori-positive",
    dot: "bg-fiori-positive",
  },
  warning: {
    wrap: "bg-fiori-warning-bg text-fiori-warning",
    dot: "bg-fiori-warning-strong",
  },
  negative: {
    wrap: "bg-fiori-negative-bg text-fiori-negative",
    dot: "bg-fiori-negative",
  },
  info: {
    wrap: "bg-fiori-blue-tint text-fiori-blue",
    dot: "bg-fiori-blue",
  },
  neutral: {
    wrap: "bg-[#EEF0F2] text-fiori-text-secondary",
    dot: "bg-fiori-text-muted",
  },
};

export function StatusChip({
  tone,
  children,
  className,
}: {
  tone: Tone;
  children: React.ReactNode;
  className?: string;
}) {
  const s = toneStyles[tone];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[6px] px-2 py-[3px] text-[12px] font-medium leading-none",
        s.wrap,
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", s.dot)} />
      <span className="leading-none">{children}</span>
    </span>
  );
}
