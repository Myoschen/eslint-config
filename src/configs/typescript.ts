import pluginTs from '@typescript-eslint/eslint-plugin'
import parserTs from '@typescript-eslint/parser'
import type { ESLint, Linter } from 'eslint'

export function typescript(): Linter.Config[] {
  return [
    {
      name: 'myoschen/typescript',
      files: ['**/*.ts', '**/*.tsx'],
      languageOptions: {
        parser: parserTs,
        parserOptions: {
          sourceType: 'module',
          ecmaFeatures: { jsx: true },
        },
      },
      plugins: {
        '@typescript-eslint': pluginTs as unknown as ESLint.Plugin,
      },
      rules: {
        ...pluginTs.configs['eslint-recommended']!.overrides![0].rules,
        ...pluginTs.configs['recommended'].rules,

        // custom rules
        '@typescript-eslint/no-explicit-any': 'warn',
      },
    },
  ]
}
