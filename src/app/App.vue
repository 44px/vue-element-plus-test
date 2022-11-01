<script setup lang="ts">
import { RouterView } from "vue-router";
import PrivateLayout from "@/app/layouts/PrivateLayout.vue";
import { useAppColorMode } from "@/lib/useAppColorMode";

useAppColorMode();
</script>

<template>
  <PrivateLayout>
    <RouterView />
  </PrivateLayout>
</template>
