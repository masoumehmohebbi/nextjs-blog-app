export function middleware(req) {
  const url = req.url;
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/profile")) {
  }
}

export const config = {
  matcher: ["/profile/:path*"],
};
