<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useProductsStore } from "../stores/productsStore";
import { PAGE_PRODUCT_FULL, QUERY_PARAMS } from "../constants.js";
import { getQueryParameter } from "../utils/routerUtils.js";
import { scrollToQueryChange } from "../utils/scrollUtils.js";
import TheHeadBackground from "../components/TheHeadBackground";
import ProductFull from "../components/ProductFull";
import RaitingList from "../components/RaitingList";
import TheErrorMesage from "../components/TheErrorMesage";

const productsStore = useProductsStore();
const router = useRouter();
const idValue = ref(null);
const elementRef = ref(null);

onMounted(async () => {
  idValue.value = getQueryParameter(router, QUERY_PARAMS.ID);
  await productsStore.getDataByParams({
    id: idValue.value,
    [QUERY_PARAMS.TAG]: [],
    page: 1,
    limit: 1,
  });
});

scrollToQueryChange(router, elementRef);
</script>
<template>
  <div class="top">
    <the-head-background
      :current-page="PAGE_PRODUCT_FULL"
    ></the-head-background>
    <the-error-mesage v-show="productsStore.error">
      {{ productsStore.error }}</the-error-mesage
    >
    <div class="container">
      <the-error-mesage v-show="productsStore.data.length === 0"
        >Not found :(</the-error-mesage
      >
      <div class="main-content" ref="elementRef">
        <div class="products-flex" v-show="productsStore.data.length">
          <product-full
            v-if="productsStore.data.length"
            :product="productsStore.data[0]"
          ></product-full>
          <raiting-list :dataId="idValue"></raiting-list>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.products-flex {
  display: flex;
  flex-direction: column;
  gap: 55px;
}
</style>
