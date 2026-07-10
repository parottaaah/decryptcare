import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AuditStep } from "@/types";
import { Button } from "@/components/ui/Button";

interface AuditSequenceModalProps {
  open: boolean;
  onCancel: () => void;
  progress: number;
  etaSeconds: number;
  steps: AuditStep[];
}

export function AuditSequenceModal({ open, onCancel, progress, etaSeconds, steps }: AuditSequenceModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center gap-16 bg-ink-900 px-8"
        >
          <div className="relative flex h-52 w-52 items-center justify-center rounded-3xl border-2 border-dashed border-brand-500/40">
            <svg className="absolute h-full w-full -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="4"
              />
              <motion.circle
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke="#3fb8b0"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="280%"
                initial={{ strokeDashoffset: "280%" }}
                animate={{ strokeDashoffset: `${280 - (280 * progress) / 100}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </svg>
            <div className="text-center">
              <p className="text-4xl font-bold text-white">{progress}%</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-brand-300">Processing</p>
            </div>
          </div>

          <div className="w-full max-w-sm">
            <p className="mb-2 flex items-center gap-2 text-sm font-medium text-white">
              Analyzing Medical Records
            </p>
            <p className="mb-6 text-xs text-ink-400">
              Estimated time remaining: {etaSeconds} seconds
            </p>

            <div className="rounded-2xl border border-white/10 bg-ink-800/60 p-5">
              <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
                <span className="h-2 w-2 rounded-sm bg-brand-400" />
                Audit Sequence
              </p>
              <ol className="space-y-4">
                {steps.map((step) => (
                  <li key={step.id} className="flex items-start gap-3">
                    <div
                      className={cn(
                        "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                        step.status === "done" && "bg-brand-500 text-white",
                        step.status === "active" && "bg-brand-500/20 text-brand-300",
                        step.status === "pending" && "bg-white/5 text-ink-500"
                      )}
                    >
                      {step.status === "done" && <Check className="h-3 w-3" />}
                      {step.status === "active" && <Loader2 className="h-3 w-3 animate-spin" />}
                    </div>
                    <div>
                      <p
                        className={cn(
                          "text-sm font-medium",
                          step.status === "pending" ? "text-ink-500" : "text-white"
                        )}
                      >
                        {step.label}
                      </p>
                      {step.detail && <p className="text-xs text-ink-400">{step.detail}</p>}
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-5 flex items-center justify-between">
                <Button variant="outline" size="sm" onClick={onCancel} className="border-white/10 bg-transparent text-ink-300 hover:bg-white/5">
                  Cancel
                </Button>
                <span className="flex items-center gap-1.5 text-xs text-brand-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                  DecryptCare Engine Active
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
