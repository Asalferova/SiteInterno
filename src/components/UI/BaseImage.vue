<script setup>
import { defineProps } from "vue";
defineProps({
  image: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "image",
  },
});
</script>

<template>
  <div class="image-link">
    <img :src="image" :alt="alt" class="image-link__img" />
  </div>
</template>

<style lang="scss" scoped>
.image-link {
  margin-bottom: 45px;
  &__img {
    border-radius: 50px;
    margin-bottom: 0;
  }
}
</style>
