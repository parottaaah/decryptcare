import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SlidersHorizontal, MoreHorizontal } from "lucide-react";
import type { PatientQueueItem } from "@/types";

const statusTone = {
  waiting: "neutral",
  "in-review": "warning",
  cleared: "success",
} as const;

const statusLabel = {
  waiting: "Waiting",
  "in-review": "In Review",
  cleared: "Cleared",
} as const;

export function RecentPatientQueue({ items }: { items: PatientQueueItem[] }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <h3 className="text-sm font-semibold text-ink-900">Recent Patient Queue</h3>
        <div className="flex items-center gap-3 text-ink-400">
          <SlidersHorizontal className="h-4 w-4" />
          <MoreHorizontal className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-ink-100 text-left text-xs uppercase tracking-wide text-ink-400">
              <th className="pb-2 font-medium">Patient</th>
              <th className="pb-2 font-medium">ID</th>
              <th className="pb-2 font-medium">Submitted</th>
              <th className="pb-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((p) => (
              <tr key={p.id} className="border-b border-ink-50 last:border-0">
                <td className="py-3 font-medium text-ink-800">{p.name}</td>
                <td className="py-3 text-ink-500">{p.patientId}</td>
                <td className="py-3 text-ink-500">{p.submittedAt}</td>
                <td className="py-3">
                  <Badge tone={statusTone[p.status]}>{statusLabel[p.status]}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
