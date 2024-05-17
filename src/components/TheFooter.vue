<script setup>
import TheNav from "../components/TheNav.vue";
import TheLogo from "../components/TheLogo.vue";
import SocialIconList from "../components/SocialIconList.vue";
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__flex">
        <div class="footer__information">
          <the-logo class="footer__logo"></the-logo>
          <p class="footer__text">
            It is a long established fact that a reader will be distracted
            lookings.
          </p>
          <social-icon-list></social-icon-list>
        </div>
        <div class="footer__pages">
          <p class="footer__heading">Pages</p>
          <nav>
            <the-nav
              :navClass="'footer__menu'"
              :linkClass="'footer__link'"
            ></the-nav>
          </nav>
        </div>
        <address class="footer__contacts">
          <p class="footer__heading">Contact</p>
          <a
            class="footer__link footer__link_small"
            href="https://www.google.com/maps/dir/New+York,+%D0%9D%D1%8C%D1%8E-%D0%99%D0%BE%D1%80%D0%BA,+%D0%A1%D0%A8%D0%90/41.0465118,-74.8285216/@43.8664999,-40.6390706,4z/data=!4m8!4m7!1m5!1m1!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!2m2!1d-74.0059728!2d40.7127753!1m0?hl=ru&entry=ttu"
            target="_blank"
            >55 East Birchwood Ave. Brooklyn, New York 11201</a
          >
          <a class="footer__link" href="mailto:interno@.ru" target="_blank"
            >contact@interno.com</a
          >
          <a class="footer__link" href="tel:+5656notfound">(123) 456 - 7890</a>
        </address>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";
.footer {
  padding-top: $default-blocks-padding;
  padding-bottom: 50px;
  &__flex {
    @include flexbox(row, space-between);
    gap: 101px;
  }
  &__information {
    @include flexbox(column);
    row-gap: 25px;
    max-width: 32.75%;
  }
  &__text {
    @include default-text-styles;
    padding-bottom: 31px;
  }
  &__pages {
    flex-grow: 1;
    flex-basis: 0;
    max-width: 32.75%;
  }
  &__menu {
    @include flexbox(column);
  }
  &__contacts {
    @include flexbox(column);
    flex-grow: 1;
    flex-basis: 0;
    max-width: 32.75%;
  }
  &__heading {
    @include text-styles(
      $color-text-default,
      $font-family-heading,
      $font-size-heading-large,
      125%,
      0.22px
    );
    padding-bottom: 26px;
  }
  &__link {
    @include footer__link-styles;
  }
  @media (max-width: 1200px) {
    padding-bottom: 50px;
  }
  @media (max-width: 620px) {
    padding-top: $default-blocks-padding-mobile;
    &__flex {
      @include flexbox(column, space-between, center);
      gap: 50px;
    }
    &__pages {
      display: none;
    }
    &__information {
      @include flexbox(column, space-between, center);
      max-width: 95%;
    }
    &__contacts {
      @include flexbox(column, space-between, center);
      max-width: 95%;
      text-align: center;
    }
    &__text {
      text-align: center;
    }
  }
  @media (min-width: 1440px) {
    &__flex {
      gap: 201px;
    }
  }
  @media (min-width: 2200px) {
    @include flexbox(row, flex-end);
    &__pages {
      text-align: center;
    }
    &__contacts {
      max-width: 22.75%;
    }
  }
}
@media (min-width: 1440px) {
  .container {
    width: 90%;
  }
}
</style>
