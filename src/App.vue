<script setup lang="ts">
import { configProviderProps } from "@/plugins/naive-ui";
</script>

<template>
  <n-config-provider v-bind="configProviderProps">
    <n-global-style />
    <router-view></router-view>
  </n-config-provider>
</template>

<style scoped lang="scss"></style>
