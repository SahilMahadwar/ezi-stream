const path = require("path");

/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: path.join(__dirname, "tsconfig.json"),
  },
  extends: [
    "next/core-web-vitals",
    "prettier",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
  plugins: ["@tanstack/query"],
};

module.exports = config;
