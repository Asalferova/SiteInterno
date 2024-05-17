<script>
import {
  BUTTON_CIRCLE_SMALL,
  BUTTON_CIRCLE_BIG,
  BUTTON_CIRCLE_PAGINATION,
} from "/src/constants.js";
const typeClasses = {
  [BUTTON_CIRCLE_SMALL]: "button-circle_small",
  [BUTTON_CIRCLE_BIG]: "button-circle_big",
  [BUTTON_CIRCLE_PAGINATION]: "button-circle_pagination",
};
</script>
<script setup>
import { defineProps } from "vue";
import { isButtonTypeValid } from "/src/validators.js";

defineProps({
  type: {
    default: BUTTON_CIRCLE_SMALL,
    type: String,
    validator: isButtonTypeValid,
  },
  isSelected: {
    default: false,
    type: Boolean,
  },
});
</script>

<template>
  <button
    :class="[typeClasses[type], { selected: isSelected }, 'button-circle']"
    :aria-label="'view in full'"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";
.button-circle {
  cursor: pointer;
  border-radius: $border-radius-circle;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  width: 53px;
  height: 52px;
  &_small {
    margin-left: auto;
    background-color: $color-border-light;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.2);
      background-color: $color-background-light;
    }
  }
  &_big {
    margin-left: auto;
    width: 70px;
    height: 70px;
    background-color: $color-border-light;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.2);
    }
    img {
      width: 8px;
    }
    @media (max-width: 820px) {
      min-width: 50px;
      width: 50px;
      height: 50px;
    }
  }
  &_pagination {
    @include default-text-ui-styles;
    font-size: 15px;
    border: 1px solid $color-text-highlight;
    background-color: $color-background-light;
    font-style: normal;
    font-weight: 600;
    text-transform: capitalize;
    transition: background-color 0.5s;
    &:hover {
      background-color: $color-background-highlight;
      border-color: transparent;
    }
    &.selected {
      background-color: $color-background-highlight;
      border-color: transparent;
    }
  }
}
</style>
