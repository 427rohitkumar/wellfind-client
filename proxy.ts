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
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
