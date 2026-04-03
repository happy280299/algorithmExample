export type Difficulty = 'Easy' | 'Medium' | 'Hard'

export interface Problem {
  id: string
  title: string
  url: string
  difficulty: Difficulty
}

export interface SubSection {
  title: string
  problems: Problem[]
}

export interface Phase {
  id: string
  title: string
  icon: string
  color: 'purple' | 'blue' | 'cyan' | 'emerald' | 'amber'
  dayRange: string
  subSections?: SubSection[]
  problems?: Problem[]
}

export const roadmap: Phase[] = [
  {
    id: 'phase-1',
    title: 'Phase 1 — Basics (Array / String)',
    icon: '🧠',
    color: 'purple',
    dayRange: 'Day 1–7',
    problems: [
      { id: 'two-sum', title: 'Two Sum', url: 'https://leetcode.com/problems/two-sum/', difficulty: 'Easy' },
      { id: 'contains-duplicate', title: 'Contains Duplicate', url: 'https://leetcode.com/problems/contains-duplicate/', difficulty: 'Easy' },
      { id: 'valid-anagram', title: 'Valid Anagram', url: 'https://leetcode.com/problems/valid-anagram/', difficulty: 'Easy' },
      { id: 'move-zeroes', title: 'Move Zeroes', url: 'https://leetcode.com/problems/move-zeroes/', difficulty: 'Easy' },
      { id: 'best-time-buy-sell', title: 'Best Time to Buy and Sell Stock', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', difficulty: 'Easy' },
      { id: 'valid-palindrome', title: 'Valid Palindrome', url: 'https://leetcode.com/problems/valid-palindrome/', difficulty: 'Easy' },
      { id: 'merge-sorted-array', title: 'Merge Sorted Array', url: 'https://leetcode.com/problems/merge-sorted-array/', difficulty: 'Easy' },
    ],
  },
  {
    id: 'phase-2',
    title: 'Phase 2 — Patterns (Two Pointers / Sliding Window / Stack)',
    icon: '🔁',
    color: 'blue',
    dayRange: 'Day 8–14',
    subSections: [
      {
        title: 'Two Pointers',
        problems: [
          { id: 'two-sum-ii', title: 'Two Sum II - Input Array Is Sorted', url: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/', difficulty: 'Medium' },
          { id: 'remove-duplicates', title: 'Remove Duplicates from Sorted Array', url: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/', difficulty: 'Easy' },
        ],
      },
      {
        title: 'Sliding Window',
        problems: [
          { id: 'longest-substring', title: 'Longest Substring Without Repeating Characters', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', difficulty: 'Medium' },
          { id: 'min-size-subarray', title: 'Minimum Size Subarray Sum', url: 'https://leetcode.com/problems/minimum-size-subarray-sum/', difficulty: 'Medium' },
        ],
      },
      {
        title: 'Stack',
        problems: [
          { id: 'valid-parentheses', title: 'Valid Parentheses', url: 'https://leetcode.com/problems/valid-parentheses/', difficulty: 'Easy' },
          { id: 'min-stack', title: 'Min Stack', url: 'https://leetcode.com/problems/min-stack/', difficulty: 'Medium' },
          { id: 'daily-temperatures', title: 'Daily Temperatures', url: 'https://leetcode.com/problems/daily-temperatures/', difficulty: 'Medium' },
        ],
      },
    ],
  },
  {
    id: 'phase-3',
    title: 'Phase 3 — Recursion / Tree',
    icon: '🌲',
    color: 'cyan',
    dayRange: 'Day 15–21',
    problems: [
      { id: 'max-depth-binary-tree', title: 'Maximum Depth of Binary Tree', url: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/', difficulty: 'Easy' },
      { id: 'same-tree', title: 'Same Tree', url: 'https://leetcode.com/problems/same-tree/', difficulty: 'Easy' },
      { id: 'invert-binary-tree', title: 'Invert Binary Tree', url: 'https://leetcode.com/problems/invert-binary-tree/', difficulty: 'Easy' },
      { id: 'path-sum', title: 'Path Sum', url: 'https://leetcode.com/problems/path-sum/', difficulty: 'Easy' },
    ],
  },
  {
    id: 'phase-4',
    title: 'Phase 4 — Linked List',
    icon: '🔗',
    color: 'emerald',
    dayRange: 'Day 15–21',
    problems: [
      { id: 'reverse-linked-list', title: 'Reverse Linked List', url: 'https://leetcode.com/problems/reverse-linked-list/', difficulty: 'Easy' },
      { id: 'merge-two-sorted-lists', title: 'Merge Two Sorted Lists', url: 'https://leetcode.com/problems/merge-two-sorted-lists/', difficulty: 'Easy' },
      { id: 'linked-list-cycle', title: 'Linked List Cycle', url: 'https://leetcode.com/problems/linked-list-cycle/', difficulty: 'Easy' },
      { id: 'remove-nth-node', title: 'Remove Nth Node From End of List', url: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/', difficulty: 'Medium' },
    ],
  },
  {
    id: 'phase-5',
    title: 'Phase 5 — First Medium Problems',
    icon: '🧩',
    color: 'amber',
    dayRange: 'Day 22–30',
    problems: [
      { id: 'add-two-numbers', title: 'Add Two Numbers', url: 'https://leetcode.com/problems/add-two-numbers/', difficulty: 'Medium' },
      { id: 'group-anagrams', title: 'Group Anagrams', url: 'https://leetcode.com/problems/group-anagrams/', difficulty: 'Medium' },
      { id: 'top-k-frequent', title: 'Top K Frequent Elements', url: 'https://leetcode.com/problems/top-k-frequent-elements/', difficulty: 'Medium' },
      { id: 'product-except-self', title: 'Product of Array Except Self', url: 'https://leetcode.com/problems/product-of-array-except-self/', difficulty: 'Medium' },
      { id: 'container-most-water', title: 'Container With Most Water', url: 'https://leetcode.com/problems/container-with-most-water/', difficulty: 'Medium' },
      { id: '3sum', title: '3Sum', url: 'https://leetcode.com/problems/3sum/', difficulty: 'Medium' },
    ],
  },
]

export function getAllProblems(phases: Phase[]): Problem[] {
  const problems: Problem[] = []
  for (const phase of phases) {
    if (phase.problems) {
      problems.push(...phase.problems)
    }
    if (phase.subSections) {
      for (const sub of phase.subSections) {
        problems.push(...sub.problems)
      }
    }
  }
  return problems
}

export function getPhaseProblems(phase: Phase): Problem[] {
  const problems: Problem[] = []
  if (phase.problems) {
    problems.push(...phase.problems)
  }
  if (phase.subSections) {
    for (const sub of phase.subSections) {
      problems.push(...sub.problems)
    }
  }
  return problems
}
