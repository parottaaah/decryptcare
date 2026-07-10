export function RiskGauge({ severity = "High" as "Low" | "Medium" | "High" }) {
  const rotation = severity === "Low" ? -60 : severity === "Medium" ? 0 : 60;
  return (
    <div className="flex flex-col items-center">
      <svg width="120" height="70" viewBox="0 0 120 70">
        <path d="M10 65 A50 50 0 0 1 110 65" fill="none" stroke="#f0f2f4" strokeWidth="10" strokeLinecap="round" />
        <path
          d="M10 65 A50 50 0 0 1 110 65"
          fill="none"
          stroke="url(#riskGradient)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="riskGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#c23b3b" />
          </linearGradient>
        </defs>
        <line
          x1="60"
          y1="65"
          x2="60"
          y2="20"
          stroke="#171c22"
          strokeWidth="3"
          strokeLinecap="round"
          transform={`rotate(${rotation} 60 65)`}
        />
        <circle cx="60" cy="65" r="4" fill="#171c22" />
      </svg>
      <p className="mt-1 text-sm font-semibold text-alert">{severity}</p>
      <p className="text-xs text-ink-400">Requires Review</p>
    </div>
  );
}
