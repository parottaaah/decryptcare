import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type BadgeTone = "brand" | "danger" | "success" | "neutral" | "warning";

const toneClasses: Record<BadgeTone, string> = {
  brand: "bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200",
  danger: "bg-alert-light text-alert ring-1 ring-inset ring-red-200",
  success: "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200",
  neutral: "bg-ink-100 text-ink-600 ring-1 ring-inset ring-ink-200",
  warning: "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200",
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium",
        toneClasses[tone],
        className
      )}
      {...props}
    />
  );
}
