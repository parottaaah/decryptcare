import { ArrowLeft, Settings } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const filters = ["Auto", "Original", "B&W", "Clean Up"] as const;

export function ReviewScanScreen({ onRetake, onContinue }: { onRetake: () => void; onContinue: () => void }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Auto");

  return (
    <div className="mx-auto flex h-[640px] w-[360px] flex-col overflow-hidden rounded-[2.5rem] border border-ink-900 bg-ink-50">
      <div className="flex items-center justify-between px-4 pt-4">
        <button onClick={onRetake} aria-label="Back" className="text-ink-700">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <p className="text-sm font-semibold text-ink-900">Review Scan</p>
        <Settings className="h-5 w-5 text-ink-700" />
      </div>

      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full rounded-lg bg-white p-4 shadow-panel">
          <div className="flex items-center gap-1 text-[8px] font-semibold text-brand-700">
            <span className="h-2 w-2 rounded-full bg-brand-500" />
            St. Mary's Regional Medical Center
          </div>
          <p className="mt-1 text-[8px] text-ink-500">Statement of Hospital Charges &amp; Patient Account Summary</p>
          <div className="mt-2 grid grid-cols-2 gap-1 text-[7px] text-ink-500">
            <p>Patient Name: John D. Smith</p>
            <p>Statement Date: Oct 20, 2023</p>
            <p>DOB: 12/10/1970</p>
            <p>Admit Date: Oct 15, 2023</p>
          </div>
          <div className="mt-2 h-24 w-full rounded bg-ink-100" />
          <div className="mt-2 flex justify-between text-[8px] font-semibold text-ink-800">
            <span>Total Charges</span>
            <span>$25,491.00</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 px-4 pb-3 text-xs">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full px-3 py-1 font-medium",
              filter === f ? "bg-brand-100 text-brand-700" : "text-ink-400"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="flex gap-3 p-4">
        <Button variant="outline" className="flex-1" onClick={onRetake}>
          Retake
        </Button>
        <Button className="flex-1" onClick={onContinue}>
          Continue →
        </Button>
      </div>
    </div>
  );
}
