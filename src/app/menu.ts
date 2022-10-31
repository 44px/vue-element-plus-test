import { routes } from "@/pages/router";
import { Files, House } from "@element-plus/icons-vue";
import type { Component } from "vue";

type SubMenuItem = {
  title: string;
  link: string;
};

type TopLevelMenuItem = {
  icon: Component;
  title: string;
  link: string;
};

type MenuItemsGroup = {
  icon: Component;
  title: string;
  items: SubMenuItem[];
};

export type MenuItem = TopLevelMenuItem | MenuItemsGroup;

export const isMenuGroup = (menuItem: MenuItem): menuItem is MenuItemsGroup => {
  return "items" in menuItem;
};

export const menu: MenuItem[] = [
  {
    icon: House,
    title: "Home",
    link: routes.home(),
  },
  {
    icon: Files,
    title: "Campaigns",
    items: [
      { title: "List", link: routes.campaigns() },
      { title: "Create", link: "/404" },
    ],
  },
];
