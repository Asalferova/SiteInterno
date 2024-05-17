import { watch } from "vue";

export function scrollToQueryChange(router, elementRef) {
  watch([() => router.currentRoute.value.query, elementRef], ([newVal]) => {
    if (newVal && elementRef.value) {
      elementRef.value.scrollIntoView({ behavior: "smooth" });
    }
  });
}
