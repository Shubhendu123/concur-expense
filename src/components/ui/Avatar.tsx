import { cn } from "@/lib/cn";

const palette = [
  "bg-[#E3F0FE] text-[#0064D9]",
  "bg-[#EBF5EB] text-[#0E6A36]",
  "bg-[#FEF2E0] text-[#A24B00]",
  "bg-[#F1ECFE] text-[#5D3DBE]",
  "bg-[#FCE7EE] text-[#A8174E]",
  "bg-[#E0F2F1] text-[#0A6C68]",
];

function pick(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return palette[h % palette.length];
}

export function Avatar({
  initials,
  size = 28,
  className,
  tone,
}: {
  initials: string;
  size?: number;
  className?: string;
  tone?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full font-semibold tnum",
        tone ?? pick(initials),
        className,
      )}
      style={{
        width: size,
        height: size,
        fontSize: Math.round(size * 0.4),
        letterSpacing: "0.02em",
      }}
    >
      {initials}
    </span>
  );
}
