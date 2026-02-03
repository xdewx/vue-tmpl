import "./index.css";

export const HelloWorld = defineAsyncComponent(
  () => import("./HelloWorld.vue"),
);
