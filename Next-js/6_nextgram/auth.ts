// src/auth.ts
import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const config = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session({ session, token }) {
      if (token.sub) session.user.userId = token.sub;
      return session;
    },
  },
  pages: {
    signIn: "/signIn",
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);

// Exporta um map dos provedores (para renderizar botões na página de login)
interface ProviderWithId {
  id: string;
  name: string;
}

export const providersMap = config.providers.map((provider) => {
  const typedProvider = provider as unknown as ProviderWithId;
  return { id: typedProvider.id, name: typedProvider.name };
});
