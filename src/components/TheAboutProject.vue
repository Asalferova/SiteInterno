<script setup>
const companiesInfo = [
  { id: 1, count: 12, desc: "Years Of Experiance" },
  { id: 2, count: 85, desc: "Success Project" },
  { id: 3, count: 15, desc: "Active Project" },
  { id: 4, count: 95, desc: "Happy CUstomers" },
];
</script>

<template>
  <div class="about-project">
    <div class="about-project__flex">
      <article
        class="about-project__desc"
        v-for="item in companiesInfo"
        :key="item.id"
      >
        <h3 class="about-project__figure">{{ item.count }}</h3>
        <p class="about-project__text">{{ item.desc }}</p>
      </article>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";
.about-project {
  background-color: $color-background-highlight;
  padding: 151px 0;
  &__flex {
    @include flexbox(row, center, center);
    gap: 76px;
    flex-wrap: wrap;
  }
  &__figure {
    @include text-styles(
      $color-text-highlight,
      $font-family-heading,
      $font-size-heading-xxxxxlarge,
      125%,
      1.7px
    );
  }
  &__text {
    @include default-text-styles;
  }
  &__desc {
    text-align: center;
    &:not(:last-child) {
      border-right: 1px solid $color-text-highlight;
      padding-right: 54px;
    }
  }
}
@media (max-width: 1200px) {
  .container {
    width: 768px;
  }
  .about-project {
    padding: 41px 0;
    @include flexbox(column, flex-start, center);
    &__flex {
      flex-direction: column;
      gap: 26px;
      width: 30%;
    }
    &__desc {
      width: 100%;
      &:not(:last-child) {
        border-right: none;
        padding-right: 0;
        border-bottom: 1px solid $color-text-highlight;
        padding-bottom: 24px;
      }
    }
    &__figure {
      font-size: 3rem;
    }
    &__text {
      font-size: $font-size-text-medium;
    }
  }
}
</style>
