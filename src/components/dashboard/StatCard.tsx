import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  footnote?: string;
  footnoteTone?: "up" | "down" | "neutral";
  accent?: boolean;
}

export function StatCard({ label, value, icon: Icon, footnote, footnoteTone = "neutral", accent }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium uppercase tracking-wide text-ink-400">{label}</p>
          <Icon className={cn("h-4 w-4", accent ? "text-brand-600" : "text-ink-300")} />
        </div>
        <p className="mt-2 text-3xl font-bold text-ink-900">{value}</p>
        {footnote && (
          <p
            className={cn(
              "mt-1 text-xs font-medium",
              footnoteTone === "up" && "text-emerald-600",
              footnoteTone === "down" && "text-alert",
              footnoteTone === "neutral" && "text-ink-400"
            )}
          >
            {footnote}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
