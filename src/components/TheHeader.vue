<script setup>
import TheNav from "../components/TheNav.vue";
import TheLogo from "../components/TheLogo.vue";
import TheBurgerMenu from "../components/TheBurgerMenu.vue";
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__flex">
        <the-logo class="header__logo"></the-logo>
        <nav>
          <the-nav
            class="header__menu-desctop"
            :navClass="'header__menu'"
            :linkClass="'header__link'"
          ></the-nav>
        </nav>
        <div class="header__menu-mobile">
          <the-burger-menu></the-burger-menu>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";
.header {
  @include flexbox(row, space-between, center);
  position: sticky;
  top: 0;
  z-index: 199;
  background-color: $color-background-light;
  min-height: 50px;
  &__flex {
    @include flexbox(row, space-between, center);
    padding: 2rem 0;
  }
  &__menu {
    @include flexbox(row, flex-start, center);
  }
  &__logo {
    padding: $text-block-padding;
  }
  @media (max-width: 620px) {
    &__menu {
      @include flexbox(column, center, center);
    }
  }
  @media (max-width: 620px) {
    .header__menu-mobile {
      display: block;
      padding: 20px;
    }
    .header__menu-desctop {
      display: none;
    }
  }

  @media (min-width: 1440px) {
    .container {
      width: 1430px;
    }
  }
  @media (min-width: 1440px) {
    .container {
      width: 90%;
    }
  }
}

.header__menu-mobile {
  display: none;
}
</style>
