<script setup>
import { defineProps } from "vue";
import BaseBreadCrumbs from "./UI/BaseBreadCrumbs.vue";
defineProps({
  breadcrumbLinks: {
    type: Array,
  },
});
</script>

<template>
  <section class="homepage-title">
    <div class="homepage-title__flex">
      <h2 class="homepage-title__heading"><slot></slot></h2>
      <base-bread-crumbs
        v-if="breadcrumbLinks"
        :breadcrumbLinks="breadcrumbLinks"
      ></base-bread-crumbs>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";
.homepage-title {
  @include flexbox(row, center, center);
  position: relative;
  height: 178px;
  margin: -176px auto 0;
  border-radius: $border-radius-medium $border-radius-medium 0px 0px;
  background-color: $color-background-light;
  padding: 0 78px;
  max-width: -moz-min-content;
  max-width: min-content;
  z-index: 10;
  &__flex {
    @include flexbox(column, flex-start, center);
    gap: 10px;
  }
  &__heading {
    @include title-styles;
    white-space: nowrap;
  }
}
</style>
