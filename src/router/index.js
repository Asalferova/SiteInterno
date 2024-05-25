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
const routes = [
  {
    path: PAGE_HOME,
    name: NAV_ITEMS[PAGE_HOME],
    component: () => import("../pages/TheHome.vue"),
  },
  {
    path: PAGE_BLOG,
    name: NAV_ITEMS[PAGE_BLOG],
    component: () => import("../pages/TheBlog.vue"),
  },
  {
    path: PAGE_PRODUCTS,
    name: NAV_ITEMS[PAGE_PRODUCTS],
    component: () => import("../pages/TheProducts.vue"),
  },
  {
    path: PAGE_BLOG_DETAILS,
    name: NAV_ITEMS[PAGE_BLOG_DETAILS],
    component: () => import("../pages/TheBlogDetails.vue"),
  },
  {
    path: PAGE_PRODUCT_FULL,
    name: NAV_ITEMS[PAGE_PRODUCT_FULL],
    component: () => import("../pages/TheProductFull.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: PAGE_NOT_FOUND,
  },
  {
    path: PAGE_NOT_FOUND,
    component: () => import("../pages/TheNotFound.vue"),
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
