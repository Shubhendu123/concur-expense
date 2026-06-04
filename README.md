# Concur Expense — Vision Prototype

A clickable, front-end-only prototype exploring what expense management looks like when routine reports file themselves and humans govern only the exceptions.

**Live demo →** https://concur-expense.vercel.app

## The idea

Most expense tools are systems of record: someone submits, someone approves, work moves through a queue. This prototype reframes the product as a system of **trusted autonomy** — Concur Intelligence assembles, validates, and posts the routine reports on its own, then surfaces only the exceptions a human actually needs to judge. Every recommendation comes with transparent reasoning: why it auto-filed, what evidence supports it, and what precedent exists for similar cases.

It is not a chatbot or copilot. It is autonomous decision-support with a visible audit trail.

## What's in it

- **Expense Operations Center** (`/dashboard`) — autonomy hero, KPIs, recent reports table with confidence meters.
- **Exception Intelligence Workspace** (`/exceptions`) — the hero screen. A queue of items the engine could not auto-file, each with an AI recommendation, supporting evidence, precedent statistics, and a one-click decision panel that updates the dashboard in real time.
- **Finance Intelligence** (`/finance`) — strategic insights derived from expense behavior, oriented toward spend governance rather than transaction posting.

## How to demo it

1. Open the dashboard.
2. Click **Review** on any of the three flagged reports.
3. On the workspace, click **Approve** — watch the queue auto-advance to the next exception and the dashboard KPI decrement.
4. Clear all three to land on the "All clear" state.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS, themed to the SAP Fiori Horizon design system
- zustand for shared client state, sonner for toasts, lucide-react for icons
- 100% mock data — no backend, no auth, no API

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.
