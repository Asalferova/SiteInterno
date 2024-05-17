<script setup>
import { formatedDate } from "@/functions";
import { defineProps } from "vue";
import { isDateValid } from "/src/validators.js";
defineProps({
  date: {
    type: String,
    required: true,
    validator: isDateValid,
  },
});
</script>

<template>
  <div class="date">
    <time :datetime="formatedDate(date)" class="date__time"> {{ date }}</time>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";
.date {
  @include flexbox(row);
  margin-bottom: 15px;
  margin-top: auto;
  &__time {
    @include default-text-ui-styles;
    text-transform: capitalize;
  }
  @media (max-width: 620px) {
    &__time {
      font-size: $font-size-text-medium;
    }
  }
}
</style>
