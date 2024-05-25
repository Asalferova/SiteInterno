<script setup>
import { watch, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useProductsStore } from "../stores/productsStore";
import { PAGE_PRODUCTS, QUERY_PARAMS, TAG_LIST_MEDIUM } from "../constants.js";
import { scrollToQueryChange } from "../utils/scrollUtils.js";
import { getQueryParameter } from "/src/utils/routerUtils.js";
import TheHeadBackground from "../components/TheHeadBackground";
import ProductFlexMozaic from "../components/ProductFlexMozaic";
import TagList from "../components/TagList";
import ThePagination from "../components/ThePagination";
import TheErrorMesage from "../components/TheErrorMesage";

const router = useRouter();
const productsStore = useProductsStore();
const { error, uniqueTags, data, loader, paginationInfo } =
  storeToRefs(productsStore);
const elementRef = ref(null);
const params = reactive({
  page: 1,
  [QUERY_PARAMS.TAG]: getQueryParameter(router, QUERY_PARAMS.TAG) || [],
  limit: 8,
});

function updateCurrentPage(value) {
  params.page = value;
}
function updateSelectedTags(value) {
  params[QUERY_PARAMS.TAG] = value;
}

productsStore.getUniqueTags();
watch(
  () => params,
  async () => {
    await productsStore.getDataByParams(params);
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
        <the-error-mesage v-if="error"> {{ error }}</the-error-mesage>
        <div class="products-flex" v-if="!error">
          <tag-list
            v-if="uniqueTags.length"
            :type="TAG_LIST_MEDIUM"
            :tags="uniqueTags"
            @select="updateSelectedTags"
          ></tag-list>
          <product-flex-mozaic
            v-if="data.length"
            :products="data"
          ></product-flex-mozaic>
          <the-pagination
            v-if="!loader"
            :totalPages="paginationInfo.total_pages"
            @update:currentPage="updateCurrentPage"
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
