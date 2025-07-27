import type { Linter } from 'eslint'

import {
  ignores,
  importSort,
  javascript,
  next,
  react,
  stylistic,
  tailwindcss,
  typescript,
} from './configs'

type PresetOptions = {
  stylistic?: boolean
  typescript?: boolean
  react?: boolean
  next?: boolean
  tailwindcss?: boolean
}

type UserConfigs = Linter.Config[]

export function myoschen(options: PresetOptions = {}, ...userConfigs: UserConfigs): Linter.Config[] {
  const {
    stylistic: enableStylistic = true,
    typescript: enableTypeScript = true,
    react: enableReact,
    next: enableNext,
    tailwindcss: enableTailwindCSS,
  } = options

  const configs: Linter.Config[] = []

  configs.push(
    ...ignores(),
    ...importSort(),
    ...javascript(),
  )

  if (enableStylistic) configs.push(...stylistic())
  if (enableTypeScript) configs.push(...typescript())
  if (enableReact) configs.push(...react())
  if (enableNext) configs.push(...next())
  if (enableTailwindCSS) configs.push(...tailwindcss())

  configs.push(...userConfigs)

  return configs
}
