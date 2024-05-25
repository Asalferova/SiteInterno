export function navigate(router, route, params) {
  if (params) {
    const queryParams = new URLSearchParams(params).toString();
    route += "?" + queryParams;
  }

  router.push(route);
}

export function getQueryParameter(router, parameterName) {
  return router.currentRoute.value.query[parameterName];
}

export function updateQuery(router, query) {
  const currentRoute = router.currentRoute.value;
  const newQuery = { ...currentRoute.query, ...query };
  router.push({ ...currentRoute, query: newQuery });
}
