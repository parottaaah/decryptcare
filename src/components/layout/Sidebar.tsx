import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  Users,
  Stethoscope,
  Sparkles,
  ShieldCheck,
  Settings,
  LifeBuoy,
  Moon,
  ShieldPlus,
} from "lucide-react";
import { cn } from "@/lib/utils";

const primaryNav = [
  { to: "/", label: "Dashboard", icon: LayoutGrid },
  { to: "/patients", label: "Patients", icon: Users },
  { to: "/diagnostics", label: "Diagnostics", icon: Stethoscope },
  { to: "/insights", label: "AI Insights", icon: Sparkles },
  { to: "/protocols", label: "Protocols", icon: ShieldCheck },
  { to: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-ink-200/70 bg-white">
      <div className="flex items-center gap-2 px-6 py-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
          <ShieldPlus className="h-4 w-4" />
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-ink-900">DecryptCare</p>
          <p className="text-[11px] text-ink-400">AI Healthcare Systems</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {primaryNav.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-brand-50 text-brand-700"
                  : "text-ink-500 hover:bg-ink-50 hover:text-ink-800"
              )
            }
          >
            <Icon className="h-4.5 w-4.5 h-[18px] w-[18px]" />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="space-y-1 border-t border-ink-100 px-3 py-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-ink-500 hover:bg-ink-50">
          <LifeBuoy className="h-[18px] w-[18px]" />
          Support
        </button>
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-ink-500 hover:bg-ink-50">
          <Moon className="h-[18px] w-[18px]" />
          Dark Mode
        </button>
      </div>
    </aside>
  );
}
