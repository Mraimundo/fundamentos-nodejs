export function buildRoutePath(path) {
  const routeParemetersRegex = /:([a-zA-Z]+)/g;
  console.log(Array.from(path.matchAll(routeParemetersRegex)));
}
