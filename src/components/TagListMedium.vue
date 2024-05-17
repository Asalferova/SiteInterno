<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import { handleTagSelect } from "/src/utils/tagUtils.js";
import BaseTag from "./UI/BaseTag.vue";
import { TAG_MEDIUM } from "/src/constants.js";
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
  <nav class="tags__items">
    <div v-for="tag in props.tags" :key="tag">
      <base-tag
        class="btn-tag"
        :type="TAG_MEDIUM"
        :isSelected="props.selectedTags.includes(tag)"
        @select="handleTagClick(tag)"
        >{{ tag }}</base-tag
      >
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.tags__items {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  border: 1px solid $color-text-highlight;
  border-radius: $border-radius-small;
  gap: 0;
  @media (max-width: 620px) {
    flex-wrap: nowrap;
  }
}

.btn-tag {
  min-height: 100%;
}
</style>
