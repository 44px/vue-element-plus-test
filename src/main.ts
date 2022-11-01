import { createApp } from "vue";
import ElementPlus from "element-plus";
import "normalize.css/normalize.css";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import dayjs from "dayjs";
import utcPlugin from "dayjs/plugin/utc";
import "@/app/style.css";
import App from "@/app/App.vue";
import { router } from "@/pages/router";

dayjs.extend(utcPlugin);

const app = createApp(App);

app.use(router);
app.use(ElementPlus, { size: "small" });

app.mount("#app");
