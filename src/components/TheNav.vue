<script setup>
import { defineProps } from "vue";
import { NAV_ITEMS } from "../constants.js";

defineProps({
  navClass: String,
  linkClass: String,
});
</script>

<template>
  <ul :class="navClass">
    <li v-for="(page, href) in NAV_ITEMS" :key="page">
      <router-link :to="href" :class="linkClass">{{ page }} </router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";
.header__link {
  @include header__link-styles;
}
.footer__link {
  @include footer__link-styles;
}
.router-link-active {
  font-weight: bold;
}
.footer__menu li {
  transition: transform 0.3s;
}
.footer__menu li:hover {
  transform: scale(1.05);
}
.burger-menu__list-items {
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
}

.header__menu li,
.burger-menu__list-items li {
  transition: transform 0.3s;
}

.header__menu li:hover,
.burger-menu__list-items li:hover {
  transform: scale(1.2);
}
</style>
