<script setup>
import { PAGE_HOME } from "../constants.js";
import { navigate } from "../utils/routerUtils.js";
import BaseNavigationButton from "../components/UI/BaseNavigationButton.vue";
</script>

<template>
  <div>
    <div class="not-found container">
      <div class="not-found__info">
        <h1 class="code">404</h1>
        <h2 class="message">
          We are sorry, but the page you requested was not found
        </h2>
        <base-navigation-button
          @click="navigate($router, PAGE_HOME)"
          class="not-found__button"
          >Back To Home</base-navigation-button
        >
      </div>
      <div><img class="img-404" src="img/NotFound.jpg" alt="not found" /></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";
.not-found {
  margin: auto;
  display: flex;
  gap: 81px;
  &__info {
    display: flex;
    flex-direction: column;
    max-width: 569px;
    padding-top: 5%;
  }
  &__button {
    max-width: 80%;
  }
}
.code {
  @include text-styles(#cda274, "DM Serif Display", 11.1rem, 125%, 1px);
  font-style: normal;
  font-weight: 400;
}
.message {
  @include text-styles(#292f36, "DM Serif Display", 2.1rem, 150%, 0.35px);
  font-style: normal;
  font-weight: 400;
  text-align: left;
  padding-bottom: $text-block-padding;
}
.img-404 {
  border-radius: 0px 0px 0px 25%;
  max-height: 75vh;
}

@media (max-width: 1200px) {
  .not-found {
    gap: 31px;
    &__info {
      align-items: center;
    }
  }
  .message {
    font-size: 1.5rem;
    text-align: center;
  }
  .code {
    font-size: 7.1rem;
  }
}
@media (max-width: 620px) {
  .not-found {
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 41px;
  }
  .img-404 {
    border-radius: 50px;
  }
}
</style>
