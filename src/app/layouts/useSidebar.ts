import { computed, ref, watch } from "vue";
import { useMediaQuery } from "@vueuse/core";
import { getItemStorage } from "@/lib/localStorage";

const isSidebarVisibleStorage = getItemStorage("isSidebarVisible", true);

export const useSidebar = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const sidebarMode = computed(() => {
    return isLargeScreen.value ? "aside" : "drawer";
  });

  const isSidebarVisible = ref(
    isLargeScreen.value ? isSidebarVisibleStorage.get() : false
  );

  const toggleSidebar = () => {
    isSidebarVisible.value = !isSidebarVisible.value;
  };

  // Automatically show/hide menu on window resize
  watch(isLargeScreen, () => {
    isSidebarVisible.value = isLargeScreen.value
      ? isSidebarVisibleStorage.get()
      : false;
  });

  watch(isSidebarVisible, () => {
    if (isLargeScreen.value) {
      isSidebarVisibleStorage.set(isSidebarVisible.value);
    }
  });

  return {
    sidebarMode,
    isSidebarVisible,
    toggleSidebar,
  };
};
