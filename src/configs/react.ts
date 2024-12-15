import type { Linter } from 'eslint'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import pluginReact from 'eslint-plugin-react'
// @ts-expect-error there are no types
import pluginReactHooks from 'eslint-plugin-react-hooks'

export function react(): Linter.Config[] {
  return [{
    name: 'myoschen/react',
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      sourceType: 'module',
    },
    plugins: {
      'react': pluginReact as any,
      'react-hooks': pluginReactHooks,
      'jsx-a11y': pluginJsxA11y,
    },
    rules: {
      ...pluginReact.configs['jsx-runtime'].rules,
      ...pluginReactHooks.configs['recommended'].rules,
      ...pluginJsxA11y.configs.strict.rules,
    },
  }]
}
