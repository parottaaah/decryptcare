import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { DropZone } from "@/components/documents/DropZone";
import { RecentUploads } from "@/components/documents/RecentUploads";
import { ActiveAnalysisPreview } from "@/components/documents/ActiveAnalysisPreview";
import { recentUploads, activeAnalysis } from "@/lib/mockData";
import { motion } from "framer-motion";

export default function DocumentsPage() {
  const [, setPendingFiles] = useState<File[]>([]);

  return (
    <AppShell>
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <h2 className="text-2xl font-bold text-ink-900">Document Intelligence</h2>
        <p className="mt-1 max-w-2xl text-sm text-ink-500">
          Upload patient records, lab results, or discharge summaries for immediate AI-driven analysis
          and structured data extraction.
        </p>
      </motion.div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <DropZone onFilesAccepted={(files) => setPendingFiles(files)} />
          <ActiveAnalysisPreview analysis={activeAnalysis} />
        </div>
        <div>
          <RecentUploads items={recentUploads} />
        </div>
      </div>
    </AppShell>
  );
}
