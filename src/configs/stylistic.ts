import pluginStylistic from '@stylistic/eslint-plugin'
import type { Linter } from 'eslint'

export function stylistic(): Linter.Config[] {
  const config = pluginStylistic.configs.customize({
    indent: 2,
    jsx: true,
    quotes: 'single',
    semi: false,
    braceStyle: '1tbs',
  })

  return [
    {
      name: 'myoschen/stylistic',
      plugins: {
        '@stylistic': pluginStylistic,
      },
      rules: {
        ...config.rules,
      },
    },
  ]
}
