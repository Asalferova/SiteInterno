<script setup>
import { defineProps } from "vue";
import { isArrayContainsOnlyString } from "/src/validators.js";
defineProps({
  listItems: {
    type: Array,
    required: true,
    validator: isArrayContainsOnlyString,
  },
});
</script>

<template>
  <ol class="list">
    <li v-for="item in listItems" :key="item" class="list__li">
      {{ item }}
    </li>
  </ol>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";
.list {
  @include default-text-styles;
  list-style-type: none;
  counter-reset: item;
  &__li {
    counter-increment: item;
    padding-bottom: 30px;
    padding-left: 30px;
    &:before {
      content: counter(item) " ";
      @include text-styles(
        $color-text-highlight,
        $font-family-heading,
        $font-size-text-medium,
        125%,
        0.4px
      );
      font-style: normal;
      font-weight: 400;
    }
  }
}
</style>
