/*
 * @Author: leoking
 * @Date: 2024-11-11 16:22:17
 * @LastEditTime: 2025-01-10 18:47:03
 * @LastEditors: leoking
 * @Description: 
 */
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { pinia, i18n } from './setup'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'
import "./app.css"
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
const app = createApp(App);
app.use(router)
app.use(pinia)
app.use(i18n)
app.mount('#app')