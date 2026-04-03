import { useState } from 'react'
import type { Phase } from '../data/roadmapData'
import { getPhaseProblems } from '../data/roadmapData'
import { ProblemNode } from './ProblemNode'

interface PhaseCardProps {
  phase: Phase
  isCompleted: (id: string) => boolean
  onToggle: (id: string) => void
  index: number
}

const colorMap: Record<string, { border: string; bg: string; accent: string; glow: string; hex: string }> = {
  purple: {
    border: 'border-accent-purple/30',
    bg: 'from-accent-purple/5 to-transparent',
    accent: 'text-accent-purple',
    glow: 'glow-purple',
    hex: '#a855f7',
  },
  blue: {
    border: 'border-accent-blue/30',
    bg: 'from-accent-blue/5 to-transparent',
    accent: 'text-accent-blue',
    glow: 'glow-blue',
    hex: '#3b82f6',
  },
  cyan: {
    border: 'border-accent-cyan/30',
    bg: 'from-accent-cyan/5 to-transparent',
    accent: 'text-accent-cyan',
    glow: 'glow-cyan',
    hex: '#06b6d4',
  },
  emerald: {
    border: 'border-accent-emerald/30',
    bg: 'from-accent-emerald/5 to-transparent',
    accent: 'text-accent-emerald',
    glow: 'glow-emerald',
    hex: '#10b981',
  },
  amber: {
    border: 'border-accent-amber/30',
    bg: 'from-accent-amber/5 to-transparent',
    accent: 'text-accent-amber',
    glow: 'glow-amber',
    hex: '#f59e0b',
  },
}

export function PhaseCard({ phase, isCompleted, onToggle, index }: PhaseCardProps) {
  const [isExpanded, setIsExpanded] = useState(true)
  const colors = colorMap[phase.color]
  const allProblems = getPhaseProblems(phase)
  const doneCount = allProblems.filter((p) => isCompleted(p.id)).length
  const totalCount = allProblems.length
  const phaseDone = doneCount === totalCount
  const pct = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0

  return (
    <div
      className={`
        animate-fade-in-up rounded-2xl border backdrop-blur-sm
        bg-gradient-to-br ${colors.bg} ${colors.border}
        ${phaseDone ? colors.glow : ''}
        transition-shadow duration-500
      `}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center gap-4 p-5 text-left"
      >
        <span className="text-3xl">{phase.icon}</span>
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-bold text-white truncate">{phase.title}</h2>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-xs text-slate-500 font-medium">{phase.dayRange}</span>
            <div className="flex-1 h-1.5 bg-dark-700 rounded-full overflow-hidden max-w-[200px]">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${pct}%`,
                  backgroundColor: colors.hex,
                }}
              />
            </div>
            <span className={`text-sm font-bold ${phaseDone ? colors.accent : 'text-slate-400'}`}>
              {doneCount}/{totalCount}
            </span>
          </div>
        </div>
        <svg
          className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Problems list */}
      {isExpanded && (
        <div className="px-5 pb-5 space-y-2">
          {phase.subSections ? (
            phase.subSections.map((sub) => (
              <div key={sub.title}>
                <h3 className={`text-xs font-semibold uppercase tracking-wider mb-2 mt-3 ${colors.accent} opacity-70`}>
                  {sub.title}
                </h3>
                <div className="space-y-1.5">
                  {sub.problems.map((problem) => (
                    <ProblemNode
                      key={problem.id}
                      title={problem.title}
                      url={problem.url}
                      difficulty={problem.difficulty}
                      isCompleted={isCompleted(problem.id)}
                      onToggle={() => onToggle(problem.id)}
                      accentColor={colors.hex}
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="space-y-1.5">
              {phase.problems!.map((problem) => (
                <ProblemNode
                  key={problem.id}
                  title={problem.title}
                  url={problem.url}
                  difficulty={problem.difficulty}
                  isCompleted={isCompleted(problem.id)}
                  onToggle={() => onToggle(problem.id)}
                  accentColor={colors.hex}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
