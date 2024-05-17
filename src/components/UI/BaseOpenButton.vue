<script setup>
import { defineProps } from "vue";
import BaseNavigationButton from "./BaseNavigationButton.vue";
import { ICON_ARROW_BUTTON_BROWN } from "/src/icons.js";
import BaseIcon from "./BaseIcon.vue";

defineProps({
  arrow: {
    type: Boolean,
    default: true,
  },
});
</script>
<template>
  <base-navigation-button :arrow="false" class="open-button"
    ><slot></slot>
    <base-icon
      :name="ICON_ARROW_BUTTON_BROWN"
      class="open-button__svg"
    ></base-icon
  ></base-navigation-button>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";

.open-button {
  position: fixed;
  bottom: 6%;
  right: 5%;
  width: 220px;
  min-height: 50px;
  opacity: 0.9;
  z-index: 9999;
  transition: all 0.3s ease;
  border-radius: 8px 8px 0px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  &:hover .open-button__svg {
    transform: rotate(270deg) translateX(1px) scale(1.3);
  }
  &__svg {
    transition: all 0.3s;
    transform: rotate(270deg);
    margin: 15px;
  }
  @media (max-width: 620px) {
    width: 180px;
    min-height: 30px;
  }
  &__svg {
    margin: 5px;
  }
}
</style>
