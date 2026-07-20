import { useCallback, useState } from "react";
import { UploadCloud, Camera, FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { z } from "zod";

const fileSchema = z.object({
  name: z.string(),
  size: z.number().max(50 * 1024 * 1024, "File must be under 50MB"),
  type: z.enum(["application/pdf", "image/jpeg", "image/png"]).or(z.string()),
});

interface DropZoneProps {
  onFilesAccepted: (files: File[]) => void;
}

export function DropZone({ onFilesAccepted }: DropZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList || fileList.length === 0) return;
      const files = Array.from(fileList);
      for (const f of files) {
        const parsed = fileSchema.safeParse({ name: f.name, size: f.size, type: f.type });
        if (!parsed.success) {
          setError(parsed.error.issues[0]?.message ?? "Invalid file");
          return;
        }
      }
      setError(null);
      onFilesAccepted(files);
    },
    [onFilesAccepted]
  );

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsDragging(false);
        handleFiles(e.dataTransfer.files);
      }}
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-10 text-center transition-colors",
        isDragging ? "border-brand-400 bg-brand-50" : "border-brand-200 bg-brand-50/40"
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-600">
        <UploadCloud className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-ink-900">Drag & Drop Documents Here</h3>
      <p className="mt-1 text-sm text-ink-400">Securely upload clinical documents for AI analysis.</p>

      <div className="mt-5 flex items-center gap-3">
        <label className="relative flex cursor-pointer items-center gap-2 rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 hover:bg-ink-50 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-500 has-[:focus-visible]:ring-offset-2">
          <Camera className="h-4 w-4" />
          Camera Sync
          <input
            type="file"
            accept="image/*"
            capture="environment"
            className="absolute h-px w-px overflow-hidden opacity-0"
            onChange={(e) => handleFiles(e.target.files)}
          />
        </label>
        <label className="relative flex cursor-pointer items-center gap-2 rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 hover:bg-ink-50 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-500 has-[:focus-visible]:ring-offset-2">
          <FolderOpen className="h-4 w-4" />
          Browse Files
          <input
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png"
            className="absolute h-px w-px overflow-hidden opacity-0"
            onChange={(e) => handleFiles(e.target.files)}
          />
        </label>
      </div>

      <p className="mt-4 text-xs text-ink-300">Supported Formats: PDF, JPG, PNG (Max 50MB)</p>
      {error && <p className="mt-2 text-xs font-medium text-alert">{error}</p>}
    </div>
  );
}
