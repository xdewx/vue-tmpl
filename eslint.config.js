import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import autoImport from './.eslintrc-auto-import.cjs';
import unocss from '@unocss/eslint-config/flat'
// import vueMacro from '@vue-macros/eslint-config'

/** @type {import('eslint').Linter.Config[]} */
export default [
  unocss,
  // vueMacro,
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node, ...autoImport.globals } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  { ignores: ["dist", ".eslintrc-auto-import.cjs", "lib"] },
  { rules: { "vue/multi-word-component-names": "warn" } },
];
