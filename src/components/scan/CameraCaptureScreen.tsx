import { X, Zap, RefreshCw, FileText } from "lucide-react";
import { motion } from "framer-motion";

export function CameraCaptureScreen({ onCapture, onClose }: { onCapture: () => void; onClose: () => void }) {
  return (
    <div className="relative mx-auto flex h-[640px] w-[360px] flex-col overflow-hidden rounded-[2.5rem] bg-black text-white">
      <div className="flex items-center justify-between px-4 pt-4">
        <button onClick={onClose} aria-label="Close scanner" className="text-white/90">
          <X className="h-5 w-5" />
        </button>
        <span className="flex items-center gap-1 text-xs font-medium text-white/90">
          <Zap className="h-3.5 w-3.5" />
          Auto: ON
        </span>
        <RefreshCw className="h-5 w-5 text-white/90" />
      </div>

      <div className="relative mt-6 flex flex-1 items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-x-6 top-2 bottom-10 rounded-lg border-2 border-brand-400"
        />
        <div className="relative z-10 w-full rounded-md bg-white p-3 text-black shadow-2xl">
          <p className="text-[9px] font-semibold text-ink-700">ST. MARY'S GENERAL HOSPITAL</p>
          <div className="mt-2 grid grid-cols-2 gap-x-2 text-[7px] text-ink-600">
            <p>JOHN D. DOE</p>
            <p>Date: 10/20/2023</p>
          </div>
          <p className="mt-2 text-center text-[8px] font-semibold">STATEMENT OF HOSPITAL CHARGES</p>
          <div className="mt-1 h-16 w-full rounded bg-ink-100" />
        </div>
        <p className="absolute bottom-3 left-0 right-0 text-center text-[10px] text-white/70">
          <span className="mr-2 rounded bg-black/50 px-2 py-0.5">Stable</span>
          <span className="rounded bg-black/50 px-2 py-0.5">OCR: High</span>
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 pb-8">
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Document</span>
        <button
          onClick={onCapture}
          aria-label="Capture document"
          className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white/40 bg-white"
        />
      </div>

      <div className="absolute bottom-8 left-6 text-white/80">
        <FileText className="h-6 w-6" />
      </div>
    </div>
  );
}
