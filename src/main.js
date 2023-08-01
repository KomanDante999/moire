import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

const app = createApp({
  render: () => h(App)
});

app.use(store).use(router).mount("#app");
