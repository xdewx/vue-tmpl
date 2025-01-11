<!--
 * @Author: leoking
 * @Date: 2025-01-10 18:27:37
 * @LastEditTime: 2025-01-11 13:02:40
 * @LastEditors: leoking
 * @Description: 
-->
<script setup lang="ts">
import { HelloWorld } from "../components/index";
import { toggleTheme } from "../index";
</script>

<template>
  <button @click="toggleTheme()">切换主题</button>
  <HelloWorld msg="Vite + Vue + Bun + UnoCSS + Unplugin + I18n" />
</template>

<style scoped></style>
