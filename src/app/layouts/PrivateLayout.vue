<script setup lang="ts">
import { Menu as MenuIcon, User } from "@element-plus/icons-vue";
import NavigationMenu from "@/app/layouts/NavigationMenu.vue";
import { useSidebar } from "@/app/layouts/useSidebar";

const { isSidebarVisible, sidebarMode, toggleSidebar } = useSidebar();
</script>

<template>
  <el-container class="wrapper">
    <div class="drawer-wrapper" v-if="sidebarMode === 'drawer'">
      <el-drawer
        v-model="isSidebarVisible"
        :show-close="false"
        :with-header="false"
        direction="ltr"
        :size="200"
        ><NavigationMenu
      /></el-drawer>
    </div>
    <el-aside class="aside" v-else :width="isSidebarVisible ? '200px' : '64px'"
      ><NavigationMenu :collapse="!isSidebarVisible"
    /></el-aside>

    <el-container>
      <el-header class="header">
        <el-button text :icon="MenuIcon" @click="toggleSidebar()" />

        <div>
          <el-dropdown trigger="click">
            <el-button text :icon="User" />

            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Profile</el-dropdown-item>
                <el-dropdown-item>Log out</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>

      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.wrapper {
  --rm-sidebar-bg-color: #1b1b18;
  height: 100vh;
}

.drawer-wrapper :deep(.el-drawer) {
  --el-drawer-bg-color: var(--rm-sidebar-bg-color);
  --el-drawer-padding-primary: 0;
}

.aside {
  background: var(--rm-sidebar-bg-color);
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  background: var(--el-drawer-bg-color);
  border-bottom: 1px solid var(--el-border-color);
}
</style>
