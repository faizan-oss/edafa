/**
 * Returns HTTP 404 for unknown paths while still serving the SPA shell.
 * Known app routes rewrite to index.html with 200; everything else gets 404 + index.html.
 */
const KNOWN_EXACT = new Set([
  "/",
  "/services",
  "/privacy",
  "/before-you-hire-us",
]);

const SERVICE_SLUGS = new Set([
  "validate-first",
  "build-now",
  "fix-whats-broken",
  "keep-it-running",
]);

function isAsset(pathname: string) {
  return (
    pathname.startsWith("/assets/") ||
    pathname.startsWith("/images/") ||
    pathname.startsWith("/brand/") ||
    pathname.startsWith("/icons") ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  );
}

function isKnownRoute(pathname: string) {
  if (KNOWN_EXACT.has(pathname)) {
    return true;
  }

  const serviceMatch = pathname.match(/^\/services\/([^/]+)\/?$/);
  if (serviceMatch && SERVICE_SLUGS.has(serviceMatch[1])) {
    return true;
  }

  return false;
}

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const { pathname } = url;

  if (
    pathname.startsWith("/api") ||
    pathname === "/health" ||
    isAsset(pathname)
  ) {
    return;
  }

  if (isKnownRoute(pathname)) {
    return;
  }

  const indexUrl = new URL("/index.html", url.origin);
  return new Response(null, {
    status: 404,
    headers: {
      "x-middleware-rewrite": indexUrl.toString(),
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
