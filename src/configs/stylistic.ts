import pluginStylistic, { type StylisticCustomizeOptions } from '@stylistic/eslint-plugin'
import type { Linter } from 'eslint'

const stylisticConfigDefaults: StylisticCustomizeOptions<true> = {
  flat: true,
  indent: 2,
  jsx: true,
  quotes: 'single',
  semi: false,
  braceStyle: '1tbs',
}

export function stylistic(options: StylisticCustomizeOptions<true> = {}): Linter.Config[] {
  const config = pluginStylistic.configs.customize({
    ...stylisticConfigDefaults,
    ...options,
  })

  return [{
    name: 'myoschen/stylistic',
    plugins: {
      '@stylistic': pluginStylistic,
    },
    rules: {
      ...config.rules,
    },
  }]
}
