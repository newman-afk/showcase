import getCurrentUser from "@/app/actions/getCurrentUser";
import { prisma } from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.json(false);

  let cart;
  try {
    cart = await prisma.cart.findUnique({
      where: {
        userId: currentUser.id,
      },
    });
  } catch (error) {
    return NextResponse.json(false);
  }

  if (!cart) return NextResponse.json(false);

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") as string;

  try {
    const result = await prisma.productsOnCarts.findFirst({
      where: {
        cartId: cart.id,
        productId: id,
      },
    });
    return result ? NextResponse.json(true) : NextResponse.json(false);
  } catch (error) {
    return NextResponse.json(false);
  }

  return NextResponse.json(false);
}
