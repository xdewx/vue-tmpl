<script setup lang="ts">
import { HelloWorld } from './components/index'
import { toggleTheme } from './index'
</script>

<template>
  <button @click="toggleTheme()">切换主题</button>
  <HelloWorld msg="Vite + Vue + Bun + UnoCSS + Unplugin + I18n" />
</template>

<style scoped></style>
