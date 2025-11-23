import { isDark } from "@/shared/index";
import { type ConfigProviderProps, darkTheme } from "naive-ui";
import { type ComputedRef } from "vue";
export const configProviderProps: ComputedRef<ConfigProviderProps> = computed(
  () => {
    return {
      theme: isDark.value ? darkTheme : undefined,
    };
  },
);
