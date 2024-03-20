export function buildRoutePath(path) {
  const routeParemetersRegex = /:([a-zA-Z]+)/g;
  const pathWithParams = path.replaceAll(
    routeParemetersRegex,
    "(?<$1>[a-z0-9_]+)"
  );
  const pathRegex = new RegExp(`^${pathWithParams}`);
  return pathRegex;
}
