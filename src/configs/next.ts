// @ts-expect-error there are no types
import pluginNext from '@next/eslint-plugin-next'
import type { Linter } from 'eslint'

export function next(): Linter.Config[] {
  return [{
    name: 'myoschen/next',
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      ...pluginNext.configs['recommended'].rules,
      ...pluginNext.configs['core-web-vitals'].rules,
    },
  }]
}
