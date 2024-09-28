import { ESLint } from "eslint";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptEslintParser from "@typescript-eslint/parser";

export default [
  {
    ignores: ["node_modules"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
    },
    rules: {
      // Tus reglas personalizadas aquí
    },
  },
];
