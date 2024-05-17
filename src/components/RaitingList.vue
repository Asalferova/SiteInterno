<script setup>
import { ref, defineProps, watchEffect } from "vue";
import RaitingStar from "../components/UI/RaitingStar";

const props = defineProps({
  dataId: String,
});

const ratings = ref(JSON.parse(localStorage.getItem("ratings")) || {});

watchEffect(() => {
  const savedRating = ratings.value[`product_${props.dataId}`];
  if (savedRating) {
    ratings.value[`product_${props.dataId}`] = savedRating;
  }
});

function handleStarSelected(selectedStaro) {
  ratings.value[`product_${props.dataId}`] = `raiting_${selectedStaro}`;
  localStorage.setItem("ratings", JSON.stringify(ratings.value));
}
</script>

<template>
  <div>
    <form action="#" class="form" v-if="props.dataId">
      <div class="raiting-container">
        <div
          class="raiting"
          v-for="number in ['1', '2', '3', '4', '5']"
          :key="number"
        >
          <raiting-star
            :id="number"
            :selectedStar="
              ratings[`product_${props.dataId}`]
                ? ratings[`product_${props.dataId}`].split('_')[1]
                : null
            "
            @star-selected="handleStarSelected"
          ></raiting-star>
        </div>
      </div>
      <div>
        <p v-if="!ratings[`product_${props.dataId}`]" class="raiting-text">
          Leave a rating...
        </p>
        <p v-else class="raiting-text">Thank you for rating!</p>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.raiting-text {
  padding-top: 20px;
  @include default-text-styles;
}

.raiting-container {
  display: flex;
}

.raiting {
  font-size: 3em;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
