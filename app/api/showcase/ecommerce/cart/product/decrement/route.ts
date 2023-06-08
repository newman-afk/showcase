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

    const singleProduct = await prisma.productsOnCarts.findUnique({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId: productId,
        },
      },
    });

    if (!singleProduct) return NextResponse.json({ ok: false });
    if (singleProduct.quantity <= 1) return NextResponse.json({ ok: false });

    await prisma.productsOnCarts.update({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId: productId,
        },
      },
      data: {
        quantity: {
          decrement: 1,
        },
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false });
  }
}
