import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import VueObserveVisibility from "vue3-observe-visibility";
import "./assets/styles/global.scss";

const app = createApp(App);

app.config.errorHandler = (err, vm, info) => {
  console.error("Global error handler:", err, vm, info);
};

app.use(createPinia()).use(router).use(VueObserveVisibility).mount("#app");
