import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CameraCaptureScreen } from "@/components/scan/CameraCaptureScreen";
import { ReviewScanScreen } from "@/components/scan/ReviewScanScreen";
import { AnimatePresence, motion } from "framer-motion";

export default function ScanPage() {
  const [step, setStep] = useState<"capture" | "review">("capture");
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center bg-ink-900 py-10">
      <AnimatePresence mode="wait">
        {step === "capture" ? (
          <motion.div key="capture" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <CameraCaptureScreen onCapture={() => setStep("review")} onClose={() => navigate("/documents")} />
          </motion.div>
        ) : (
          <motion.div key="review" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ReviewScanScreen onRetake={() => setStep("capture")} onContinue={() => navigate("/documents")} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
