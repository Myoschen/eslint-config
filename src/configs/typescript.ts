import pluginTs from '@typescript-eslint/eslint-plugin'
import parserTs from '@typescript-eslint/parser'
import type { Linter } from 'eslint'

export type TypeScriptOptions = {
  project?: string
  tsconfigRootDir?: string
}

export function typescript(options: TypeScriptOptions = {}): Linter.Config[] {
  return [{
    name: 'myoschen/typescript',
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        ...options,
      },
    },
    plugins: {
      '@typescript-eslint': pluginTs as any,
    },
    rules: {
      ...pluginTs.configs['eslint-recommended']!.overrides![0].rules,
      ...pluginTs.configs['recommended'].rules,

      '@typescript-eslint/no-explicit-any': 'warn',
    },
  }]
}
