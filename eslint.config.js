import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import autoImport from "./.eslintrc-auto-import.cjs";
import unocss from "@unocss/eslint-config/flat";
// import vueMacro from '@vue-macros/eslint-config'
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default [
  unocss,
  // vueMacro,
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...autoImport.globals },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  eslintPluginPrettierRecommended,
  { ignores: ["dist", ".eslintrc-auto-import.cjs", "lib"] },
  {
    rules: {
      "vue/multi-word-component-names": "error",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  {
    files: ["src/pages/**/*.vue", "src/chrome/**/*.vue"],
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
];
