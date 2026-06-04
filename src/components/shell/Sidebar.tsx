"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Receipt,
  Plane,
  CheckSquare,
  FileBarChart,
  LineChart,
} from "lucide-react";
import { cn } from "@/lib/cn";

type NavItem = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
};

const items: NavItem[] = [
  { label: "Expense", icon: Receipt, href: "/dashboard" },
  { label: "Finance Insights", icon: LineChart, href: "/finance" },
  { label: "Home", icon: Home },
  { label: "Travel", icon: Plane },
  { label: "Approvals", icon: CheckSquare },
  { label: "Reports", icon: FileBarChart },
];

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (item: NavItem) => {
    if (item.href === "/dashboard")
      return pathname === "/dashboard" || pathname.startsWith("/exceptions");
    if (item.href === "/finance") return pathname.startsWith("/finance");
    return false;
  };

  return (
    <aside className="w-[240px] shrink-0 bg-white border-r border-fiori-border flex flex-col">
      <div className="h-[50px] flex items-center gap-2.5 px-4 border-b border-fiori-border">
        <div className="h-7 w-7 rounded-[6px] bg-fiori-blue flex items-center justify-center text-white font-bold text-[13px] shadow-[0_1px_0_rgba(0,0,0,0.04)]">
          A
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-[13px] font-semibold text-fiori-text">
            Acme Corp
          </span>
          <span className="text-[10.5px] text-fiori-text-muted">
            Production
          </span>
        </div>
      </div>

      <nav className="flex-1 py-2">
        {items.map((item) => {
          const active = isActive(item);
          const content = (
            <div
              className={cn(
                "relative h-9 mx-2 px-2.5 rounded-[6px] flex items-center gap-2.5 text-[13px] fiori-transition cursor-pointer",
                active
                  ? "bg-fiori-blue-tint text-fiori-blue font-semibold"
                  : "text-fiori-text hover:bg-fiori-row-hover",
              )}
            >
              {active && (
                <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-r bg-fiori-blue" />
              )}
              <item.icon
                className={cn(
                  "h-[16px] w-[16px] shrink-0",
                  active ? "text-fiori-blue" : "text-fiori-text-secondary",
                )}
              />
              <span>{item.label}</span>
            </div>
          );

          return item.href ? (
            <Link href={item.href} key={item.label} className="block">
              {content}
            </Link>
          ) : (
            <div key={item.label}>{content}</div>
          );
        })}
      </nav>

      <div className="border-t border-fiori-border px-4 py-3">
        <div className="caption-label mb-1">Environment</div>
        <div className="text-[12px] text-fiori-text-secondary">
          PRD-EU10 · Build 16.2.7
        </div>
      </div>
    </aside>
  );
}
