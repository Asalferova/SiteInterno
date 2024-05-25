<script setup>
import { ref, defineProps, onMounted, defineEmits, computed } from "vue";
import { useRouter } from "vue-router";
import { BUTTON_CIRCLE_PAGINATION, QUERY_PARAMS } from "/src/constants.js";
import { getQueryParameter, updateQuery } from "/src/utils/routerUtils.js";
import BaseButton from "./UI/BaseButton.vue";
import { ICON_ARROW_BUTTON_SMALL } from "../icons";
import BaseIcon from "./UI/BaseIcon.vue";

const props = defineProps({
  totalPages: {
    default: 1,
    type: Number,
  },
});

const router = useRouter();
const MAX_VISIBLE_PAGES = 5;
const queriedPage = parseInt(getQueryParameter(router, QUERY_PARAMS.PAGE));

const totalPages = ref(props.totalPages);
const currentPage = ref(
  (queriedPage <= totalPages.value ? queriedPage : 1) || 1
);
const paginatedButtons = computed(() => {
  if (totalPages.value <= MAX_VISIBLE_PAGES) {
    return Array.from({ length: totalPages.value }, (_, index) => index + 1);
  } else {
    const buttons = [1];
    if (currentPage.value > 2) buttons.push("...");
    for (
      let i = Math.max(2, currentPage.value - 1);
      i <= Math.min(currentPage.value + 1, totalPages.value - 1);
      i++
    ) {
      buttons.push(i);
    }
    if (currentPage.value < totalPages.value - 1) buttons.push("...");
    buttons.push(totalPages.value);
    return buttons;
  }
});

const emit = defineEmits(["update:currentPage"]);

const goToPage = (page) => {
  if (page !== "...") {
    currentPage.value = page;
    updateQuery(router, { page: currentPage.value });
  }
  emit("update:currentPage", page);
};

onMounted(() => {
  emit("update:currentPage", currentPage.value);
});
</script>
<template>
  <div class="pagination">
    <base-button
      :type="BUTTON_CIRCLE_PAGINATION"
      @click="goToPage(currentPage - 1)"
      :disabled="currentPage === 1"
      ><base-icon
        :name="ICON_ARROW_BUTTON_SMALL"
        :style="'transform: rotate(180deg);'"
      ></base-icon
    ></base-button>
    <base-button
      :type="BUTTON_CIRCLE_PAGINATION"
      v-for="button in paginatedButtons"
      :key="button"
      @click="goToPage(button)"
      :isSelected="button === currentPage"
    >
      {{ button < 10 ? "0" + button : button }}
    </base-button>
    <base-button
      :type="BUTTON_CIRCLE_PAGINATION"
      @click="goToPage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      ><base-icon :name="ICON_ARROW_BUTTON_SMALL"></base-icon
    ></base-button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/variables.scss";
.pagination {
  @include flexbox(row, center, center);
  gap: 20px;
  padding-top: 51px;

  svg {
    width: 50px;
    height: 51.3px;
    fill: $color-background-light;
  }
  @media (max-width: 620px) {
    padding-top: 21px;
  }
}
</style>
