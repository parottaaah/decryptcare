import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { TrendingUp, TrendingDown } from "lucide-react";
import type { DiagnosticTrend } from "@/types";

export function DiagnosticTrends({ items }: { items: DiagnosticTrend[] }) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <h3 className="flex items-center gap-2 text-sm font-semibold text-ink-900">
          <TrendingUp className="h-4 w-4 text-brand-600" />
          Diagnostic Trends
        </h3>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((trend) => (
          <div key={trend.id} className="flex items-center justify-between text-sm">
            <span className="text-ink-600">{trend.label}</span>
            <span
              className={
                trend.direction === "up"
                  ? "flex items-center gap-1 font-medium text-emerald-600"
                  : "flex items-center gap-1 font-medium text-alert"
              }
            >
              {trend.direction === "up" ? (
                <TrendingUp className="h-3.5 w-3.5" />
              ) : (
                <TrendingDown className="h-3.5 w-3.5" />
              )}
              {trend.changeLabel}
            </span>
          </div>
        ))}
        <p className="rounded-lg bg-ink-50 p-3 text-xs italic leading-relaxed text-ink-500">
          "AI models indicate a localized spike in upper respiratory infections within the downtown
          clinical network. Recommended preemptive resource allocation."
        </p>
      </CardContent>
    </Card>
  );
}
