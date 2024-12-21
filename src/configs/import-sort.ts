import type { Linter } from 'eslint'
import pluginImportSort from 'eslint-plugin-simple-import-sort'

export function importSort(): Linter.Config[] {
  return [{
    name: 'myoschen/import-sort',
    plugins: {
      'import-sort': pluginImportSort,
    },
    rules: {
      'import-sort/exports': 'error',
      'import-sort/imports': [
        'error',
        {
          groups: [
            [String.raw`^\u0000`],
            [
              String.raw`^node`,
              String.raw`^react$`,
              // react native
              String.raw`^react-native$`,
              String.raw`^react-native.*`,
              // expo
              String.raw`^expo$`,
              String.raw`^expo.*`,
              // next
              String.raw`^next`,
              // other packages
              String.raw`@?\w`,
            ],
            [
              String.raw`^\.(?!/?$)`,
              String.raw`^~/.*`,
              String.raw`^@/.*`,
            ],
          ],
        },
      ],
    },
  }]
}
