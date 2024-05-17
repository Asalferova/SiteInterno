import { getQueryParameter, updateQuery } from "./routerUtils.js";
import { QUERY_PARAMS } from "../constants.js";
export const handleTagSelect = (tagValue, router) => {
  const currentTags = getQueryParameter(router, QUERY_PARAMS.TAG);
  const currentPage = getQueryParameter(router, QUERY_PARAMS.PAGE);
  let tag = Array.isArray(currentTags) ? [...currentTags] : [];
  if (!Array.isArray(tag)) {
    tag = [tag];
  }
  const index = tag.indexOf(tagValue);
  if (index === -1) {
    tag.push(tagValue);
  } else {
    tag.splice(index, 1);
  }
  updateQuery(router, {
    [QUERY_PARAMS.TAG]: tag,
    [QUERY_PARAMS.PAGE]: currentPage,
  });
};
