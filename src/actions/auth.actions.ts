// src/actions/auth.actions.ts
"use server";
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";

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

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
