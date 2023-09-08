import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

const locales = ["en", "pt-br"];

// Get the preferred locale, similar to above or using a library
function getLocale(request: NextRequest) {
  const headers = { "accept-language": "en-US,en;q=0.5" };
  const languages = new Negotiator({ headers }).languages();
  const defaultLocale = "pt-br";

  const locale = match(languages, locales, defaultLocale);

  return locale;
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith("/api")) {
    return NextResponse.next(); // Skip this middleware and continue to the next one
  }
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
