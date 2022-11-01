import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./home/HomePage.vue";
import CampaignsPage from "./campaigns/CampaignsPage.vue";
import ProfilePage from "./profile/ProfilePage.vue";

export const routes = {
  home: () => "/",
  campaigns: () => "/campaigns",
  profile: () => "/profile",
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
    {
      path: routes.profile(),
      component: ProfilePage,
    },
  ],
});
