// src/actions/auth.actions.ts
"use server";
import { signIn, signOut } from "@/auth";

const REDIRECT_PATH: string = "/";

export const login = async (provider: string) => {
  if (!provider) {
    console.error("No signin provider provided");
    return;
  }
  await signIn(provider, { redirectTo: REDIRECT_PATH });
};

export const logout = async () => {
  await signOut({ redirectTo: REDIRECT_PATH });
};
