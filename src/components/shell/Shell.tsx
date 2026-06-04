import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full bg-fiori-bg">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        <main className="flex-1 overflow-auto fiori-scroll">
          <div className="mx-auto max-w-[1280px] px-6 py-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
