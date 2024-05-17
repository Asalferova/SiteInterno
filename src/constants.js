export const URL_ARTICLES = "https://2109c4b107728645.mokky.dev/articles";
export const URL_PRODUCTS = "https://2109c4b107728645.mokky.dev/products";
export const URL_POST_CONTACT_FORM = "https://httpbin.org/post";

export const PAGE_HOME = "/";
export const PAGE_BLOG = "/blog";
export const PAGE_PRODUCTS = "/products";
export const PAGE_NOT_FOUND = "/404";
export const PAGE_BLOG_DETAILS = "/blog-details";
export const PAGE_PRODUCT_FULL = "/product-full";

export const NAV_ITEMS = {
  [PAGE_HOME]: "Home",
  [PAGE_BLOG]: "Blog",
  [PAGE_PRODUCTS]: "Products",
};

export const QUERY_PARAMS = {
  PAGE: "page",
  TAG: "tag[]",
  ID: "id",
};

export const HEAD_IMAGES_ITEMS = {
  [PAGE_BLOG]: {
    jpg: "./img/headImg.jpg",
    webp: "./img/headImg.webp",
  },

  [PAGE_PRODUCTS]: {
    jpg: "./img/head-projects.jpg",
    webp: "./img/head-projects.webp",
  },
  [PAGE_BLOG_DETAILS]: {
    jpg: "./img/head-blogDetails.jpg",
    webp: "./img/head-blogDetails.webp",
  },
  [PAGE_PRODUCT_FULL]: {
    jpg: "./img/head-productFull.jpg",
    webp: "./img/head-productFull.webp",
  },
};

export const BUTTON_CIRCLE_SMALL = "button-circle_small";
export const BUTTON_CIRCLE_BIG = "button-circle_big";
export const BUTTON_CIRCLE_PAGINATION = "button-circle_pagination";

export const BUTTON_TYPES = [
  BUTTON_CIRCLE_SMALL,
  BUTTON_CIRCLE_BIG,
  BUTTON_CIRCLE_PAGINATION,
];

export const TAG_SMALL = "tag-btn_small";
export const TAG_LARGE = "tag-btn_large";
export const TAG_MEDIUM = "tag-btn_medium";

export const TAG_TYPES = [TAG_SMALL, TAG_LARGE, TAG_MEDIUM];

export const CURRENT_DATE = new Date();
