<script setup>
import { defineProps } from "vue";
import TheSlider from "../components/TheSlider.vue";
import { isProductValid } from "/src/validators.js";
defineProps({
  product: {
    type: Object,
    required: true,
    validator(product) {
      const fields = ["id", "title", "tag", "text", "imageUrls"];
      return isProductValid(product, fields);
    },
  },
});
</script>

<template>
  <div v-if="product && Object.keys(product).length" class="product-full">
    <div class="product-full__content">
      <h2 class="product-full__title">{{ product.title }}</h2>
      <p v-for="text in product.text" :key="text" class="product-full__text">
        {{ text }}
      </p>
    </div>
    <the-slider :images="product.imageUrls?.large"></the-slider>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";
.product-full {
  @include flexbox(column, flex-start, center);
  gap: 48px;
  &__title {
    @include text-styles(
      $color-text-default,
      $font-family-heading,
      $font-size-heading-xlarge,
      125%,
      1px
    );
    padding-bottom: 30px;
  }
  &__text {
    @include text-styles(
      $color-text-secondary,
      $font-family-default,
      $font-size-text-medium,
      155%,
      0.22px
    );
    padding-bottom: $text-block-padding;
  }
  &__content {
    max-width: 55%;
  }
  @media (max-width: 620px) {
    @include flexbox(column-reverse, flex-start, center);
    &__content {
      max-width: 85%;
    }
  }
}
</style>
