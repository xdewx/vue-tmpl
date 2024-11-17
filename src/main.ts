/*
 * @Author: leoking
 * @Date: 2024-11-11 16:22:17
 * @LastEditTime: 2024-11-17 13:01:01
 * @LastEditors: leoking
 * @Description: 
 */
import { createApp } from 'vue'

import { pinia, i18n } from './setup'

import App from './App.vue'
import "./app.css"

const app = createApp(App);

app.use(pinia)
app.use(i18n)
app.mount('#app')