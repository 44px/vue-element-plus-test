<script setup lang="ts">
import { RouterView } from "vue-router";
import { routes } from "@/pages/router";
</script>

<template>
  <el-container>
    <el-header class="header">
      <el-menu
        class="menu"
        mode="horizontal"
        router
        :default-active="$route.path"
      >
        <el-menu-item :index="routes.home()">Home</el-menu-item>
        <el-menu-item :index="routes.campaigns()">List</el-menu-item>
      </el-menu>
    </el-header>

    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>

<style scoped>
.header {
  background: var(--el-color-primary);
}

.menu {
  --el-menu-text-color: var(--el-color-white);
  --el-menu-active-color: var(--el-color-primary-light-7);
  --el-menu-bg-color: transparent;
  --el-menu-border-color: transparent;
}
</style>
