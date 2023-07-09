module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:promise/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "promise/catch-or-return": ["error", { allowFinally: true }],
  },
};
