<script>
import { TAG_LIST_MEDIUM, TAG_LIST_LARGE } from "/src/constants.js";
const typeClasses = {
  [TAG_LIST_MEDIUM]: "tags__medium",
  [TAG_LIST_LARGE]: "tags",
};
</script>

<script setup>
import { ref, defineProps, defineEmits, onMounted } from "vue";
import { getQueryParameter, updateQuery } from "/src/utils/routerUtils.js";
import { useRouter } from "vue-router";
import BaseTag from "./UI/BaseTag.vue";
import { TAG_MEDIUM, QUERY_PARAMS, TAG_LARGE } from "/src/constants.js";
const router = useRouter();
const props = defineProps({
  tags: {
    type: [Array, String],
    default: () => [],
  },
  type: {
    default: TAG_LIST_LARGE,
    type: String,
  },
});
const selectedTags = ref(getQueryParameter(router, QUERY_PARAMS.TAG) || []);
const emit = defineEmits(["select"]);

const handleTagClick = (tagValue) => {
  selectedTags.value = Array.isArray(selectedTags.value)
    ? [...selectedTags.value]
    : [];
  const index = selectedTags.value.indexOf(tagValue);
  if (index === -1) {
    selectedTags.value.push(tagValue);
  } else {
    selectedTags.value.splice(index, 1);
  }
  updateQuery(router, {
    [QUERY_PARAMS.TAG]: selectedTags.value,
  });
  emit("select", selectedTags.value);
};

onMounted(() => {
  if (selectedTags.value.length) {
    emit("select", selectedTags.value);
  }
});
</script>

<template>
  <section :class="typeClasses[type]">
    <h2 class="heading">Tags</h2>
    <nav class="tags__items">
      <div v-for="tag in props.tags" :key="tag">
        <base-tag
          class="btn-tag"
          :type="props.type === TAG_LIST_LARGE ? TAG_LARGE : TAG_MEDIUM"
          :isSelected="selectedTags.includes(tag)"
          @select="handleTagClick(tag)"
          >{{ tag }}</base-tag
        >
      </div>
    </nav>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/mixins.scss";
.tags {
  padding-left: 10px;
  max-width: 22%;
  .heading {
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
.tags__medium {
  .heading {
    display: none;
  }
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
}
</style>
