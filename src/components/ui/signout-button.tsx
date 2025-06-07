"use client";
import { logout } from "@/actions/auth.actions";
import { Button } from "./button";

export default function SignOutButton() {
  return <Button onClick={() => logout()}>Sign out</Button>;
}
