import type { CostBreakdownSlice } from "@/types";

const colorMap: Record<CostBreakdownSlice["colorToken"], string> = {
  brand: "#1f9d95",
  sky: "#38bdf8",
  amber: "#f59e0b",
  ink: "#c3c9d1",
};

export function CostBreakdownDonut({ slices }: { slices: CostBreakdownSlice[] }) {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  let cumulative = 0;

  return (
    <div className="flex items-center gap-6">
      <svg width="150" height="150" viewBox="0 0 150 150" className="-rotate-90">
        <circle cx="75" cy="75" r={radius} fill="none" stroke="#f0f2f4" strokeWidth="16" />
        {slices.map((slice) => {
          const dash = (slice.percent / 100) * circumference;
          const offset = circumference - (cumulative / 100) * circumference;
          cumulative += slice.percent;
          return (
            <circle
              key={slice.label}
              cx="75"
              cy="75"
              r={radius}
              fill="none"
              stroke={colorMap[slice.colorToken]}
              strokeWidth="16"
              strokeDasharray={`${dash} ${circumference - dash}`}
              strokeDashoffset={offset}
            />
          );
        })}
        <text x="75" y="70" textAnchor="middle" fill="#171c22" fontSize="20" fontWeight="700" transform="rotate(90 75 75)">
          100%
        </text>
        <text x="75" y="90" textAnchor="middle" fill="#707b89" fontSize="9" transform="rotate(90 75 75)">
          Analyzed
        </text>
      </svg>
      <ul className="space-y-2 text-sm">
        {slices.map((slice) => (
          <li key={slice.label} className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: colorMap[slice.colorToken] }} />
            <span className="text-ink-600">{slice.label}</span>
            <span className="font-medium text-ink-900">({slice.percent}%)</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
