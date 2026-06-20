// middleware.ts (в корне frontend)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const accessToken = request.cookies.get('access_token');
  const { pathname } = request.nextUrl;
  
  // Публичные маршруты (доступ без авторизации)
  const publicPaths = ['/login', '/register'];
  const isPublicPath = publicPaths.some(path => pathname.startsWith(path));
  
  // Если путь публичный и есть токен - редиректим на дашборд
  if (isPublicPath && accessToken) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }
  
  // Если путь не публичный и нет токена - редиректим на логин
  if (!isPublicPath && !accessToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    // '/articles/:path*',
    '/login',
    '/register',
  ],
};