import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FileText } from "lucide-react";
import type { UploadedDocument, UploadStatus } from "@/types";

const statusTone: Record<UploadStatus, "success" | "danger" | "warning"> = {
  analyzed: "success",
  flagged: "danger",
  pending: "warning",
};

const statusLabel: Record<UploadStatus, string> = {
  analyzed: "Analyzed",
  flagged: "Flagged",
  pending: "Pending",
};

export function RecentUploads({ items }: { items: UploadedDocument[] }) {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-sm font-semibold text-ink-900">Recent Uploads</h3>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map((doc) => (
          <div key={doc.id} className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink-50 text-ink-400">
              <FileText className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink-800">{doc.fileName}</p>
              <p className="text-xs text-ink-400">
                {doc.uploadedAt} · {doc.sizeLabel}
              </p>
            </div>
            <Badge tone={statusTone[doc.status]}>{statusLabel[doc.status]}</Badge>
          </div>
        ))}
        <button className="w-full pt-1 text-center text-xs font-medium text-brand-700 hover:underline">
          View All Archives →
        </button>
      </CardContent>
    </Card>
  );
}
