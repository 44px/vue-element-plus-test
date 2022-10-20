import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./home/HomePage.vue";
import CampaignsPage from "./campaigns/CampaignsPage.vue";

export const routes = {
  home: () => "/",
  campaigns: () => "/campaigns",
};

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routes.home(),
      component: HomePage,
    },
    {
      path: routes.campaigns(),
      component: CampaignsPage,
    },
  ],
});
