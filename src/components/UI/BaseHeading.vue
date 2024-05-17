<script setup>
import { defineProps } from "vue";
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h2 class="title">{{ title }}</h2>
</template>
<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";
.title {
  @include title-styles;
  padding-bottom: $text-block-padding;
  @media (max-width: 620px) {
    font-size: $font-size-heading-xlarge;
  }
}
</style>
