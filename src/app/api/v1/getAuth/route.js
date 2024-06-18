import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  const { userId, sessionClaims } = auth();

  return NextResponse.json({ userId: userId, sessionClaims: sessionClaims });
}
