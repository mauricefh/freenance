// src/lib/auth/credentials.ts
import { z } from "zod";
import bcrypt from "bcrypt";
import type { User } from "@/lib/prisma/generated";
import { prisma } from "@/lib/prisma/client";

export async function authorizeWithCredentials(
  credentials: unknown,
): Promise<User | null> {
  const parsedCredentials = z
    .object({ email: z.string().email(), password: z.string().min(6) })
    .safeParse(credentials);

  if (!parsedCredentials.success) return null;

  const { email, password } = parsedCredentials.data;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    console.warn(`Login attempt failed: No user found with email ${email}`);
    return null;
  }

  const passwordsMatch = await bcrypt.compare(password, user.password!);
  return passwordsMatch ? user : null;
}
