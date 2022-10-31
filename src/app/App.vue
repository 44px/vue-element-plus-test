<script setup lang="ts">
import { RouterView } from "vue-router";
import PrivateLayout from "@/app/layouts/PrivateLayout.vue";
</script>

<template>
  <PrivateLayout>
    <RouterView />
  </PrivateLayout>
</template>
