import { computed, ref, watch } from "vue";
import { useMediaQuery } from "@vueuse/core";

const LS_IS_SIDEBAR_VISIBLE = "rmIsSidebarVisible";

const saveIsSidebarVisible = (collapse: boolean) => {
  localStorage.setItem(LS_IS_SIDEBAR_VISIBLE, JSON.stringify(collapse));
};

const restoreIsSidebarVisible = (): boolean => {
  const value = localStorage.getItem(LS_IS_SIDEBAR_VISIBLE);
  return value ? JSON.parse(value) : true;
};

export const useSidebar = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const sidebarMode = computed(() => {
    return isLargeScreen.value ? "aside" : "drawer";
  });

  const isSidebarVisible = ref(
    isLargeScreen.value ? restoreIsSidebarVisible() : false
  );

  const toggleSidebar = () => {
    isSidebarVisible.value = !isSidebarVisible.value;
  };

  // Automatically show/hide menu on window resize
  watch(isLargeScreen, () => {
    isSidebarVisible.value = isLargeScreen.value
      ? restoreIsSidebarVisible()
      : false;
  });

  watch(isSidebarVisible, () => {
    if (isLargeScreen.value) {
      saveIsSidebarVisible(isSidebarVisible.value);
    }
  });

  return {
    sidebarMode,
    isSidebarVisible,
    toggleSidebar,
  };
};
