<script setup>
import { ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useArticlesStore } from "../stores/articlesStore";
import { PAGE_BLOG_DETAILS, QUERY_PARAMS } from "../constants.js";
import { getQueryParameter } from "../utils/routerUtils.js";
import { useInfinitePagination } from "../utils/paginationUtils.js";
import { scrollToQueryChange } from "../utils/scrollUtils.js";
import TheHeadBackground from "../components/TheHeadBackground";
import TheErrorMesage from "../components/TheErrorMesage";
import ArticleFullList from "../components/ArticleFullList";
import TagsListLarge from "../components/TagsListLarge";

const articlesStore = useArticlesStore();
const router = useRouter();
const selectedTags = ref([]);
const idValue = ref(null);
let page = ref(1);
const elementRef = ref(null);

const { limit, handleVisibilityChange } = useInfinitePagination(articlesStore);

onMounted(async () => {
  await articlesStore.getUniqueTags();
});

watch(
  [
    () => getQueryParameter(router, QUERY_PARAMS.TAG),
    () => getQueryParameter(router, QUERY_PARAMS.ID),
    page,
    limit,
  ],
  async ([tagParam, idParam, currentPage, currentLimit]) => {
    selectedTags.value = tagParam ? tagParam : [];
    idValue.value = idParam;
    await articlesStore.getDataByParams({
      id: idValue.value,
      [QUERY_PARAMS.TAG]: selectedTags.value,
      page: currentPage,
      limit: currentLimit,
    });
  },
  { immediate: true, deep: true }
);

scrollToQueryChange(router, elementRef);
</script>
<template>
  <div class="top">
    <the-head-background
      :current-page="PAGE_BLOG_DETAILS"
    ></the-head-background>
    <div class="main-content" ref="elementRef">
      <div class="blog-details">
        <div class="container">
          <the-error-mesage v-show="articlesStore.error">{{
            articlesStore.error
          }}</the-error-mesage>
          <div class="blog-details__flex" v-show="!articlesStore.error">
            <the-error-mesage v-show="articlesStore.data.length === 0"
              >Not found :(</the-error-mesage
            >
            <article-full-list
              v-if="articlesStore.data.length"
              :articles="articlesStore.data"
            ></article-full-list>
            <tags-list-large
              v-if="articlesStore.uniqueTags.length"
              :tags="articlesStore.uniqueTags"
              :selectedTags="selectedTags"
            ></tags-list-large>
          </div>
          <div
            v-show="articlesStore.data.length"
            v-observe-visibility="handleVisibilityChange"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";

.blog-details {
  &__flex {
    @include flexbox(row, space-between);
    @media (max-width: 1200px) {
      gap: 20px;
    }
  }
  @media (max-width: 1024px) {
    &__flex {
      flex-direction: column-reverse;
    }
  }
}
</style>
