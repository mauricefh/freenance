// src/components/user-dropdown-menu.tsx
"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LogOut, DollarSign, User } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";

const menuItems = [
  {
    title: "Account",
    url: "/user/account",
    icon: User,
  },
  {
    title: "Billing",
    url: "/user/billing",
    icon: DollarSign,
  },
];

export default function UserDropdownMenuItems() {
  return (
    <>
      {menuItems.map((item) => (
        <DropdownMenuItem key={item.title} asChild>
          <Link href={item.url} className="flex items-center gap-2">
            <item.icon />
            <span>{item.title}</span>
          </Link>
        </DropdownMenuItem>
      ))}
      <DropdownMenuItem
        onSelect={() => signOut({ callbackUrl: "/auth/signin" })}
      >
        <LogOut />
        <span>Logout</span>
      </DropdownMenuItem>
    </>
  );
}
