import type { Linter } from 'eslint'

export type IgnoresOptions = string[]

export function ignores(options: IgnoresOptions = []): Linter.Config[] {
  return [{
    ignores: ['**/node_modules/*', ...options],
  }]
}
