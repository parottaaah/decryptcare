import { Badge } from "@/components/ui/Badge";
import type { ChargeLine } from "@/types";

export function ItemizedChargeTable({ lines }: { lines: ChargeLine[] }) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-ink-100 text-left text-xs uppercase tracking-wide text-ink-400">
          <th className="pb-2 font-medium">Code</th>
          <th className="pb-2 font-medium">Description</th>
          <th className="pb-2 font-medium text-right">Billed</th>
          <th className="pb-2 font-medium">Flag</th>
        </tr>
      </thead>
      <tbody>
        {lines.map((line) => (
          <tr key={line.id} className="border-b border-ink-50 last:border-0">
            <td className="py-3 font-mono text-xs text-ink-500">{line.code}</td>
            <td className="py-3 text-ink-800">{line.description}</td>
            <td className="py-3 text-right font-medium text-ink-900">${line.billedAmount.toLocaleString()}</td>
            <td className="py-3">
              {line.flagLabel && (
                <Badge tone={line.flagSeverity === "high" ? "danger" : "warning"}>{line.flagLabel}</Badge>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
