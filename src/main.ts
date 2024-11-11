/*
 * @Author: leoking
 * @Date: 2024-11-11 16:22:17
 * @LastEditTime: 2024-11-11 17:45:47
 * @LastEditors: leoking
 * @Description: 
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
/*
 * All i18n resources specified in the plugin `include` option can be loaded
 * at once using the import syntax
 */
import messages from '@intlify/unplugin-vue-i18n/messages'

import './style.css'
import App from './App.vue'

import 'virtual:uno.css'

const app = createApp(App);
const pinia = createPinia()
const i18n = createI18n({
    locale: "zh-CN",
    fallbackLocale: "en",
    messages
})

app.use(pinia)
app.use(i18n)
app.mount('#app')
