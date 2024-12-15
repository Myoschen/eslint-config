import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin'
import type { Linter } from 'eslint'

import { ignores } from './configs/ignores'
import { importSort } from './configs/import-sort'
import { javascript } from './configs/javascript'
import { next } from './configs/next'
import { react } from './configs/react'
import { stylistic } from './configs/stylistic'
import { tailwindcss, type TailwindCSSOptions } from './configs/tailwindcss'
import { typescript, type TypeScriptOptions } from './configs/typescript'

type Options = {
  stylistic?: boolean | StylisticCustomizeOptions<true>
  typescript?: boolean | TypeScriptOptions
  tailwindcss?: boolean | TailwindCSSOptions
  react?: boolean
  next?: boolean
}

type UserConfigs = Linter.Config[]

export function myoschen(options?: Options, ...userConfigs: UserConfigs): Linter.Config[] {
  const {
    stylistic: enableStylistic,
    typescript: enableTypeScript,
    react: enableReact,
    next: enableNext,
    tailwindcss: enableTailwindCSS,
  } = options ?? {}

  const configs: Linter.Config[] = []

  configs.push(
    ...ignores(),
    ...javascript(),
    ...importSort(),
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
    configs.push(...react())
  }

  if (enableNext) {
    configs.push(...next())
  }

  if (enableTailwindCSS) {
    const options = typeof enableTailwindCSS === 'boolean' ? {} : enableTailwindCSS
    configs.push(...tailwindcss(options))
  }

  configs.push(...userConfigs)

  return configs
}
