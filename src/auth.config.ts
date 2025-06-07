// src/auth.config.ts
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

const protectedRoutes = ["/dashboard", "/transactions"];

export default {
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
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
  },
} satisfies NextAuthConfig;
