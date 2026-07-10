import { Sidebar } from "@/components/layout/Sidebar";
import { LegalReportViewer } from "@/components/report/LegalReportViewer";
import { LegalCitationsPanel } from "@/components/report/LegalCitationsPanel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { chargeLines, legalCitations } from "@/lib/mockData";
import { Printer, Share2, FilePlus } from "lucide-react";

export default function ReportPage() {
  return (
    <div className="flex h-screen bg-ink-50">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-ink-200/70 bg-white px-8 py-4">
          <div className="flex items-center gap-3">
            <h1 className="text-base font-semibold text-ink-900">John Doe</h1>
            <span className="text-sm text-ink-400">#DC-88492</span>
            <Badge tone="brand">Legal Grade Ready</Badge>
            <span className="text-xs text-ink-300">Generated Today, 09:41 AM</span>
          </div>
          <div className="flex items-center gap-3 text-ink-400">
            <Printer className="h-4 w-4" />
            <FilePlus className="h-4 w-4" />
            <Share2 className="h-4 w-4" />
            <Button size="sm">Export PDF</Button>
          </div>
        </header>

        <div className="flex flex-1 gap-6 overflow-y-auto p-8">
          <LegalReportViewer lines={chargeLines} />
          <LegalCitationsPanel citations={legalCitations} />
        </div>
      </div>
    </div>
  );
}
