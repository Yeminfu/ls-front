// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    const url = `${process.env.API_URL}/auth/login/`;

    // Отправляем запрос к Django бэкенду
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.detail || "Ошибка авторизации" },
        { status: response.status },
      );
    }

    // Создаём ответ с установкой httpOnly cookies
    const nextResponse = NextResponse.json({ user: data.user });

    nextResponse.cookies.set("access_token", data.access, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 15, // 15 минут
      path: "/",
    });

    nextResponse.cookies.set("refresh_token", data.refresh, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 дней
      path: "/",
    });

    return nextResponse;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 },
    );
  }
}
