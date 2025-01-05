/* eslint-disable import-sort/imports */
import type { Linter } from 'eslint'

import { ignores, type IgnoresOptions } from './configs/ignores'
import { importSort, type ImportSortOptions } from './configs/import-sort'
import { javascript } from './configs/javascript'
import { next, type NextOptions } from './configs/next'
import { react, type ReactOptions } from './configs/react'
import { stylistic, type StylisticOptions } from './configs/stylistic'
import { tailwindcss, type TailwindCSSOptions } from './configs/tailwindcss'
import { typescript, type TypeScriptOptions } from './configs/typescript'

type Options = {
  stylistic?: boolean | StylisticOptions
  typescript?: boolean | TypeScriptOptions
  react?: boolean | ReactOptions
  next?: boolean | NextOptions
  tailwindcss?: boolean | TailwindCSSOptions
  ignores?: IgnoresOptions
  importSort?: ImportSortOptions
}

type UserConfigs = Linter.Config[]

export function myoschen(options: Options = {}, ...userConfigs: UserConfigs): Linter.Config[] {
  const {
    stylistic: enableStylistic,
    typescript: enableTypeScript,
    react: enableReact,
    next: enableNext,
    tailwindcss: enableTailwindCSS,
    ignores: ignoresOptions,
    importSort: importSortOptions,
  } = options

  const configs: Linter.Config[] = []

  configs.push(
    ...ignores(ignoresOptions),
    ...importSort(importSortOptions),
    ...javascript(),
  )

  if (enableStylistic) {
    const options = typeof enableStylistic === 'boolean' ? {} : enableStylistic
    configs.push(...stylistic(options))
  }

  if (enableTypeScript) {
    const options = typeof enableTypeScript === 'boolean' ? {} : enableTypeScript
    configs.push(...typescript(options))
  }

  if (enableReact) {
    const options = typeof enableReact === 'boolean' ? {} : enableReact
    configs.push(...react(options))
  }

  if (enableNext) {
    const options = typeof enableNext === 'boolean' ? {} : enableNext
    configs.push(...next(options))
  }

  if (enableTailwindCSS) {
    const options = typeof enableTailwindCSS === 'boolean' ? {} : enableTailwindCSS
    configs.push(...tailwindcss(options))
  }

  configs.push(...userConfigs)

  return configs
}
