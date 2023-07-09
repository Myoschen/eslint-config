module.exports = {
  extends: ["./base.js"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "eslint:recommended",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:prettier/recommended",
      ],
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      settings: {
        "import/resolver": { typescript: {} },
      },
    },
  ],
};
