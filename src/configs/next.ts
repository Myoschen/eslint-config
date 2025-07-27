import pluginNext from '@next/eslint-plugin-next'
import type { ESLint, Linter } from 'eslint'

export function next(): Linter.Config[] {
  return [
    {
      name: 'myoschen/next',
      plugins: {
        '@next/next': pluginNext as unknown as ESLint.Plugin,
      },
      rules: {
        ...(pluginNext.configs['recommended'].rules as Linter.RulesRecord),
        ...(pluginNext.configs['core-web-vitals'].rules as Linter.RulesRecord),
      },
    },
  ]
}
