/*
 * @Author: leoking
 * @Date: 2024-11-17 12:32:39
 * @LastEditTime: 2024-11-17 12:57:22
 * @LastEditors: leoking
 * @Description: 抽离出web项目和组件库公用的配置
 */
import { createApp as _createApp, type Component } from "vue";
import { useDark, useToggle } from "@vueuse/core";

import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

/*
 * All i18n resources specified in the plugin `include` option can be loaded
 * at once using the import syntax
 */
import messages from "@intlify/unplugin-vue-i18n/messages";
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import { routes } from "vue-router/auto-routes";

import "virtual:uno.css";
import "./index.css";

const router = createRouter({
  history:
    import.meta.env.VITE_ROUTER_MODE === "hash"
      ? createWebHashHistory()
      : createWebHistory(),
  routes: routes,
});

const pinia = createPinia();
const i18n = createI18n({
  locale: "zh-CN",
  fallbackLocale: "en",
  messages,
});

const isDark = useDark({
  valueLight: "light",
  valueDark: "dark",
});

const toggleTheme = () => {
  isDark.value = !isDark.value;
  useToggle(isDark);
  console.info("dark:", isDark.value);
};

/**
 * add routes & pinia & i18n
 * @param cmp component
 * @returns App<Element>
 */
export const createApp = (cmp: Component) => {
  const app = _createApp(cmp);
  app.use(router).use(i18n).use(pinia);
  return app;
};

export const locale = ref<any>();
export const toggleLocale = (locale: any) => {
  locale.value = locale;
};

export { pinia, i18n, toggleTheme, router, isDark };
