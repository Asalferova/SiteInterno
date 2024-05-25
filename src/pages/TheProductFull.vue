<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useProductsStore } from "../stores/productsStore";
import { PAGE_PRODUCT_FULL, QUERY_PARAMS } from "../constants.js";
import { getQueryParameter } from "../utils/routerUtils.js";
import { scrollToQueryChange } from "../utils/scrollUtils.js";
import TheHeadBackground from "../components/TheHeadBackground";
import ProductFull from "../components/ProductFull";
import RaitingList from "../components/RaitingList";
import TheErrorMesage from "../components/TheErrorMesage";

const router = useRouter();
const productsStore = useProductsStore();
const { error, data } = storeToRefs(productsStore);
const idValue = ref(null);
const elementRef = ref(null);

idValue.value = getQueryParameter(router, QUERY_PARAMS.ID);
productsStore.getDataByParams({
  id: idValue.value,
  [QUERY_PARAMS.TAG]: [],
  page: 1,
  limit: 1,
});

scrollToQueryChange(router, elementRef);
</script>
<template>
  <div class="top">
    <the-head-background
      :current-page="PAGE_PRODUCT_FULL"
    ></the-head-background>
    <the-error-mesage v-if="error"> {{ error }}</the-error-mesage>
    <div class="container" v-if="!error">
      <div class="main-content" ref="elementRef">
        <div class="products-flex" v-if="data.length">
          <product-full v-if="data.length" :product="data[0]"></product-full>
          <raiting-list :dataId="idValue"></raiting-list>
        </div>
        <the-error-mesage v-else>Not found :(</the-error-mesage>
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
