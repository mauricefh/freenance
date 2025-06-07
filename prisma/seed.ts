// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const email = "test@example.com";
  const plainPassword = "password123";

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    console.log(`User with email ${email} already exists.`);
    return;
  }

  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name: "Test User",
    },
  });

  console.log("Created test user:", user);
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
