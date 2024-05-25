<script setup>
import { watch, ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { PAGE_BLOG } from "../constants.js";
import { storeToRefs } from "pinia";
import { useArticlesStore } from "../stores/articlesStore";
import { scrollToQueryChange } from "../utils/scrollUtils.js";
import TheHeadBackground from "../components/TheHeadBackground";
import ArticleMediumItem from "../components/ArticleMediumItem";
import ArticleList from "../components/ArticleList";
import ArticleItem from "../components/ArticleItem";
import ThePagination from "../components/ThePagination";
import TheErrorMesage from "../components/TheErrorMesage";

const router = useRouter();
const articlesStore = useArticlesStore();
const { error, lastItem, data, loader, paginationInfo } =
  storeToRefs(articlesStore);
const params = reactive({
  page: 1,
  limit: 6,
});
const elementRef = ref(null);

function updateCurrentPage(value) {
  params.page = value;
}
articlesStore.getLastItem();
watch(
  () => params,
  async () => {
    await articlesStore.getDataByParams(params);
  },
  { immediate: true, deep: true }
);

scrollToQueryChange(router, elementRef);
</script>

<template>
  <div class="top">
    <the-head-background :current-page="PAGE_BLOG"></the-head-background>
    <the-error-mesage v-if="error"> {{ error }}</the-error-mesage>
    <div class="main-content" v-if="!error">
      <section class="articles-and-news" v-if="lastItem">
        <div class="container">
          <div class="articles-and-news__content">
            <h2 class="articles-and-news__title_latest">Latest Post</h2>
          </div>
          <article-medium-item
            class="article-latest__desctop"
            :article="lastItem"
          ></article-medium-item>
          <div class="container-for-article">
            <article-item
              class="article-latest__mobile"
              :article="lastItem"
            ></article-item>
          </div>
        </div>
      </section>

      <section v-if="data.length" class="articles-and-news" ref="elementRef">
        <div class="container">
          <div class="articles-and-news__content">
            <h2 class="articles-and-news__title_latest">Articles &amp; News</h2>
          </div>
          <div class="articles-and-news__flex">
            <article-list :articles="data" />
            <the-pagination
              v-if="!loader"
              :totalPages="paginationInfo.total_pages"
              @update:currentPage="updateCurrentPage"
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
