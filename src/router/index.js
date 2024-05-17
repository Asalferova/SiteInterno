import { createRouter, createWebHashHistory } from "vue-router";
import {
  PAGE_HOME,
  PAGE_BLOG,
  PAGE_BLOG_DETAILS,
  PAGE_PRODUCTS,
  PAGE_PRODUCT_FULL,
  PAGE_NOT_FOUND,
  NAV_ITEMS,
} from "../constants";
import TheHome from "../pages/TheHome.vue";
import TheBlog from "../pages/TheBlog.vue";
import TheProducts from "../pages/TheProducts.vue";
import TheBlogDetails from "../pages/TheBlogDetails.vue";
import TheNotFound from "../pages/TheNotFound.vue";
import TheProductFull from "../pages/TheProductFull.vue";
const routes = [
  {
    path: PAGE_HOME,
    name: NAV_ITEMS[PAGE_HOME],
    component: TheHome,
  },
  {
    path: PAGE_BLOG,
    name: NAV_ITEMS[PAGE_BLOG],
    component: TheBlog,
  },
  {
    path: PAGE_PRODUCTS,
    name: NAV_ITEMS[PAGE_PRODUCTS],
    component: TheProducts,
  },
  {
    path: PAGE_BLOG_DETAILS,
    name: NAV_ITEMS[PAGE_BLOG_DETAILS],
    component: TheBlogDetails,
  },
  {
    path: PAGE_PRODUCT_FULL,
    name: NAV_ITEMS[PAGE_PRODUCT_FULL],
    component: TheProductFull,
  },
  {
    path: PAGE_NOT_FOUND,
    name: NAV_ITEMS[PAGE_NOT_FOUND],
    component: TheNotFound,
  },
  {
    path: "/:catchAll(.*)",
    component: TheNotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.query && Object.keys(to.query).length === 0) {
      return { top: 0 };
    }
  },
});

export default router;
