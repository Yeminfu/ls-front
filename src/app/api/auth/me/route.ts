// app/api/auth/me/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const accessToken = request.cookies.get("access_token");

  if (!accessToken) {
    return NextResponse.json({ error: "Не авторизован" }, { status: 401 });
  }

  const response = await fetch(`${process.env.API_URL}/me/`, {
    headers: {
      Authorization: `Bearer ${accessToken.value}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    return NextResponse.json(
      { error: data.detail },
      { status: response.status },
    );
  }

  return NextResponse.json({ user: data });
}
