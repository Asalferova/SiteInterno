<script setup>
import { defineProps } from "vue";
import { ICON_ARROW } from "/src/icons.js";
import BaseIcon from "./BaseIcon.vue";

defineProps({
  arrow: {
    type: Boolean,
    default: true,
  },
});
</script>
<template>
  <button class="navigation-button">
    <slot></slot>
    <base-icon
      v-if="arrow"
      :name="ICON_ARROW"
      class="navigation-button__svg"
      width="18"
      height="22"
    ></base-icon>
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";

.navigation-button {
  @include text-styles(
    $color-background-light,
    $font-family-default,
    $font-size-button-small,
    125%,
    0.36px
  );
  text-align: center;
  font-weight: 600;
  border-radius: 18px;
  background: $color-text-default;
  box-shadow: $default-shadow;
  padding: 23px 49px;
  @include flexbox(row, center, center);
  gap: 10px;
  transition: background-color 0.3s, box-shadow 0.3s;
  position: relative;
  max-width: 55.6%;
  min-height: 26px;
  cursor: pointer;
  &__svg {
    transition: transform 0.3s;
  }
  &:hover {
    background-color: #1f2329;
    box-shadow: $default-shadow;
  }
  &:hover .navigation-button__svg {
    transform: translateX(5px) scale(1.1);
  }
  @media (max-width: 769px) {
    max-width: 70.6%;
  }
  @media (max-width: 620px) {
    max-width: 90.6%;
    padding: 16px 39px;
  }
  @media (max-width: 440px) {
    max-width: 100%;
    padding: 10px 29px;
    &__svg {
      width: 12px;
    }
  }
}
</style>
