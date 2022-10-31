import { createApp } from "vue";
import ElementPlus from "element-plus";
import "normalize.css/normalize.css";
import "element-plus/dist/index.css";
import "@/app/style.css";
import App from "@/app/App.vue";
import { router } from "@/pages/router";

const app = createApp(App);

app.use(router);
app.use(ElementPlus, { size: "small" });

app.mount("#app");
