import getCurrentUser from "@/app/actions/getCurrentUser";
import { prisma } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) return NextResponse.json({ ok: false });

    const cart = await prisma.cart.findUnique({
      where: {
        userId: currentUser.id,
      },
    });

    if (!cart) return NextResponse.json({ ok: false });

    const { productId } = await request.json();

    await prisma.productsOnCarts.delete({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId: productId,
        },
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false });
  }
}
