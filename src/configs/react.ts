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
      'react': plugins['@eslint-react'] as any,
      'react-dom': plugins['@eslint-react/dom'] as any,
      'react-hooks': pluginReactHooks,
      'react-hooks-extra': plugins['@eslint-react/hooks-extra'] as any,
      'react-naming-convention': plugins['@eslint-react/naming-convention'] as any,
      'jsx-a11y': pluginJsxA11y,
    },
    rules: {
      ...rules,
      ...pluginReactHooks.configs['recommended'].rules,
      ...pluginJsxA11y.configs.strict.rules,

      'react/no-complicated-conditional-rendering': 'error',
      'react/no-leaked-conditional-rendering': 'error',
      'react/avoid-shorthand-fragment': 'off',
      'react/prefer-destructuring-assignment': 'off',

      'react-naming-convention/filename': [
        'error',
        { rule: 'kebab-case' },
      ],
    },
  }]
}
