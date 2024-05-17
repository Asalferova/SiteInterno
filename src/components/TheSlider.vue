<script setup>
import { ref, defineProps } from "vue";
import { ICON_ARROW_BUTTON } from "../icons";
import BaseIcon from "./UI/BaseIcon.vue";

const props = defineProps({
  images: {
    type: Array,
    default: () => [],
  },
});

const activeIndex = ref(0);
let startX = 0;

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % props.images.length;
};

const prevSlide = () => {
  activeIndex.value =
    (activeIndex.value - 1 + props.images.length) % props.images.length;
};

const handleTouchStart = (e) => {
  startX = e.touches[0].clientX;
};

const handleTouchEnd = (e) => {
  const endX = e.changedTouches[0].clientX;
  const diffX = endX - startX;

  if (Math.abs(diffX) > 50) {
    if (diffX > 0) {
      prevSlide();
    } else {
      nextSlide();
    }
  }
};
</script>

<template>
  <div class="slider">
    <base-icon
      :name="ICON_ARROW_BUTTON"
      @click="prevSlide"
      class="slider__btn prev"
    ></base-icon>
    <div
      v-for="(image, index) in props.images"
      :key="index"
      class="slide"
      :class="{ 'active-slide': index === activeIndex }"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <img :src="image" alt="product image" loading="eager" />
    </div>
    <base-icon
      :name="ICON_ARROW_BUTTON"
      @click="nextSlide"
      class="slider__btn next"
    ></base-icon>
    <div class="dots">
      <span
        v-for="(image, index) in props.images"
        :key="index"
        class="dot"
        :class="{ 'active-dot': index === activeIndex }"
        @click="activeIndex = index"
      ></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";

.slider {
  position: relative;
  .slide {
    display: none;
  }

  .slide img {
    border-radius: $border-radius-large;
    box-shadow: $default-shadow;
  }

  .active-slide {
    display: block;
  }
  &__btn {
    position: absolute;
    top: 50%;
    cursor: pointer;
  }
  .prev {
    left: 5%;
    transform: rotate(180deg);
  }
  .next {
    right: 5%;
  }

  .dots {
    @include position-absolute(auto, auto, auto, -30px);
    width: 100%;
    @include flexbox(row, center);
  }

  .dot {
    height: 15px;
    width: 15px;
    margin: 0 5px;
    border-radius: $border-radius-circle;
    display: inline-block;
    transition: background-color 0.6s ease;
    border: 1px solid $color-text-secondary;
    cursor: pointer;
  }

  .active-dot {
    border: none;
    background-color: $color-text-secondary;
  }
}
</style>
