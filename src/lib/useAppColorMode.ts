import { useColorMode } from "@vueuse/core";
import { getKey } from "@/lib/localStorage";

export const useAppColorMode = () => {
  return useColorMode({
    storageKey: getKey("colorMode"),
    emitAuto: true,
  });
};
