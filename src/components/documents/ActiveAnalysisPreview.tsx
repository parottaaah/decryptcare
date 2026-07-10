import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";
import type { ActiveAnalysis } from "@/types";

export function ActiveAnalysisPreview({ analysis }: { analysis: ActiveAnalysis }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <h3 className="text-sm font-semibold text-ink-900">Active Analysis Preview</h3>
        <Badge tone="brand">Processing</Badge>
      </CardHeader>
      <CardContent>
        <p className="text-sm font-medium text-ink-800">{analysis.fileName}</p>
        <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-xs text-ink-400">Document Type</p>
            <p className="mt-1 font-medium text-ink-800">{analysis.documentType}</p>
          </div>
          <div>
            <p className="text-xs text-ink-400">Patient ID</p>
            <p className="mt-1 font-medium text-ink-800">{analysis.patientId}</p>
          </div>
          <div>
            <p className="text-xs text-ink-400">OCR Quality Score</p>
            <p className="mt-1 flex items-center gap-1 font-medium text-emerald-600">
              <CheckCircle2 className="h-4 w-4" />
              {analysis.ocrQualityScore}% {analysis.ocrQualityLabel}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <div className="mb-1 flex items-center justify-between text-xs text-ink-400">
            <span>Extracting structured data…</span>
            <span>{analysis.processingProgress}%</span>
          </div>
          <Progress value={analysis.processingProgress} />
        </div>

        <div className="mt-5 flex items-center justify-between rounded-lg bg-ink-50 p-3">
          <p className="text-sm text-ink-500">Ready to process the active queue?</p>
          <Button size="sm">Run Analysis</Button>
        </div>
      </CardContent>
    </Card>
  );
}
