<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import dayjs from "dayjs";

const time = ref("");
const updateTime = () => {
  time.value = dayjs.utc().format("HH:mm");
};

let interval: ReturnType<typeof setInterval>;

onMounted(() => {
  updateTime();
  interval = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div title="UTC time">{{ time }}</div>
</template>
