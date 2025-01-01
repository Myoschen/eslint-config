import type { Linter } from 'eslint'

export type IgnoresOptions = {
  ignores?: string[]
}

export function ignores(options: IgnoresOptions = {}): Linter.Config[] {
  return [{
    ignores: ['**/node_modules/*', ...(options.ignores ?? [])],
  }]
}
