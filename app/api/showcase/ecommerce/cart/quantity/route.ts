import getCurrentUser from "@/app/actions/getCurrentUser";
import { prisma } from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.json(0);

  let cart;
  try {
    cart = await prisma.cart.findUnique({
      where: {
        userId: currentUser.id,
      },
    });
  } catch (error) {
    return NextResponse.json(0);
  }

  if (!cart) return NextResponse.json(0);

  try {
    const productsInCart = await prisma.productsOnCarts.findMany({
      where: {
        cartId: cart.id,
      },
    });

    return NextResponse.json(productsInCart.length);
  } catch (error) {
    return NextResponse.json(0);
  }
}
