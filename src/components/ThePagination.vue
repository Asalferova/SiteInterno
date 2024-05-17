<script setup>
import { ref, defineProps } from "vue";
import { useRouter } from "vue-router";
import { BUTTON_CIRCLE_PAGINATION, QUERY_PARAMS } from "/src/constants.js";
import { usePagination } from "/src/utils/paginationUtils.js";
import { getQueryParameter } from "/src/utils/routerUtils.js";
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
const currentPage = ref(
  parseInt(getQueryParameter(router, QUERY_PARAMS.PAGE)) || 1
);
const totalPages = ref(props.totalPages);

const { paginatedButtons, prevPage, nextPage, goToPage } = usePagination(
  router,
  currentPage.value,
  totalPages.value
);
</script>
<template>
  <div class="pagination">
    <base-button
      :type="BUTTON_CIRCLE_PAGINATION"
      @click="prevPage"
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
      @click="nextPage"
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
