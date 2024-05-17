export function navigate(router, route, params) {
  if (params) {
    const queryParams = new URLSearchParams(params).toString();
    route += "?" + queryParams;
  }

  router.push(route);
}
