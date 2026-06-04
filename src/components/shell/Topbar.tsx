"use client";

import { Bell, HelpCircle, LayoutGrid, Search } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { useExceptionsStore } from "@/lib/store";

export function Topbar() {
  const needsReview = useExceptionsStore((s) => s.openExceptionIds.length);

  return (
    <header className="h-[50px] shrink-0 bg-white border-b border-fiori-border flex items-center px-4 gap-3">
      <button
        aria-label="Menu"
        className="h-8 w-8 rounded-[6px] flex items-center justify-center text-fiori-text-secondary hover:bg-fiori-row-hover hover:text-fiori-blue fiori-transition"
      >
        <LayoutGrid className="h-4 w-4" />
      </button>
      <div className="flex items-center gap-1.5">
        <span className="text-[15px] font-semibold text-fiori-text">
          Concur Expense
        </span>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-[460px]">
          <Search className="h-3.5 w-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-fiori-text-muted" />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-8 pl-8 pr-3 rounded-[6px] border border-fiori-border bg-white text-[13px] placeholder:text-fiori-text-muted focus:outline-none focus:border-fiori-blue focus:ring-2 focus:ring-fiori-blue/10 fiori-transition"
          />
        </div>
      </div>

      <div className="flex items-center gap-1">
        <button
          aria-label="Notifications"
          className="relative h-8 w-8 rounded-[6px] flex items-center justify-center text-fiori-text-secondary hover:bg-fiori-row-hover hover:text-fiori-blue fiori-transition"
        >
          <Bell className="h-4 w-4" />
          {needsReview > 0 && (
            <span className="absolute -top-0.5 -right-0.5 h-4 min-w-4 px-1 rounded-full bg-fiori-warning-strong text-white text-[10px] font-semibold flex items-center justify-center tnum">
              {needsReview}
            </span>
          )}
        </button>
        <button
          aria-label="Help"
          className="h-8 w-8 rounded-[6px] flex items-center justify-center text-fiori-text-secondary hover:bg-fiori-row-hover hover:text-fiori-blue fiori-transition"
        >
          <HelpCircle className="h-4 w-4" />
        </button>
      </div>

      <div className="h-6 w-px bg-fiori-border mx-1" />

      <div className="flex items-center gap-2.5 pr-1">
        <Avatar initials="SJ" size={28} />
        <div className="flex flex-col leading-tight">
          <span className="text-[13px] font-semibold text-fiori-text">
            Sarah Johnson
          </span>
          <span className="text-[10.5px] text-fiori-text-muted">
            Finance Manager · Acme Corp
          </span>
        </div>
      </div>
    </header>
  );
}
