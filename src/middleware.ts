import { NextRequest } from "next/server";
import { getUser } from "./app/utils/auth";

export async function middleware(request: NextRequest) {
  const currentUser = await getUser();

  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (!currentUser) {
      return Response.redirect(new URL("/login", request.url));
    }

    if (currentUser.role !== "admin") {
      return Response.redirect(new URL("/explore", request.url));
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
