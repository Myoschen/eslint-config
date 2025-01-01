import pluginStylistic, { type StylisticCustomizeOptions } from '@stylistic/eslint-plugin'
import type { Linter } from 'eslint'

import type { ConfigOptions } from '@/types'

const stylisticConfigDefaults: StylisticCustomizeOptions<true> = {
  flat: true,
  indent: 2,
  jsx: true,
  quotes: 'single',
  semi: false,
  braceStyle: '1tbs',
}

export type StylisticOptions = ConfigOptions & StylisticCustomizeOptions<true>

export function stylistic(options: StylisticOptions = {}): Linter.Config[] {
  const { overrides, ...stylisticOptions } = options

  const config = pluginStylistic.configs.customize({
    ...stylisticConfigDefaults,
    ...stylisticOptions,
  })

  return [{
    name: 'myoschen/stylistic',
    plugins: {
      '@stylistic': pluginStylistic,
    },
    rules: {
      ...config.rules,

      // override rules
      ...overrides,
    },
  }]
}
