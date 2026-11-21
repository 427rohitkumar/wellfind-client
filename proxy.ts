import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/home-tuition/patna/") {
    return NextResponse.redirect(new URL("/patna", request.url), 308);
  }

  if (
    pathname.endsWith("/") &&
    pathname !== "/" &&
    !pathname.startsWith("/_next/") &&
    !pathname.includes(".")
  ) {
    // Build a plain URL: NextURL.clone() keeps the trailing slash, which made this
    // redirect point at itself (ERR_TOO_MANY_REDIRECTS).
    const target = new URL(request.url);
    target.pathname = pathname.replace(/\/+$/, "") || "/";
    return NextResponse.redirect(target, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
