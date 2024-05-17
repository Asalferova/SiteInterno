<script setup>
import { watch, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useProductsStore } from "../stores/productsStore";
import { PAGE_PRODUCTS, QUERY_PARAMS } from "../constants.js";
import { getQueryParameter } from "../utils/routerUtils.js";
import { scrollToQueryChange } from "../utils/scrollUtils.js";
import TheHeadBackground from "../components/TheHeadBackground";
import ProductFlexMozaic from "../components/ProductFlexMozaic";
import TagListMedium from "../components/TagListMedium";
import ThePagination from "../components/ThePagination";
import TheErrorMesage from "../components/TheErrorMesage";

const productsStore = useProductsStore();
const router = useRouter();
const selectedTags = ref([]);
let page = ref(1);
const elementRef = ref(null);

onMounted(async () => {
  await productsStore.getUniqueTags();
});

watch(
  [
    () => parseInt(getQueryParameter(router, QUERY_PARAMS.PAGE)) || 1,
    () => getQueryParameter(router, QUERY_PARAMS.TAG),
  ],
  async ([currentPage, tagParam]) => {
    page.value = currentPage;
    selectedTags.value = tagParam ? tagParam : [];
    await productsStore.getDataByParams({
      page: page.value,
      [QUERY_PARAMS.TAG]: selectedTags.value,
      limit: 8,
    });
  },
  { immediate: true, deep: true }
);

scrollToQueryChange(router, elementRef);
</script>
<template>
  <div class="top">
    <the-head-background :current-page="PAGE_PRODUCTS"></the-head-background>
    <div class="main-content" ref="elementRef">
      <div class="container">
        <the-error-mesage v-show="productsStore.error">
          {{ productsStore.error }}</the-error-mesage
        >
        <div class="products-flex" v-show="!productsStore.error">
          <tag-list-medium
            v-if="productsStore.uniqueTags.length"
            :tags="productsStore.uniqueTags"
            :selectedTags="selectedTags"
          ></tag-list-medium>
          <the-error-mesage v-show="productsStore.data.length === 0"
            >Not found :(</the-error-mesage
          >
          <product-flex-mozaic
            v-if="productsStore.data.length"
            :products="productsStore.data"
          ></product-flex-mozaic>
          <the-pagination
            v-if="!productsStore.loader"
            :totalPages="productsStore.paginationInfo"
          ></the-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
.main-content {
  padding-top: 20px;
}
.products-flex {
  @include flexbox(column, flex-start, center);
  gap: 20px;
}
</style>
