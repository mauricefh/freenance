// src/auth.ts
import CredentialsProvider from "next-auth/providers/credentials";
import { authorizeWithCredentials } from "@/lib/auth/credentials";
import NextAuth, { NextAuthConfig } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma/client";
import authConfig from "./auth.config";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

const protectedRoutes = ["/dashboard", "/transactions"];
export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
    newUser: "/auth/new-user",
  },
  providers: [
    Google,
    GitHub,
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        return authorizeWithCredentials(credentials);
      },
    }),
  ],
  callbacks: {
    authorized: ({ auth, request }) => {
      const { pathname } = request.nextUrl;

      const isProtected = protectedRoutes.some((route) =>
        pathname.startsWith(route),
      );

      // Return true if route is not protected, or if user is authenticated
      return !isProtected || !!auth?.user;
    },
    async jwt({ token, user }) {
      // First time the JWT is created
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
} satisfies NextAuthConfig);
