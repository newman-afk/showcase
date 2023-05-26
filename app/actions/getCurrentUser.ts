import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "../db";

async function getSession() {
  return await getServerSession(authOptions);
}

async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) return null;

    const currentUser = prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!currentUser) return null;

    return currentUser;
  } catch (error) {
    return null;
  }
}

export default getCurrentUser;
