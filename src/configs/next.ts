// @ts-expect-error there are no types
import pluginNext from '@next/eslint-plugin-next'
import type { Linter } from 'eslint'

import type { ConfigOptions } from '@/types'

export type NextOptions = ConfigOptions & {}

export function next(options: NextOptions = {}): Linter.Config[] {
  return [{
    name: 'myoschen/next',
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      ...pluginNext.configs['recommended'].rules,
      ...pluginNext.configs['core-web-vitals'].rules,

      // override rules
      ...options.overrides,
    },
  }]
}
