<script setup>
import { defineProps } from "vue";
import { isBreadcrumbLinksValid } from "/src/validators.js";
import { navigate } from "/src/utils/routerUtils.js";
defineProps({
  breadcrumbLinks: {
    type: Array,
    required: true,
    validator: isBreadcrumbLinksValid,
  },
});
</script>

<template>
  <div class="breadcrumb">
    <div
      class="breadcrumb__box-link"
      v-for="crumb in breadcrumbLinks"
      :key="crumb.link"
    >
      <p
        class="breadcrumb__link"
        @click.stop
        @click="navigate($router, crumb.to)"
      >
        <span class="breadcrumb__text">{{ crumb.link }}</span>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";
.breadcrumb {
  display: flex;
  &__link {
    display: inline-block;
    transition: transform 0.3s;
    @include default-text-styles;
    &:hover {
      transform: scale(1.05);
    }
  }
  .breadcrumb__box-link:not(:last-child)::after {
    content: "/";
    @include default-text-styles;
    padding-left: 8px;
    padding-right: 8px;
    font-style: normal;
    font-weight: 400;
    transform: scale(1);
  }
}
</style>
