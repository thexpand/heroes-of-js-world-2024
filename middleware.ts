import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (process.env.MAINTENANCE_MODE === "true") {
    return NextResponse.rewrite(new URL("/maintenance", request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt
     * - sitemap.xml
     * - *.svg, *.webp, *.png, *.jpg (public files, ending in these extensions)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest|.*\\.svg$|.*\\.webp$|.*\\.png$|.*\\.jpg$).*)",
  ],
};
