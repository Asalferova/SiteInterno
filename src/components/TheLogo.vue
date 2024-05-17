<script setup>
import { PAGE_HOME } from "../constants.js";
import { navigate } from "/src/utils/routerUtils.js";
import { ICON_LOGO } from "../icons";
import BaseIcon from "./UI/BaseIcon.vue";
</script>

<template>
  <div @click="navigate($router, PAGE_HOME)" class="logo">
    <base-icon
      :name="ICON_LOGO"
      width="34"
      height="34"
      class="logo__img"
      alt="Logo"
    ></base-icon>
    <p class="logo__title">Interno</p>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";
.logo {
  @include flexbox(row, flex-start, center);
  gap: 10px;
  cursor: pointer;
  &__title {
    @include text-styles(
      $color-text-default,
      $font-family-heading,
      $font-size-heading-xxlarge,
      125%,
      0.36px
    );
  }
}
</style>
