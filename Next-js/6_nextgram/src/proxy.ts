import { auth } from "auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname } = req.nextUrl;

  // Se tentar acessar /proxy sem estar autenticado
  if (pathname.startsWith("/proxy")) {
    if (!req.auth) {
      // Redireciona para a página de login do NextAuth
      const signInUrl = new URL("/api/auth/signin", req.url);
      // Adiciona callbackUrl para redirecionar de volta após login
      signInUrl.searchParams.set("callbackUrl", req.url);
      return NextResponse.redirect(signInUrl);
    }
  }

  // Permite continuar se estiver autenticado ou não for rota protegida
  return NextResponse.next();
});

// Configura quais rotas o middleware deve interceptar
export const config = {
  // Protege /proxy e todas as sub-rotas usando regex
  matcher: [
    "/proxy/:path*", // Captura /proxy/qualquer-coisa
    "/proxy", // Captura exatamente /proxy
  ],
};
