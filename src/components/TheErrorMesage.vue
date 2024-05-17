<template>
  <div class="error-message"><slot></slot></div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";
.error-message {
  @include default-text-styles;
  text-align: center;
  background-color: $color-background-highlight;
  border: 1px solid $color-text-highlight;
  padding: 50px;
  border-radius: 5px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
}
</style>
