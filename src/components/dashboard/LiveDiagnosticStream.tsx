import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ScanLine } from "lucide-react";
import { motion } from "framer-motion";
import type { DiagnosticStreamItem } from "@/types";

export function LiveDiagnosticStream({ items }: { items: DiagnosticStreamItem[] }) {
  return (
    <Card className="flex-1">
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold text-ink-900">Live AI Diagnostic Stream</h3>
          <p className="text-xs text-ink-400">Processing incoming radiology and pathology feeds.</p>
        </div>
        <button className="text-xs font-medium text-brand-700 hover:underline">View All</button>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            className="flex items-start justify-between gap-3 rounded-xl border border-ink-100 p-3"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <ScanLine className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-ink-900">{item.title}</p>
                <p className="text-xs text-ink-400">
                  Patient ID: {item.patientId} · {item.detail.split("·")[1]?.trim() ?? ""}
                </p>
                <p className="mt-0.5 text-[11px] text-ink-300">{item.timeAgo}</p>
              </div>
            </div>
            <Badge tone={item.risk === "high-risk" ? "danger" : "success"} className="shrink-0">
              {item.riskLabel}
            </Badge>
          </motion.div>
        ))}
        <div className="h-2 w-2/3 animate-pulse rounded bg-ink-100" />
      </CardContent>
    </Card>
  );
}
