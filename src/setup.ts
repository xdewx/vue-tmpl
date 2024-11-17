/*
 * @Author: leoking
 * @Date: 2024-11-17 12:32:39
 * @LastEditTime: 2024-11-17 12:57:22
 * @LastEditors: leoking
 * @Description: 抽离出web项目和组件库公用的配置
 */
import { useDark, useToggle } from '@vueuse/core'
import 'virtual:uno.css';
import './index.css';

import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

/*
 * All i18n resources specified in the plugin `include` option can be loaded
 * at once using the import syntax
 */
import messages from '@intlify/unplugin-vue-i18n/messages'

const pinia = createPinia()
const i18n = createI18n({
    locale: "zh-CN",
    fallbackLocale: "en",
    messages
})

const isDark = useDark({
    valueLight: "light"
})
const toggleTheme = () => {
    isDark.value = !isDark.value
    useToggle(isDark)
    console.info('dark:', isDark.value)
}

export {
    pinia, i18n, toggleTheme
}