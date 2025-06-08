import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      theme?: string;
    };
  }

  interface User {
    id: string;
    theme?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    sub?: string;
    theme?: string;
  }
}
