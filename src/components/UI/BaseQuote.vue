<script setup>
import { defineProps } from "vue";
defineProps({
  quote: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <blockquote class="quote">
    <p class="quote__q">{{ quote }}</p>
  </blockquote>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";

.quote {
  padding: 150px 220px 53px;
  margin-bottom: $text-block-padding;
  background-color: $color-background-highlight;
  border-radius: $border-radius-xlarge;
  position: relative;
  &__q {
    text-align: center;
    font-style: italic;
    font-weight: 400;
    @include text-styles(
      $color-text-highlight,
      $font-family-heading,
      $font-size-heading-large,
      125%,
      0.5px
    );

    &::before {
      content: "“";
      display: block;
      @include position-absolute(
        15%,
        53%,
        auto,
        auto,
        translateX(-50%) translateY(-50%) rotate(180deg)
      );
      text-align: center;
      font-style: italic;
      font-weight: 400;
      @include text-styles(
        $color-text-highlight,
        $font-family-heading,
        12.5rem,
        125%,
        4px
      );
    }
  }
  @media (max-width: 1200px) {
    padding: 130px 120px 53px;
  }
  @media (max-width: 620px) {
    padding: 70px 30px 33px;
    &__q {
      &::before {
        font-size: 9rem;
      }
    }
  }
}
</style>
