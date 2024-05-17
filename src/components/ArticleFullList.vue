<script setup>
import { defineProps } from "vue";
import { isArticlesValid } from "/src/validators.js";
import ArticleFullItem from "./ArticleFullItem";
defineProps({
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
  <div v-if="articles && articles.length" class="details">
    <transition-group name="list">
      <article-full-item
        v-for="article in articles"
        :key="article.id"
        :article="article"
      >
      </article-full-item
    ></transition-group>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";
.details {
  max-width: 799px;
  @include flexbox(column);
  gap: 30px;
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
