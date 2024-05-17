<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import { handleTagSelect } from "/src/utils/tagUtils.js";
import BaseTag from "./UI/BaseTag.vue";
import { TAG_LARGE } from "/src/constants.js";
const router = useRouter();
const props = defineProps({
  tags: {
    type: [Array, String],
    default: () => [],
  },
  selectedTags: {
    type: [Array, String],
    default: () => [],
  },
});
const handleTagClick = (tagValue) => {
  handleTagSelect(tagValue, router);
};
</script>

<template>
  <section class="tags">
    <h2 class="tags__heading">Tags</h2>
    <nav class="tags__items">
      <div v-for="tag in props.tags" :key="tag">
        <base-tag
          :type="TAG_LARGE"
          :isSelected="props.selectedTags.includes(tag)"
          @select="handleTagClick(tag)"
          >{{ tag }}</base-tag
        >
      </div>
    </nav>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";

.tags {
  padding-left: 10px;
  max-width: 22%;
  &__heading {
    @include text-styles(
      $color-text-default,
      $font-family-heading,
      $font-size-heading-large,
      125%,
      0.22px
    );
    padding-bottom: 24px;
  }
  &__items {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    &_brown {
      border: 1px solid $color-text-highlight;
      border-radius: $border-radius-small;
      gap: 0;
      @media (max-width: 620px) {
        flex-wrap: nowrap;
      }
    }
  }

  @media (max-width: 1024px) {
    max-width: 80%;
  }
  @media (max-width: 620px) {
    max-width: 99%;
  }
}
</style>
