<script setup>
import { ICON_LINKEDIN, ICON_TWITTER } from "../icons";
import BaseIcon from "./UI/BaseIcon.vue";
</script>
<template>
  <div class="social-icons">
    <a
      href="https://twitter.com"
      target="_blank"
      class="social-icons__icon"
      aria-label="twitter"
    >
      <base-icon :name="ICON_TWITTER"></base-icon>
    </a>
    <a
      href="https://linkedin.com"
      target="_blank"
      class="social-icons__icon"
      aria-label="linkedin"
    >
      <base-icon :name="ICON_LINKEDIN" width="19" height="16"></base-icon>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.social-icons {
  display: flex;
  gap: 54px;
  &__icon {
    transition: transform 0.3s;
    padding: 10px;
    &:hover {
      transform: scale(1.3);
    }
  }
}
</style>
