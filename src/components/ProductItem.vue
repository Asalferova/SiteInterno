<script setup>
import { defineProps } from "vue";
import { isProductValid } from "/src/validators.js";
import {
  BUTTON_CIRCLE_BIG,
  QUERY_PARAMS,
  PAGE_PRODUCTS,
  PAGE_PRODUCT_FULL,
  NAV_ITEMS,
} from "/src/constants.js";
import { navigate } from "/src/utils/routerUtils.js";
import { ICON_ARROW_BUTTON } from "../icons";
import BaseButton from "./UI/BaseButton.vue";
import BaseIcon from "./UI/BaseIcon.vue";
import BaseBreadCrumbs from "./UI/BaseBreadCrumbs.vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
    validator(product) {
      const fields = ["id", "title", "tag"];
      return isProductValid(product, fields);
    },
  },
  productImage: {
    type: String,
    required: true,
  },
});

const breadcrumbLinks = [
  { link: NAV_ITEMS[PAGE_PRODUCTS], to: PAGE_PRODUCTS },
  {
    link: `${props.product?.tag}`,
    to: `${PAGE_PRODUCTS}?${QUERY_PARAMS.TAG}=${props.product?.tag}`,
  },
];
</script>
<template>
  <div
    class="product"
    v-if="props.product && Object.keys(props.product).length"
    @click="
      navigate($router, PAGE_PRODUCT_FULL, {
        [QUERY_PARAMS.ID]: props.product.id,
      })
    "
  >
    <img
      class="product__img"
      :src="props.productImage"
      :alt="props.product.tag + ' image'"
      style="width: 100%"
      loading="lazy"
    />

    <div class="product__content">
      <div class="product__content-desc">
        <h3 class="product__content-title">{{ props.product.title }}</h3>
        <base-bread-crumbs
          :breadcrumbLinks="breadcrumbLinks"
        ></base-bread-crumbs>
      </div>
      <base-button :type="BUTTON_CIRCLE_BIG"
        ><base-icon :name="ICON_ARROW_BUTTON"></base-icon
      ></base-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";

.product {
  cursor: pointer;
  &__content {
    @include flexbox(row, space-between, center);
    margin-top: 28px;
    &-title {
      @include text-styles(
        $color-text-default,
        $font-family-heading,
        $font-size-heading-large,
        125%,
        0.5px
      );
      font-weight: 400;
    }
    &-text {
      @include default-text-styles;
      font-weight: 400;
    }
  }
  @media (max-width: 1024px) {
    width: 75%;
  }
  @media (max-width: 620px) {
    width: 85%;
    &__content {
      margin-top: 18px;
    }
  }
  @media (max-width: 440px) {
    &__content {
      margin-top: 8px;
    }
  }
}
</style>
