<script setup>
import { watch, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { PAGE_BLOG, QUERY_PARAMS } from "../constants.js";
import { useArticlesStore } from "../stores/articlesStore";
import { getQueryParameter } from "../utils/routerUtils.js";
import { scrollToQueryChange } from "../utils/scrollUtils.js";
import TheHeadBackground from "../components/TheHeadBackground";
import ArticleMediumItem from "../components/ArticleMediumItem";
import ArticleList from "../components/ArticleList";
import ArticleItem from "../components/ArticleItem";
import ThePagination from "../components/ThePagination";
import TheErrorMesage from "../components/TheErrorMesage";

const articlesStore = useArticlesStore();
const router = useRouter();
let page = ref(1);
const elementRef = ref(null);

onMounted(async () => {
  await articlesStore.getLastItem();
});

watch(
  () => parseInt(getQueryParameter(router, QUERY_PARAMS.PAGE)) || 1,
  async (currentPage) => {
    page.value = currentPage;
    await articlesStore.getDataByParams({
      page: page.value,
      limit: 6,
    });
  },
  { immediate: true, deep: true }
);

scrollToQueryChange(router, elementRef);
</script>

<template>
  <div class="top">
    <the-head-background :current-page="PAGE_BLOG"></the-head-background>
    <the-error-mesage v-show="articlesStore.error">
      {{ articlesStore.error }}</the-error-mesage
    >
    <div class="main-content" v-show="!articlesStore.error">
      <section class="articles-and-news">
        <div class="container">
          <div class="articles-and-news__content">
            <h2 class="articles-and-news__title_latest">Latest Post</h2>
          </div>
          <article-medium-item
            v-if="Object.keys(articlesStore.lastItem).length"
            class="article-latest__desctop"
            :article="articlesStore.lastItem"
          ></article-medium-item>
          <div class="container-for-article">
            <article-item
              v-if="Object.keys(articlesStore.lastItem).length"
              class="article-latest__mobile"
              :article="articlesStore.lastItem"
            ></article-item>
          </div>
        </div>
      </section>

      <section class="articles-and-news" ref="elementRef">
        <div class="container">
          <div class="articles-and-news__content">
            <h2 class="articles-and-news__title_latest">Articles &amp; News</h2>
          </div>
          <div class="articles-and-news__flex">
            <the-error-mesage v-show="articlesStore.data.length === 0"
              >Not found :(</the-error-mesage
            >
            <article-list
              v-if="articlesStore.data.length"
              :articles="articlesStore.data"
            />
            <the-pagination
              v-if="!articlesStore.loader"
              :totalPages="articlesStore.paginationInfo"
            ></the-pagination>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";

.articles-and-news__title_latest {
  @include title-styles;
  text-align: start;
  padding-bottom: 40px;
  @media (max-width: 1200px) {
    text-align: center;
  }
}

.container-for-article {
  width: 100%;
  display: flex;
  justify-content: center;
}

.article-latest__desctop {
  @media (max-width: 620px) {
    display: none;
  }
}

.article-latest__mobile {
  display: none;
  @media (max-width: 620px) {
    display: block;
  }
}
</style>
