<script setup lang="ts">
import { useAppColorMode } from "@/lib/useAppColorMode";

const colorMode = useAppColorMode();
</script>

<template>
  <h1>Profile</h1>

  <h2>Color Mode</h2>
  <el-radio-group v-model="colorMode">
    <el-radio label="light">Light</el-radio>
    <el-radio label="dark">Dark</el-radio>
    <el-radio label="auto">Auto</el-radio>
  </el-radio-group>
</template>
