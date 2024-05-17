<script>
import { TAG_SMALL, TAG_LARGE, TAG_MEDIUM } from "/src/constants.js";
const typeClasses = {
  [TAG_SMALL]: "tag-btn_small",
  [TAG_LARGE]: "tag-btn_large",
  [TAG_MEDIUM]: "tag-btn_medium",
};
</script>
<script setup>
import { defineProps, defineEmits } from "vue";
import { isTagTypeValid } from "/src/validators.js";

defineProps({
  type: {
    default: TAG_SMALL,
    type: String,
    validator: isTagTypeValid,
  },
  isSelected: {
    default: false,
    type: Boolean,
  },
});

const emit = defineEmits(["select"]);
</script>

<template>
  <button
    :class="[typeClasses[type], { selected: isSelected }, 'tag-btn']"
    @click="emit('select', $event.target)"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";
.tag-btn {
  @include text-styles(
    $color-text-default,
    $font-family-default,
    $font-size-button-small,
    125%,
    0.36px
  );
  border: none;
  padding: 9px 30px;
  border-radius: $border-radius-small;
  &_small {
    border-radius: 8px 8px 8px 0px;
    background: $color-background-light;
    padding: 4px 11px 8px 8px;
    transition: transform 0.3s;
    @include default-text-ui-styles;
    text-decoration: none;
    text-transform: capitalize;
    &:hover {
      transform: scale(1.05);
    }
    @media (max-width: 620px) {
      font-size: $font-size-text-medium;
    }
  }
  &_large {
    background: $color-background-highlight;

    &.selected {
      background: $color-text-default;
      color: $color-background-light;
    }
  }
  &_medium {
    background-color: transparent;

    &.selected {
      background-color: $color-text-highlight;
    }
  }
}
</style>
