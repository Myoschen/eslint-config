import pluginReact from '@eslint-react/eslint-plugin'
import type { Linter } from 'eslint'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
// @ts-expect-error there are no types
import pluginReactHooks from 'eslint-plugin-react-hooks'

export function react(): Linter.Config[] {
  const plugins = pluginReact.configs.all.plugins
  const rules = pluginReact.configs.all.rules

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
      ...plugins as any,
      'react-hooks': pluginReactHooks,
      'jsx-a11y': pluginJsxA11y,
    },
    rules: {
      ...rules,
      ...pluginReactHooks.configs['recommended'].rules,
      ...pluginJsxA11y.configs.strict.rules,

      '@eslint-react/no-complicated-conditional-rendering': 'error',
      '@eslint-react/no-leaked-conditional-rendering': 'error',
      '@eslint-react/avoid-shorthand-fragment': 'off',
      '@eslint-react/prefer-destructuring-assignment': 'off',

      '@eslint-react/naming-convention/filename': [
        'error',
        { rule: 'kebab-case' },
      ],
    },
  }]
}
