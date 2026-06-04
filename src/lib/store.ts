"use client";

import { create } from "zustand";
import { exceptions as allExceptions } from "./mock-data";

type ExceptionsState = {
  openExceptionIds: string[];
  selectedId: string | null;
  approvedIds: string[];
  needsReviewCount: () => number;
  select: (id: string) => void;
  approve: (id: string) => void;
  escalate: (id: string) => void;
  reset: () => void;
};

const initialIds = allExceptions.map((e) => e.id);

export const useExceptionsStore = create<ExceptionsState>((set, get) => ({
  openExceptionIds: initialIds,
  selectedId: initialIds[0] ?? null,
  approvedIds: [],
  needsReviewCount: () => get().openExceptionIds.length,
  select: (id) => set({ selectedId: id }),
  approve: (id) => {
    const remaining = get().openExceptionIds.filter((x) => x !== id);
    const nextSelected = remaining[0] ?? null;
    set({
      openExceptionIds: remaining,
      approvedIds: [...get().approvedIds, id],
      selectedId: nextSelected,
    });
  },
  escalate: (id) => {
    const remaining = get().openExceptionIds.filter((x) => x !== id);
    const nextSelected = remaining[0] ?? null;
    set({
      openExceptionIds: remaining,
      selectedId: nextSelected,
    });
  },
  reset: () =>
    set({
      openExceptionIds: initialIds,
      selectedId: initialIds[0] ?? null,
      approvedIds: [],
    }),
}));
