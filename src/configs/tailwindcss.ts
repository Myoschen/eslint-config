import type { Linter } from 'eslint'
import pluginTailwind, {} from 'eslint-plugin-tailwindcss'

import type { ConfigOptions } from '@/types'

export type TailwindCSSOptions = ConfigOptions & {
  callees?: string[]
  config?: string
}

export function tailwindcss(options: TailwindCSSOptions = {}): Linter.Config[] {
  const { overrides, ...tailwindcssOptions } = options

  return [{
    name: 'myoschen/tailwindcss',
    plugins: {
      tailwindcss: pluginTailwind,
    },
    settings: {
      tailwindcss: {
        callees: ['cn', 'cva'],
        config: 'tailwind.config.ts',
        ...tailwindcssOptions,
      },
    },
    rules: {
      ...pluginTailwind.configs.recommended.rules,

      // custom rules
      'tailwindcss/no-custom-classname': 'off',

      // override rules
      ...overrides,
    },
  }]
}
