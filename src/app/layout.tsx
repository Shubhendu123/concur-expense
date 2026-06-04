import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { Shell } from "@/components/shell/Shell";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Concur Expense — Acme Corp",
  description:
    "Trusted autonomy for expense management. Routine reports file themselves; humans govern only the exceptions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Shell>{children}</Shell>
        <Toaster
          position="bottom-right"
          theme="light"
          richColors={false}
          toastOptions={{
            classNames: {
              toast:
                "!bg-white !border !border-fiori-border !text-fiori-text !rounded-[8px] !shadow-[0_4px_12px_rgba(0,0,0,0.08)] !text-[13px]",
              title: "!text-fiori-text !font-semibold",
              description: "!text-fiori-text-secondary",
              success: "!border-l-[3px] !border-l-fiori-positive",
            },
          }}
        />
      </body>
    </html>
  );
}
