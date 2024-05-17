import { ICONS } from "./icons.js";

export function isIconTypeValid(name) {
  return Object.keys(ICONS).includes(name);
}
