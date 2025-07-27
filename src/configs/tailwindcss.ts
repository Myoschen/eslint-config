import type { ESLint, Linter } from 'eslint'
import pluginTailwind from 'eslint-plugin-tailwindcss'

export function tailwindcss(): Linter.Config[] {
  return [
    {
      name: 'myoschen/tailwindcss',
      plugins: {
        tailwindcss: pluginTailwind as unknown as ESLint.Plugin,
      },
      settings: {
        tailwindcss: {
          callees: ['cn', 'cva'],
          config: 'tailwind.config.ts',
        },
      },
      rules: {
        ...pluginTailwind.configs.recommended.rules,

        // custom rules
        'tailwindcss/no-custom-classname': 'off',
      },
    },
  ]
}
