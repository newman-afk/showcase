import { prisma } from "@/app/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, password } = body;

  const hashedPassword = await bcrypt.hash(password, 10);

  let data;
  await prisma.user
    .create({
      data: { name, email, hashedPassword, emailVerified: null },
    })
    .then(() => {
      data = { ok: true, message: "Registered successfully!" };
    })
    .catch((err) => {
      if (err.code === "P2002") {
        data = {
          ok: false,
          message: "Email already exists!",
        };
      }
    });

  return NextResponse.json(data);
}
