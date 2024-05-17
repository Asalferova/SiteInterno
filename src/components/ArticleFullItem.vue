<script setup>
import { defineProps } from "vue";
import { isArticleValid } from "/src/validators.js";
import BaseDate from "./UI/BaseDate.vue";
import BaseText from "./UI/BaseText.vue";
import BaseParagraph from "./UI/BaseParagraph.vue";
import BaseHeading from "./UI/BaseHeading.vue";
import BaseImage from "./UI/BaseImage.vue";
import BaseListItems from "./UI/BaseListItems.vue";
import BaseQuote from "./UI/BaseQuote.vue";
defineProps({
  article: {
    type: Object,
    required: true,
    validator(article) {
      const fields = ["id", "title", "tag", "date", "imageUrls", "order"];
      return isArticleValid(article, fields);
    },
  },
});

const getComponent = (item) => {
  const componentsMap = {
    title: BaseHeading,
    image: BaseImage,
    date: BaseDate,
    text: BaseText,
    listItems: BaseListItems,
    quote: BaseQuote,
    additionalText: BaseParagraph,
  };
  return componentsMap[item] || null;
};

const articleProps = (item, article) => {
  const propsMap = {
    title: { title: article.title },
    image: { image: article.imageUrls.large, alt: article.tag + " image" },
    date: { date: article.date },
    text: { text: article.text },
    listItems: { listItems: article.listItems },
    quote: { quote: article.quote },
    additionalText: { paragraph: article.additionalText },
  };
  return propsMap[item] || {};
};
</script>

<template>
  <article
    class="article-full"
    v-if="article && Object.keys(article).length > 1"
  >
    <component
      v-for="(item, index) in article.order"
      :is="getComponent(item)"
      :key="index"
      v-bind="articleProps(item, article)"
    ></component>
  </article>
</template>

<style lang="scss" scoped>
.article-full {
  max-width: 799px;
  .date {
    flex-direction: row-reverse;
  }
}
</style>
