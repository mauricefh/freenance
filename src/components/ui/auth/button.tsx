"use client";
import { login, logout } from "@/actions/auth.actions";
import { Button } from "../button";

export function SignInButton() {
  return <Button onClick={() => login("email")}>Sign in</Button>;
}

export function SignInGitHubButton() {
  return <Button onClick={() => login("github")}>Sign in with GitHub</Button>;
}

export function SignInGoogleButton() {
  return <Button onClick={() => login("google")}>Sign in with Google</Button>;
}

export function SignOutButton() {
  return <Button onClick={() => logout()}>Sign out</Button>;
}
