import { Search, Bell, MessageSquare, AlertTriangle } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Avatar } from "@/components/ui/Avatar";
import { cn } from "@/lib/utils";

const tabs = [
  { to: "/", label: "Overview" },
  { to: "/history", label: "History" },
  { to: "/diagnostics", label: "Reports" },
];

export function TopBar({ title = "DecryptCare AI" }: { title?: string }) {
  return (
    <header className="flex items-center justify-between border-b border-ink-200/70 bg-white px-8 py-4">
      <div className="flex items-center gap-8">
        <h1 className="text-base font-semibold text-ink-900">{title}</h1>
        <div className="hidden items-center gap-1 rounded-lg bg-ink-50 p-1 md:flex">
          <div className="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-ink-400">
            <Search className="h-4 w-4" />
            Search patients, records...
          </div>
          {tabs.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                  isActive ? "bg-white text-ink-900 shadow-sm" : "text-ink-500 hover:text-ink-800"
                )
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1.5 rounded-full bg-alert px-4 py-2 text-xs font-semibold text-white hover:bg-red-800">
          <AlertTriangle className="h-3.5 w-3.5" />
          Emergency Alert
        </button>
        <button aria-label="Notifications" className="text-ink-400 hover:text-ink-700">
          <Bell className="h-5 w-5" />
        </button>
        <button aria-label="Messages" className="text-ink-400 hover:text-ink-700">
          <MessageSquare className="h-5 w-5" />
        </button>
        <Avatar initials="JD" />
      </div>
    </header>
  );
}
