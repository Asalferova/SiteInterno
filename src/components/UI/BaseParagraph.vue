<script setup>
import { defineProps } from "vue";
defineProps({
  paragraph: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <p class="text">{{ paragraph }}</p>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";
.text {
  @include default-text-styles;
  padding-bottom: $text-block-padding;
}
</style>
