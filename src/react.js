module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: require.resolve("./base.js"),
  overrides: [
    {
      files: ["*.jsx", "*.tsx"],
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime", // for react ^16
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended",
      ],
      plugins: ["react", "jsx-a11y"],
    },
  ],
  settings: {
    react: { version: "detect" },
  },
};
