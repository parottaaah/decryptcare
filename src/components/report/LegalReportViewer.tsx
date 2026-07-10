import { Card } from "@/components/ui/Card";
import type { ChargeLine } from "@/types";

export function LegalReportViewer({ lines }: { lines: ChargeLine[] }) {
  return (
    <Card className="mx-auto max-w-2xl p-10">
      <div className="mb-6 border-b border-ink-100 pb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-ink-400">Confidential &amp; Privileged</p>
        <h2 className="mt-2 text-xl font-bold text-ink-900">Audit Report &amp; Legal Review</h2>
        <p className="mt-1 text-xs text-ink-400">Prepared for legal counsel</p>
      </div>

      <section>
        <h3 className="text-sm font-semibold text-ink-900">Section 1: Itemized Charge Analysis</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-600">
          This document details the findings of the automated billing audit conducted on Patient: John Doe
          (ID: DC-88492) for services rendered between Oct 12, 2023, and Oct 15, 2023.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-600">
          Upon review of the submitted HCFA-1500 claims, several discrepancies were identified requiring
          immediate legal scrutiny regarding potential violations of standard billing practices.
        </p>

        <ul className="mt-4 space-y-3">
          {lines.map((line) => (
            <li key={line.id} className="rounded-lg bg-ink-50 p-3 text-sm">
              <p className="font-medium text-ink-800">
                Charge Line — Code {line.code} ({line.description}). Billed amount: ${line.billedAmount.toLocaleString()}.
              </p>
              {line.flagLabel && (
                <p className="mt-1 text-xs text-alert">
                  The documentation provided does not support the severity of service billed. This is an
                  {" "}{line.flagLabel}.
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </Card>
  );
}
