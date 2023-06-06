import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/app/utils/db";
import { NextResponse } from "next/server";

async function getSession() {
  return await getServerSession(authOptions);
}

// https://www.prisma.io/docs/concepts/components/prisma-client/excluding-fields
function exclude<User, Key extends keyof User>(
  user: User,
  keys: Key[]
): Omit<User, Key> {
  for (let key of keys) {
    delete user[key];
  }
  return user;
}
export const dynamic = "force-dynamic";
export async function GET() {
  try {
    const session = await getSession();

    if (!session?.user?.email) return NextResponse.json(null);

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!currentUser) return NextResponse.json(null);

    // if (currentUser.hashedPassword) {
    //   return exclude(currentUser, ["hashedPassword"]);
    // }

    return NextResponse.json({
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString() || null,
    });
  } catch (error) {
    return NextResponse.json(null);
  }
}
