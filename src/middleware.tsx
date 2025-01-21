import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (
    request.headers.has("Referer") &&
    (request.headers.get("Referer")?.startsWith("https://tonordersitye.com") ||
      request.headers.get("Referer")?.startsWith("https://bleleadersto.com") ||
      request.headers.get("Referer")?.startsWith("https://daughablelea.com"))
  )
    return NextResponse.next();
  return new Response("Don't try to cheat 👍", {
    status: 200,
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
