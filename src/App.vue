<script setup>
import { useRoute } from "vue-router";
import { PAGE_NOT_FOUND } from "./constants.js";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

const route = useRoute();
</script>

<template>
  <TheHeader />
  <main class="main">
    <router-view />
  </main>
  <TheFooter v-if="route.path !== PAGE_NOT_FOUND" />
</template>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";
</style>
