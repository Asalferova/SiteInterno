<script setup>
import { useRoute } from "vue-router";
import { useProductsStore } from "./stores/productsStore";
import { useArticlesStore } from "./stores/articlesStore";
import { PAGE_NOT_FOUND } from "./constants.js";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import TheLoader from "./components/TheLoader";

const route = useRoute();
const articlesStore = useArticlesStore();
const productsStore = useProductsStore();
</script>

<template>
  <TheHeader />
  <main class="main">
    <router-view />
  </main>
  <The-Loader
    v-show="articlesStore.loader || productsStore.loader"
  ></The-Loader>
  <TheFooter v-if="route.path !== PAGE_NOT_FOUND" />
</template>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";
</style>
