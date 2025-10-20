import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Example: allow all routes to continue normally
  return NextResponse.next();
}
