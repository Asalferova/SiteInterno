<script setup>
import { ref, watch, reactive } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useArticlesStore } from "../stores/articlesStore";
import {
  PAGE_BLOG_DETAILS,
  QUERY_PARAMS,
  TAG_LIST_LARGE,
} from "../constants.js";
import { getQueryParameter } from "../utils/routerUtils.js";
import { scrollToQueryChange } from "../utils/scrollUtils.js";
import TheHeadBackground from "../components/TheHeadBackground";
import TheErrorMesage from "../components/TheErrorMesage";
import ArticleFullList from "../components/ArticleFullList";
import TagList from "../components/TagList";

const router = useRouter();
const articlesStore = useArticlesStore();
const { error, data, uniqueTags } = storeToRefs(articlesStore);
const elementRef = ref(null);
const params = reactive({
  page: 1,
  id: getQueryParameter(router, QUERY_PARAMS.ID) || null,
  [QUERY_PARAMS.TAG]: [],
  limit: 3,
});

function updateSelectedTags(value) {
  params[QUERY_PARAMS.TAG] = value;
  params.id = null;
}
const handleVisibilityChange = (isVisible) => {
  if (isVisible && !articlesStore.allDataLoaded) {
    params.limit += 3;
  }
};

articlesStore.getUniqueTags();

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
    <the-head-background
      :current-page="PAGE_BLOG_DETAILS"
    ></the-head-background>
    <the-error-mesage v-if="error">{{ error }}</the-error-mesage>
    <div class="main-content" ref="elementRef">
      <div class="blog-details">
        <div class="container">
          <div class="blog-details__flex" v-if="!error && data.length">
            <article-full-list
              v-if="data.length"
              :articles="data"
            ></article-full-list>
            <tag-list
              v-if="uniqueTags.length"
              :type="TAG_LIST_LARGE"
              :tags="uniqueTags"
              @select="updateSelectedTags"
            ></tag-list>
          </div>
          <the-error-mesage v-else> Not found :( </the-error-mesage>
          <div
            v-show="data.length > 2"
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
