import { useState, useCallback, useEffect } from 'react'

const STORAGE_KEY = 'leetcode-roadmap-progress'

function loadProgress(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      return new Set(JSON.parse(raw) as string[])
    }
  } catch {
    // ignore
  }
  return new Set()
}

function saveProgress(ids: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]))
}

export function useProgress() {
  const [completed, setCompleted] = useState<Set<string>>(() => loadProgress())

  useEffect(() => {
    saveProgress(completed)
  }, [completed])

  const toggle = useCallback((id: string) => {
    setCompleted((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }, [])

  const isCompleted = useCallback((id: string) => completed.has(id), [completed])

  const completedCount = completed.size

  return { completed, toggle, isCompleted, completedCount }
}
