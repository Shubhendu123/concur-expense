"use client";

import { cn } from "@/lib/cn";
import * as React from "react";

type Variant = "primary" | "secondary" | "ghost" | "transparent" | "link";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-1.5 rounded-[6px] font-medium leading-none fiori-transition focus:outline-none focus-visible:ring-2 focus-visible:ring-fiori-blue/30 disabled:opacity-50 disabled:cursor-not-allowed select-none whitespace-nowrap";

const sizes: Record<Size, string> = {
  sm: "h-7 px-2.5 text-[12px]",
  md: "h-8 px-3 text-[13px]",
  lg: "h-10 px-4 text-[14px]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-fiori-blue text-white hover:bg-fiori-blue-hover active:bg-fiori-blue-hover shadow-[0_1px_0_rgba(0,0,0,0.04)]",
  secondary:
    "bg-white text-fiori-text border border-fiori-border-strong hover:bg-fiori-row-hover hover:border-fiori-blue/40 hover:text-fiori-blue",
  ghost:
    "bg-transparent text-fiori-text hover:bg-fiori-row-hover hover:text-fiori-blue",
  transparent:
    "bg-transparent text-fiori-blue hover:bg-fiori-blue-tint",
  link: "bg-transparent text-fiori-blue hover:underline px-0 h-auto",
};

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export const FButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = "secondary", size = "md", ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(base, sizes[size], variants[variant], className)}
        {...rest}
      />
    );
  },
);
FButton.displayName = "FButton";
