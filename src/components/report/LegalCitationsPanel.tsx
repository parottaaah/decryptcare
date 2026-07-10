import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { LegalCitation } from "@/types";

export function LegalCitationsPanel({ citations }: { citations: LegalCitation[] }) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <h3 className="flex items-center gap-2 text-sm font-semibold text-ink-900">Legal Citations & Logic</h3>
      </CardHeader>
      <CardContent className="space-y-4">
        {citations.map((c) => (
          <div
            key={c.id}
            className={
              c.severity === "violation"
                ? "rounded-xl border-l-4 border-alert bg-alert-light p-3"
                : "rounded-xl border-l-4 border-sky-400 bg-sky-50 p-3"
            }
          >
            <div className="mb-1 flex items-center justify-between">
              <Badge tone={c.severity === "violation" ? "danger" : "brand"}>
                {c.severity === "violation" ? "Upcoding Violation" : "Unbundling"}
              </Badge>
              <span className="text-xs font-medium text-ink-400">{c.matchConfidence}% Match</span>
            </div>
            <p className="text-sm font-semibold text-ink-900">{c.title}</p>
            <p className="text-xs font-medium text-ink-500">{c.reference}</p>
            <p className="mt-1 text-xs leading-relaxed text-ink-600">{c.detail}</p>
          </div>
        ))}
        <Button variant="outline" size="sm" className="w-full">
          <Plus className="h-4 w-4" />
          Add Manual Citation
        </Button>
      </CardContent>
    </Card>
  );
}
