<script setup>
import TheNav from "../components/TheNav.vue";
import { ICON_BURGER_MENU, ICON_CLOSE } from "../icons";
import BaseIcon from "./UI/BaseIcon.vue";
</script>
<template>
  <div class="burger-menu">
    <label for="burger-menu__check" tabindex="0">
      <base-icon
        :name="ICON_BURGER_MENU"
        class="burger-menu__check"
        alt="menu"
      ></base-icon>
    </label>
    <div class="burger-menu__list">
      <the-nav
        :navClass="'burger-menu__list-items'"
        :linkClass="'header__link'"
      >
      </the-nav>
      <label class="close" for="burger-menu__check" tabindex="0">
        <base-icon
          :name="ICON_CLOSE"
          class="burger-menu__check"
          alt="close"
        ></base-icon>
      </label>
    </div>
    <input
      class="burger-menu__checkbox"
      id="burger-menu__check"
      type="checkbox"
    />
  </div>
</template>

<style lang="scss" scoped>
.burger-menu__list {
  position: fixed;
  top: 0;
  right: -100vw;
  z-index: 1;
  -webkit-transition: right 0.6s;
  transition: right 0.6s;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  padding: 132px;
}

#burger-menu__check {
  position: absolute;
  left: -999999px;
  visibility: hidden;
}

label[for="burger-menu__check"]:focus ~ .burger-menu__list {
  right: 0;
}

.close {
  position: absolute;
  top: 48px;
  right: 17%;
  cursor: pointer;
}

.burger-menu__check {
  width: 23px;
}
</style>
