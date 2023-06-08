import getCurrentUser from "@/app/actions/getCurrentUser";
import { prisma } from "@/app/lib/db";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function GET() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) return NextResponse.json(null);

    const cart = await prisma.cart.findUnique({
      where: {
        userId: currentUser.id,
      },
    });

    if (!cart) return NextResponse.json(null);

    const productsInCart = await prisma.productsOnCarts.findMany({
      where: {
        cartId: cart.id,
      },
    });

    const products = await Promise.all(
      productsInCart.map(async (item) => {
        const product = await prisma.product.findUnique({
          where: {
            id: item.productId,
          },
        });

        return { ...product, quantity: item.quantity };
      })
    );

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(null);
  }
}
