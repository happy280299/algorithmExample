interface ProgressBarProps {
  completed: number
  total: number
}

export function ProgressBar({ completed, total }: ProgressBarProps) {
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-400">Overall Progress</span>
        <span className="text-sm font-bold text-white">
          {completed}/{total} <span className="text-slate-500">({pct}%)</span>
        </span>
      </div>
      <div className="w-full h-3 bg-dark-700 rounded-full overflow-hidden border border-dark-500/50">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${pct}%`,
            background: pct === 100
              ? 'linear-gradient(90deg, #10b981, #06b6d4, #a855f7)'
              : 'linear-gradient(90deg, #a855f7, #3b82f6, #06b6d4)',
          }}
        />
      </div>
      {pct === 100 && (
        <p className="text-center text-sm mt-2 text-accent-emerald font-semibold animate-pulse-glow">
          🎉 All problems completed! You're amazing!
        </p>
      )}
    </div>
  )
}
