import type { Linter } from 'eslint'
import pluginTailwind, {} from 'eslint-plugin-tailwindcss'

export type TailwindCSSOptions = {
  callees?: string[]
  config?: string
}

export function tailwindcss(options: TailwindCSSOptions = {}): Linter.Config[] {
  return [{
    name: 'myoschen/tailwindcss',
    plugins: {
      tailwindcss: pluginTailwind,
    },
    rules: {
      ...pluginTailwind.configs.recommended.rules,

      'tailwindcss/no-custom-classname': 'off',
    },
    settings: {
      tailwindcss: {
        callees: ['cn', 'cva'],
        config: 'tailwind.config.ts',
        ...options,
      },
    },
  }]
}
