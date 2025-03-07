import pluginTs from '@typescript-eslint/eslint-plugin'
import parserTs from '@typescript-eslint/parser'
import type { ESLint, Linter } from 'eslint'

import type { ConfigOptions } from '@/types'

export type TypeScriptOptions = ConfigOptions & {
  project?: string
  tsconfigRootDir?: string
}

export function typescript(options: TypeScriptOptions = {}): Linter.Config[] {
  const { overrides, ...typescriptOptions } = options

  return [{
    name: 'myoschen/typescript',
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        ...typescriptOptions,
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

      // override rules
      ...overrides,
    },
  }]
}
