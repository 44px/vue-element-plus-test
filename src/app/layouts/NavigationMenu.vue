<script setup lang="ts">
import { defineProps } from "vue";
import { menu, isMenuGroup, MenuItem } from "@/app/menu";

type Props = {
  collapse?: boolean;
};

defineProps<Props>();

const getSlotName = (menuItem: MenuItem) => {
  return isMenuGroup(menuItem) ? "title" : "default";
};
</script>

<template>
  <el-menu
    class="menu"
    mode="vertical"
    router
    :default-active="$route.path"
    :collapse="collapse"
    :collapse-transition="false"
    text-color="#fbf7e8"
    active-text-color="#e0bc48"
    background-color="#1b1b18"
  >
    <component
      v-for="item in menu"
      :key="item.title"
      :is="isMenuGroup(item) ? 'el-sub-menu' : 'el-menu-item'"
      :index="isMenuGroup(item) ? item.title : item.link"
    >
      <template #[getSlotName(item)]>
        <el-icon><component :is="item.icon" /></el-icon>
        <span>{{ item.title }}</span>
      </template>

      <template #default v-if="isMenuGroup(item)">
        <el-menu-item
          v-for="subItem in item.items"
          :key="subItem.title"
          :index="subItem.link"
        >
          {{ subItem.title }}
        </el-menu-item>
      </template>
    </component>
  </el-menu>
</template>

<style scoped>
.menu {
  --el-menu-border-color: transparent;
}
</style>
