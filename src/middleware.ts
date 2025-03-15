import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (path === "/dashboard/needs")
    return NextResponse.redirect(new URL(path + "/shipping", req.nextUrl));

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.[png|svg|jpg|jpeg]).*)"],
};
