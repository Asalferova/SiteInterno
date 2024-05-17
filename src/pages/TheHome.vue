<script setup>
import { onMounted } from "vue";
import { useProductsStore } from "../stores/productsStore";
import { useArticlesStore } from "../stores/articlesStore";
import { PAGE_BLOG, PAGE_PRODUCTS, QUERY_PARAMS } from "../constants.js";
import { navigate } from "../utils/routerUtils.js";
import ThePromo from "../components/ThePromo.vue";
import ProductList from "../components/ProductList.vue";
import ArticleList from "../components/ArticleList.vue";
import TheAboutProject from "../components/TheAboutProject.vue";
import TheErrorMesage from "../components/TheErrorMesage.vue";

const articlesStore = useArticlesStore();
const productsStore = useProductsStore();

onMounted(async () => {
  await articlesStore.getDataByParams({
    [QUERY_PARAMS.TAG]: [],
    page: 1,
    limit: 3,
  });
  await productsStore.getDataByParams({
    [QUERY_PARAMS.TAG]: [],
    page: 1,
    limit: 4,
  });
});
</script>

<template>
  <div class="top">
    <div class="container">
      <the-promo></the-promo>
    </div>
    <div class="main-content">
      <section class="products" id="projects">
        <div class="container">
          <div class="products__flex">
            <the-error-mesage v-show="productsStore.error">{{
              productsStore.error
            }}</the-error-mesage>
            <div class="products__content" v-show="!productsStore.error">
              <h2
                @click="navigate($router, PAGE_PRODUCTS)"
                class="products__title"
              >
                Follow Our Projects
              </h2>
              <p class="products__text">
                It is a long established fact that a reader will be distracted
                by the of readable content of page lookings at its layouts
                points.
              </p>
            </div>
            <product-list
              v-if="productsStore.data.length"
              :products="productsStore.data"
            >
            </product-list>
          </div>
        </div>
      </section>
      <the-about-project></the-about-project>
    </div>

    <section class="articles-and-news">
      <div class="container">
        <div class="articles-and-news__flex">
          <the-error-mesage v-show="articlesStore.error">{{
            articlesStore.error
          }}</the-error-mesage>
          <div class="articles-and-news__content" v-show="!articlesStore.error">
            <h2
              @click="navigate($router, PAGE_BLOG)"
              class="articles-and-news__title"
            >
              Articles &amp; News
            </h2>
            <p class="articles-and-news__text">
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using.
            </p>
          </div>
          <article-list
            v-if="articlesStore.data.length"
            :articles="articlesStore.data"
          ></article-list>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";

.products {
  @include main-content-headings-styles;
  text-align: start;
  padding-bottom: 40px;
  @media (max-width: 620px) {
    padding-bottom: 0;
  }
}

h2 {
  cursor: pointer;
}

.articles-and-news {
  @include main-content-headings-styles;
  text-align: start;
  padding-bottom: 40px;
  @media (max-width: 620px) {
    padding-bottom: 0;
  }
}
</style>
