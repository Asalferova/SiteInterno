<script setup>
import { defineProps } from "vue";
import { isProductsValid } from "/src/validators.js";
import ProductItem from "../components/ProductItem";
const props = defineProps({
  products: {
    type: Array,
    required: true,
    validator(products) {
      const fields = ["id", "imageUrls", "title", "category", "tag", "text"];
      return isProductsValid(products, fields);
    },
  },
});
</script>
<template>
  <div v-if="products && products.length" class="products__cards_main">
    <product-item
      v-for="product in props.products"
      :key="product.id"
      :product="product"
      :productImage="product.imageUrls?.small"
    >
    </product-item>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";

.products__cards_main {
  @include flexbox(row, space-between);
  flex-wrap: wrap;
  -moz-column-gap: 38px;
  column-gap: 38px;
  row-gap: 56px;
  width: 100%;
  @media (max-width: 1200px) {
    @include flexbox(row, center);
  }
}
</style>
