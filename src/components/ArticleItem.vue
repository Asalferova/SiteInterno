<script setup>
import { defineProps } from "vue";
import { isArticleValid } from "/src/validators.js";
import {
  BUTTON_CIRCLE_SMALL,
  PAGE_BLOG_DETAILS,
  TAG_SMALL,
  QUERY_PARAMS,
} from "/src/constants.js";
import { navigate } from "/src/utils/routerUtils.js";
import BaseButton from "./UI/BaseButton.vue";
import BaseTag from "./UI/BaseTag.vue";
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
    v-if="props.article && Object.keys(props.article).length"
    class="article"
    @click="
      navigate($router, PAGE_BLOG_DETAILS, {
        [QUERY_PARAMS.ID]: props.article.id,
      })
    "
  >
    <base-tag
      :type="TAG_SMALL"
      class="link-section"
      @click.stop
      @click="
        navigate($router, PAGE_BLOG_DETAILS, {
          [QUERY_PARAMS.TAG]: props.article.tag,
        })
      "
      >{{ props.article.tag }}</base-tag
    >

    <div class="article__image-link">
      <picture>
        <img
          class="article__img"
          :src="props.article.imageUrls?.small"
          :alt="props.article.tag + ' image'"
          style="width: 100%"
          loading="lazy"
        />
      </picture>
    </div>
    <h3 class="article__title">
      {{ props.article.title }}
    </h3>
    <div class="article__some">
      <base-date :date="props.article.date"></base-date>
      <base-button :type="BUTTON_CIRCLE_SMALL"
        ><base-icon :name="ICON_ARROW_BUTTON_SMALL"></base-icon
      ></base-button>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";

.article {
  width: 100%;
  height: 100%;
  max-width: 380px;
  @include flexbox(column);
  transition: background-color 0.3s, transform 0.3s;
  @include article-item;
  position: relative;
  height: 535px;

  &:nth-child(2) {
    background-color: $color-border-light;
  }

  &:hover {
    background-color: $color-border-light;
    transform: scale(1.05);
  }

  &__tag {
    @include position-absolute(48%, 8%);
    z-index: 99;
  }

  &__image-link {
    position: relative;
    min-height: 289px;
  }

  &__img {
    margin-bottom: 22px;
    border-top-left-radius: $border-radius-large;
    border-top-right-radius: $border-radius-large;
    height: 289px;
  }

  &__some {
    @include flexbox(row, space-between, center);
    margin-bottom: 15px;
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
    margin-bottom: 10px;
    max-width: 86%;
  }

  @media (max-width: 620px) {
    max-width: 350px;
    height: 490px;
    &__title {
      font-size: $font-size-heading-xlarge;
    }
    &__image-link {
      min-height: 259px;
    }
    &__img {
      height: 259px;
    }
  }
  @media (max-width: 440px) {
    max-width: 310px;
    height: 450px;
    &__title {
      font-size: 1.8rem;
    }
    &__image-link {
      min-height: 241px;
    }
    &__img {
      height: 241px;
    }
    &__tag {
      @include position-absolute(48%, 11%);
    }
  }
}
.link-section {
  @include position-absolute(48%, 10%);
  z-index: 99;
}
</style>
