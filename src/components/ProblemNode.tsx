import { useState } from 'react'
import type { Difficulty } from '../data/roadmapData'

interface ProblemNodeProps {
  title: string
  url: string
  difficulty: Difficulty
  isCompleted: boolean
  onToggle: () => void
  accentColor: string
}

const difficultyColors: Record<Difficulty, string> = {
  Easy: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  Medium: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  Hard: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
}

export function ProblemNode({ title, url, difficulty, isCompleted, onToggle, accentColor }: ProblemNodeProps) {
  const [justToggled, setJustToggled] = useState(false)

  const handleToggle = () => {
    setJustToggled(true)
    onToggle()
    setTimeout(() => setJustToggled(false), 300)
  }

  return (
    <div
      className={`
        group flex items-center gap-3 px-4 py-3 rounded-xl
        transition-all duration-300 cursor-pointer
        ${isCompleted
          ? 'bg-dark-700/30 hover:bg-dark-700/50'
          : 'bg-dark-700/60 hover:bg-dark-600/80 hover:shadow-lg'
        }
      `}
      onClick={handleToggle}
    >
      {/* Checkbox */}
      <div
        className={`
          flex-shrink-0 w-6 h-6 rounded-lg border-2 flex items-center justify-center
          transition-all duration-300
          ${justToggled ? 'animate-check-pop' : ''}
          ${isCompleted
            ? `border-transparent`
            : 'border-dark-500 group-hover:border-slate-400'
          }
        `}
        style={isCompleted ? { background: accentColor } : {}}
      >
        {isCompleted && (
          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>

      {/* Title */}
      <span
        className={`
          flex-1 text-sm font-medium transition-all duration-300
          ${isCompleted ? 'line-through text-slate-500' : 'text-slate-200 group-hover:text-white'}
        `}
      >
        {title}
      </span>

      {/* Difficulty badge */}
      <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${difficultyColors[difficulty]}`}>
        {difficulty}
      </span>

      {/* External link */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="flex-shrink-0 text-slate-500 hover:text-slate-300 transition-colors"
        title="Open on LeetCode"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  )
}
