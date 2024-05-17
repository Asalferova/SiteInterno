<script>
import {
  HEAD_IMAGES_ITEMS,
  PAGE_BLOG,
  PAGE_PRODUCTS,
  PAGE_HOME,
  NAV_ITEMS,
} from "../constants.js";
const breadcrumbLinksforBlog = [
  { link: NAV_ITEMS[PAGE_HOME], to: PAGE_HOME },
  {
    link: NAV_ITEMS[PAGE_BLOG],
    to: PAGE_BLOG,
  },
];
const breadcrumbLinksforProducts = [
  { link: NAV_ITEMS[PAGE_HOME], to: PAGE_HOME },
  {
    link: NAV_ITEMS[PAGE_PRODUCTS],
    to: PAGE_PRODUCTS,
  },
];
</script>
<script setup>
import { defineProps } from "vue";
import { isPageValid } from "/src/validators.js";
import ThePageTitleBar from "./ThePageTitleBar.vue";

defineProps({
  currentPage: {
    type: String,
    required: true,
    validator: isPageValid,
  },
});
</script>

<template>
  <div class="head" v-if="currentPage">
    <picture>
      <source :srcset="HEAD_IMAGES_ITEMS[currentPage].webp" type="image/webp" />
      <img
        :src="HEAD_IMAGES_ITEMS[currentPage].jpg"
        alt="head img"
        class="head__img"
        style="width: 100%"
      />
    </picture>
    <the-page-title-bar
      v-if="currentPage === PAGE_BLOG"
      :breadcrumbLinks="breadcrumbLinksforBlog"
      >Articles &amp; News</the-page-title-bar
    >
    <the-page-title-bar
      v-if="currentPage === PAGE_PRODUCTS"
      :breadcrumbLinks="breadcrumbLinksforProducts"
      >Our Products</the-page-title-bar
    >
  </div>
</template>

<style lang="scss" scoped>
.head__img {
  object-fit: cover;
  width: 100%;
  height: 356px;
  @media (max-width: 620px) {
    height: 177px;
  }
}
</style>
