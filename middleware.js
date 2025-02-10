import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const token = req.nextauth.token;

    if (!token || token === "0") {
      return NextResponse.redirect(
        new URL("/api/auth/signin?callbackUrl=/dashboard", req.url)
      );
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      async authorized({ token }) {
        return !!token && token !== "0";
      },
    },
  }
);

export const config = { matcher: ["/dashboard/:path*"] };
