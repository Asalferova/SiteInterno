<script setup>
import { defineProps } from "vue";
import { isArticleValid } from "/src/validators.js";
import {
  BUTTON_CIRCLE_SMALL,
  QUERY_PARAMS,
  PAGE_BLOG_DETAILS,
} from "/src/constants.js";
import { navigate } from "/src/utils/routerUtils.js";
import BaseButton from "./UI/BaseButton.vue";
import { ICON_ARROW_BUTTON_SMALL } from "../icons";
import BaseIcon from "./UI/BaseIcon.vue";
import BaseDate from "./UI/BaseDate.vue";

const props = defineProps({
  article: {
    type: Object,
    required: true,
    validator(article) {
      const fields = ["id", "title", "tag", "date", "imageUrls"];
      return isArticleValid(article, fields);
    },
  },
});
</script>

<template>
  <article
    v-if="article && Object.keys(props.article).length"
    @click="
      navigate($router, PAGE_BLOG_DETAILS, {
        [QUERY_PARAMS.ID]: props.article.id,
      })
    "
    class="article-latest"
  >
    <div class="article-latest__image-link">
      <picture>
        <img
          class="article-latest__img"
          :src="props.article.imageUrls?.medium"
          :alt="props.article.tag + ' image'"
          style="width: 100%"
          loading="lazy"
        />
      </picture>
    </div>
    <div class="article-latest__content">
      <h3 class="article-latest__title">{{ props.article.title }}</h3>
      <p
        class="article-latest__text"
        v-for="text in props.article.text"
        :key="text"
      >
        {{ text }}
      </p>

      <div class="article-latest__some">
        <base-date :date="props.article.date"></base-date>
        <base-button :type="BUTTON_CIRCLE_SMALL"
          ><base-icon :name="ICON_ARROW_BUTTON_SMALL"></base-icon
        ></base-button>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";

.article-latest {
  width: 100%;
  @include flexbox(row);
  gap: 65px;
  @include article-item;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
    background-color: $color-border-light;
  }
  &__content {
    @include flexbox(column);
    max-width: 39%;
    padding: 30px 0;
  }

  &__image-link {
    width: 48%;
  }

  &__img {
    border-radius: $border-radius-xlarge;
    margin-bottom: 0;
  }

  &__some {
    @include flexbox(row, space-between, center);
    margin-top: auto;
  }

  &__title {
    @include text-styles(
      $color-text-default,
      $font-family-heading,
      $font-size-heading-large,
      125%,
      0.5px
    );
    margin-bottom: 30px;
    max-width: 86%;
  }
  &__text {
    @include default-text-styles;
    padding-bottom: 40.5px;
  }
  @media (max-width: 1200px) {
    height: 436px;
  }
  @media (max-width: 1024px) {
    gap: 35px;
    height: 336px;
    &__text {
      padding-bottom: 0;
    }
    &__text:not(:last-of-type) {
      display: none;
    }
  }
  @media (max-width: 769px) {
    height: 265px;
    &__text {
      display: none;
    }
  }
}
</style>
