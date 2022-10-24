<script setup lang="ts">
import { RouterView } from "vue-router";
import { routes } from "@/pages/router";
</script>

<template>
  <v-app>
    <v-app-bar app>
      <v-btn variant="text" :to="routes.home()">Home</v-btn>
      <v-btn variant="text" :to="routes.campaigns()">List</v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid><RouterView /></v-container>
    </v-main>
  </v-app>
</template>
