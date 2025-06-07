"use client";
import { login } from "@/actions/auth.actions";
import { Button } from "./button";

export default function SignInButton() {
  return <Button onClick={() => login("email")}>Sign in</Button>;
}

export function SignInGitHubButton() {
  return (
    <Button className="cursor-pointer" onClick={() => login("github")}>
      Sign in with GitHub
    </Button>
  );
}

export function SignInGoogleButton() {
  return (
    <Button className="cursor-pointer" onClick={() => login("google")}>
      Sign in with Google
    </Button>
  );
}
