<script setup>
import { defineProps } from "vue";
defineProps({
  text: Array,
});
</script>
<template>
  <p v-for="paragraph in text" :key="paragraph" class="text">
    {{ paragraph }}
  </p>
  <p v-if="$slots.default" class="text">
    <slot></slot>
  </p>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";
.text {
  @include default-text-styles;
  padding-bottom: $text-block-padding;
}
</style>
