import { createApp } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import "vuetify/styles";
// import "normalize.css/normalize.css";
// import "element-plus/dist/index.css";
import "./style.css";
import App from "./App.vue";
import { router } from "./pages/router";

const app = createApp(App);

app.use(router);
const vuetify = createVuetify({
  components,
  defaults: { global: { density: "compact" } },
});
app.use(vuetify);

app.mount("#app");
