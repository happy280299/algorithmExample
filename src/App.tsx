import { roadmap, getAllProblems } from './data/roadmapData'
import { useProgress } from './hooks/useProgress'
import { ProgressBar } from './components/ProgressBar'
import { PhaseCard } from './components/PhaseCard'
import { PhaseConnector } from './components/PhaseConnector'
import { getPhaseProblems } from './data/roadmapData'

function App() {
  const { toggle, isCompleted, completedCount } = useProgress()
  const allProblems = getAllProblems(roadmap)

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan bg-clip-text text-transparent">
              LeetCode Roadmap
            </span>
          </h1>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-md mx-auto">
            30-day algorithm journey for web developers.
            Build pattern recognition from scratch.
          </p>
          <div className="mt-6">
            <ProgressBar completed={completedCount} total={allProblems.length} />
          </div>
        </header>

        {/* Study tips */}
        <div className="mb-8 p-4 rounded-xl bg-dark-700/40 border border-dark-500/30">
          <div className="flex items-start gap-3">
            <span className="text-xl">⚡</span>
            <div className="text-xs text-slate-400 space-y-1">
              <p><strong className="text-slate-300">Don't rush</strong> — focus on understanding patterns</p>
              <p><strong className="text-slate-300">Try brute force first</strong> → then optimize</p>
              <p><strong className="text-slate-300">Stuck &gt; 20 min?</strong> → read hint, not full solution</p>
              <p><strong className="text-slate-300">Re-code from scratch</strong> after solving</p>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="space-y-0">
          {roadmap.map((phase, index) => {
            const phaseProblems = getPhaseProblems(phase)
            const phaseDone = phaseProblems.every((p) => isCompleted(p.id))

            return (
              <div key={phase.id}>
                <PhaseCard
                  phase={phase}
                  isCompleted={isCompleted}
                  onToggle={toggle}
                  index={index}
                />
                {index < roadmap.length - 1 && (
                  <PhaseConnector isCompleted={phaseDone} />
                )}
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <footer className="mt-12 mb-8 text-center">
          <div className="text-sm text-slate-600">
            🎯 <strong className="text-slate-500">Goal:</strong>{' '}
            <span className="text-slate-500">
              Recognize patterns quickly · Solve Easy comfortably · Start Medium with confidence
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
