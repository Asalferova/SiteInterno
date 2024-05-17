import axios from "axios";
import { ref } from "vue";
import { defineStore } from "pinia";
import { URL_ARTICLES as articlesUrl, QUERY_PARAMS } from "../constants";

export const useArticlesStore = defineStore("articlesStore", () => {
  const data = ref([]);
  const paginationInfo = ref({});
  const lastItem = ref({});
  const uniqueTags = ref([]);
  const loader = ref(false);
  const error = ref(null);
  let allDataLoaded = ref(false);

  const getDataByParams = async (
    params = {
      [QUERY_PARAMS.TAG]: [],
      page: 1,
      limit: 1,
    }
  ) => {
    allDataLoaded.value = false;
    loader.value = true;
    try {
      const { data: responseData } = await axios.get(articlesUrl, { params });
      data.value = responseData.items;
      paginationInfo.value = responseData.meta.total_pages;
      if (paginationInfo.value.remaining_count === 0) {
        allDataLoaded.value = true;
      }
    } catch (err) {
      error.value = err;
    } finally {
      loader.value = false;
    }
  };
  const getLastItem = async () => {
    loader.value = true;
    try {
      const { data: responseData } = await axios.get(
        `${articlesUrl}?sortBy=-id&page=1&limit=1`
      );
      lastItem.value = responseData.items[0];
    } catch (err) {
      error.value = err;
    } finally {
      loader.value = false;
    }
  };

  const getUniqueTags = async () => {
    loader.value = true;
    try {
      const { data: responseData } = await axios.get(
        `${articlesUrl}?_select=tag`
      );
      uniqueTags.value = [...new Set(responseData.map((item) => item["tag"]))];
    } catch (err) {
      error.value = err;
    } finally {
      loader.value = false;
    }
  };

  return {
    //значения состояния
    loader,
    error,
    allDataLoaded,
    //функции
    getDataByParams,
    getLastItem,
    getUniqueTags,
    //объекты состояния
    data,
    paginationInfo,
    lastItem,
    uniqueTags,
  };
});
