import { createApp } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import "vuetify/styles";
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
