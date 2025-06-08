// app/api/theme/route.ts
import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma/client";

export async function POST(req: Request) {
  const session = await auth();
  console.log("session", session);

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { theme } = await req.json();

  try {
    const updated = await prisma.user.update({
      where: { id: session.user.id },
      data: { theme },
    });
    console.log("Updated user:", updated);
  } catch (error) {
    console.error("Error updating theme in DB", error);
    return NextResponse.json(
      { error: "Failed to update theme" },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
