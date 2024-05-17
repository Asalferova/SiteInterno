<script setup>
import { defineProps } from "vue";
import { isProductsValid } from "/src/validators.js";
import ProductItem from "./ProductItem";
defineProps({
  products: {
    type: Array,
    required: true,
    validator(products) {
      const fields = ["id", "imageUrls", "title", "category", "tag", "text"];
      return isProductsValid(products, fields);
    },
  },
});
function getImageUrl(product, index) {
  const small = product.imageUrls?.small;
  const medium = product.imageUrls?.medium;
  const size = index % 3 === 0 ? small : medium;
  return size;
}
</script>

<template>
  <div v-if="products && products.length" class="products__cards_products">
    <transition-group name="list">
      <product-item
        v-for="(product, index) in products"
        :key="product.id"
        :product="product"
        :productImage="getImageUrl(product, index)"
        class="product-p"
      >
      </product-item>
    </transition-group>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";

.products__cards_products {
  column-count: 2;
  column-gap: 20px;
  margin: 0 auto;
  width: 100%;
  & > * {
    margin-bottom: $text-block-padding;
  }
  .product-p {
    width: 100%;
    float: left;
    page-break-inside: avoid;
    break-inside: avoid;
    margin-bottom: 0;
    margin-top: $text-block-padding;
  }

  @media (max-width: 620px) {
    column-count: 1;
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
