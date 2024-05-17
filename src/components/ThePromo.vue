<script setup>
import BaseNavigationButton from "./UI/BaseNavigationButton.vue";
import { navigate } from "/src//utils/routerUtils.js";
import { PAGE_PRODUCTS } from "/src/constants.js";
</script>

<template>
  <section class="promo">
    <div class="promo__position">
      <picture>
        <source
          media="(max-width: 619px)"
          srcset="/SiteInterno/img/promo-small.webp"
          type="image/webp"
        />
        <source srcset="/SiteInterno/img/promo-large.webp" type="image/webp" />
        <img
          src="/SiteInterno/img/imgPromo-1200x760.png"
          alt="Promo image"
          class="promo__image"
          loading="lazy"
        />
      </picture>

      <div class="promo__content">
        <h2 class="promo__title">Let Your Home Be Unique</h2>
        <p class="promo__text">
          There are many variations of the passages of lorem Ipsum from
          available, majority.
        </p>
        <base-navigation-button @click="navigate($router, PAGE_PRODUCTS)">
          Get Started
        </base-navigation-button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";
.promo {
  &__position {
    position: relative;
    min-height: 342px;
  }
  &__image {
    border-radius: $border-radius-xxlarge;
  }
  &__content {
    @include position-absolute(50%, 23%, auto, auto, translate(-50%, -50%));
    color: $color-text-default;
    max-width: 36%;
  }
  &__title {
    @include text-styles(
      $color-text-default,
      $font-family-heading,
      $font-size-heading-xxxxlarge,
      125%,
      0.36px
    );
    font-weight: 400;
    margin-bottom: 15px;
  }
  &__text {
    @include default-text-styles;
    margin-bottom: 21px;
  }

  @media (max-width: 1200px) {
    &__content {
      max-width: 50%;
      top: 55%;
      left: 33%;
    }
  }
  @media (max-width: 1024px) {
    &__content {
      max-width: 55%;
    }
  }

  @media (max-width: 769px) {
    &__title {
      font-size: $font-size-heading-xlarge;
      margin-bottom: 20px;
    }
    &__content {
      max-width: 52%;
      top: 54%;
    }
  }
  @media (max-width: 620px) {
    &__content {
      max-width: 55%;
      top: 55%;
      left: 38%;
    }
    &__text {
      display: none;
    }
    &__position {
      min-height: 270px;
    }
  }

  @media (max-width: 440px) {
    &__position {
      min-height: 190px;
    }
    &__image {
      border-radius: $border-radius-medium;
    }
    &__title {
      text-align: center;
      margin-bottom: 15px;
    }
    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 65%;
      top: 55%;
      left: 50%;
    }
  }
}
</style>
