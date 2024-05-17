import {
  BUTTON_CIRCLE_SMALL,
  BUTTON_CIRCLE_BIG,
  BUTTON_CIRCLE_PAGINATION,
  TAG_SMALL,
  TAG_LARGE,
  TAG_MEDIUM,
  CURRENT_DATE,
  HEAD_IMAGES_ITEMS,
} from "./constants.js";
import { formatedDate } from "./functions.js";
import { ICONS } from "./icons.js";

export function isPageValid(currentPage) {
  return Object.keys(HEAD_IMAGES_ITEMS).includes(currentPage);
}

export function isIconTypeValid(name) {
  return Object.keys(ICONS).includes(name);
}

export function isButtonTypeValid(type) {
  return [
    BUTTON_CIRCLE_SMALL,
    BUTTON_CIRCLE_BIG,
    BUTTON_CIRCLE_PAGINATION,
  ].includes(type);
}

export function isTagTypeValid(type) {
  return [TAG_SMALL, TAG_LARGE, TAG_MEDIUM].includes(type);
}

export function isBreadcrumbLinksValid(breadcrumbLinks) {
  return breadcrumbLinks.every(
    ({ link, to }) => typeof link === "string" && typeof to === "string"
  );
}

export function isDateValid(date) {
  const regex =
    /^\d{2} (January|February|March|April|May|June|July|August|September|October|November|December) \d{4}$/;
  const date_object = formatedDate(date);
  let isDateValid =
    new Date(CURRENT_DATE).getTime() > new Date(date_object).getTime();
  return regex.test(date) && isDateValid;
}

export function isArticleValid(article, fields) {
  const validations = {
    id: () => typeof article.id === "number",
    title: () => typeof article.title === "string",
    tag: () => typeof article.tag === "string",
    date: () => typeof article.date === "string",
    imageUrls: () =>
      typeof article.imageUrls === "object" &&
      typeof article.imageUrls.small === "string" &&
      typeof article.imageUrls.medium === "string" &&
      typeof article.imageUrls.large === "string",
    text: () =>
      Array.isArray(article.text) &&
      article.text.every((t) => typeof t === "string"),
    additionalText: () => typeof article.additionalText === "string",
    quote: () => typeof article.quote === "string",
    order: () =>
      Array.isArray(article.order) &&
      article.order.every((o) => typeof o === "string"),
  };

  return fields.every((field) => validations[field]());
}

export function isArticlesValid(articles, fields) {
  return articles.every((article) => isArticleValid(article, fields));
}

export function isProductValid(product, fields) {
  const validations = {
    id: () => typeof product.id === "number",
    title: () => typeof product.title === "string",
    tag: () => typeof product.tag === "string",
    category: () => typeof product.category === "string",
    imageUrls: () =>
      typeof product.imageUrls === "object" &&
      typeof product.imageUrls.small === "string" &&
      typeof product.imageUrls.medium === "string" &&
      Array.isArray(product.imageUrls.large) &&
      product.imageUrls.large.every((t) => typeof t === "string"),
    text: () =>
      Array.isArray(product.text) &&
      product.text.every((t) => typeof t === "string"),
  };

  return fields.every((field) => validations[field]());
}
export function isProductsValid(products, fields) {
  return products.every((product) => isProductValid(product, fields));
}

export const validateContactForm = (name, email, phone, subject, refs) => {
  if (!name.trim()) {
    refs.nameRef.value.focus();
    return false;
  }
  if (!email.includes("@")) {
    refs.emailRef.value.focus();
    return false;
  }
  if (!phone.match(/^[0-9]+$/)) {
    refs.phoneRef.value.focus();
    return false;
  }
  if (!subject.trim()) {
    refs.subjectRef.value.focus();
    return false;
  }
  return true;
};
