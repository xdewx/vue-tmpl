/*
 * @Author: leoking
 * @Date: 2024-11-11 16:22:17
 * @LastEditTime: 2025-01-10 18:47:03
 * @LastEditors: leoking
 * @Description:
 */
import { createApp } from "./shared";
import App from "./App.vue";

// 下面一行是为了让element-plus的暗黑主题生效
import "element-plus/theme-chalk/dark/css-vars.css";

const app = createApp(App);
app.mount("#app");
