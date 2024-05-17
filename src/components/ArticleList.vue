<script setup>
import { defineProps } from "vue";
import { isArticlesValid } from "/src/validators.js";
import ArticleItem from "../components/ArticleItem";
const props = defineProps({
  articles: {
    type: Array,
    required: true,
    validator(articles) {
      const fields = ["id", "title", "tag", "date", "imageUrls", "order"];
      return isArticlesValid(articles, fields);
    },
  },
});
</script>
<template>
  <div
    v-if="props.articles && props.articles.length"
    class="articles-and-news__articles"
  >
    <transition-group name="list">
      <article-item
        v-for="article in props.articles"
        :key="article.id"
        :article="article"
      >
      </article-item>
    </transition-group>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";
.articles-and-news__articles {
  @include flexbox(row, center);
  gap: 27px;
  width: 100%;
  flex-wrap: wrap;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
