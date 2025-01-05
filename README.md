# eslint-config

![GitHub last commit (branch)](https://img.shields.io/github/last-commit/Myoschen/eslint-config/main?style=flat-square&labelColor=%23222222&color=%23111111) 
![GitHub issues](https://img.shields.io/github/issues/Myoschen/eslint-config?style=flat-square&labelColor=%23222222&color=%23111111) 
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/Myoschen/eslint-config/main?style=flat-square&label=version&labelColor=%23222222&color=%23111111)
![GitHub License](https://img.shields.io/github/license/Myoschen/eslint-config?style=flat-square&labelColor=%23222222&color=%23111111)
![NPM Version](https://img.shields.io/npm/v/%40myoschen%2Feslint-config?style=flat-square&labelColor=%23222222&color=%23111111)


## Usage

```bash
npm install @myoschen/eslint-config -D
yarn add @myoschen/eslint-config -D
pnpm add @myoschen/eslint-config -D
bun add @myoschen/eslint-config -D
```

```js
// eslint.config.js
import { myoschen } from '@myoschen/eslint-config'

// react
export default myoschen({
  stylistic: true,
  typescript: true,
  react: true,
  tailwindcss: true,
})

// next.js
export default myoschen({
  stylistic: true,
  typescript: true,
  react: true,
  next: true,
  tailwindcss: true,
})
```

## Contributions

If you have any suggestions or would like to contribute to this blog, please open an issue or submit a pull request. Your contributions are welcome!

## License

Licensed under the [MIT License](./LICENSE).