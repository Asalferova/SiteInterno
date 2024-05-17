import { computed } from "vue";
import { updateQuery, getQueryParameter } from "./routerUtils.js";
import { QUERY_PARAMS } from "../constants.js";

export function getButtonRange(currentButton, totalButtons) {
  if (totalButtons <= 5) {
    return Array.from({ length: totalButtons }, (_, index) => index + 1);
  } else {
    const buttons = [1];
    if (currentButton > 2) buttons.push("...");
    for (
      let i = Math.max(2, currentButton - 1);
      i <= Math.min(currentButton + 1, totalButtons - 1);
      i++
    ) {
      buttons.push(i);
    }
    if (currentButton < totalButtons - 1) buttons.push("...");
    buttons.push(totalButtons);
    return buttons;
  }
}

export function usePagination(router, currentPage, totalPages) {
  const paginatedButtons = computed(() =>
    getButtonRange(currentPage, totalPages)
  );

  const changePage = (newPage) => {
    currentPage = newPage;
    const currentTags = getQueryParameter(router, QUERY_PARAMS.TAG);
    updateQuery(router, { page: newPage, [QUERY_PARAMS.TAG]: currentTags });
  };

  const prevPage = () => {
    if (currentPage > 1) changePage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage < totalPages) changePage(currentPage + 1);
  };

  const goToPage = (page) => {
    if (page !== "...") changePage(page);
  };

  return { paginatedButtons, prevPage, nextPage, goToPage };
}
