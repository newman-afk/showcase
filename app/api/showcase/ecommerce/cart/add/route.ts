import getCurrentUser from "@/app/actions/getCurrentUser";
import { prisma } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { productId } = await request.json();
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({
      ok: false,
      error: "Invalid Request",
    });
  }

  let cart;
  try {
    cart = await prisma.cart.findUnique({
      where: {
        userId: currentUser?.id,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ ok: false, error: error.message });
    }
  }

  if (cart === null) {
    try {
      await prisma.cart.create({
        data: {
          user: {
            connect: {
              id: currentUser.id,
            },
          },
          products: {
            create: [
              {
                quantity: 1,
                product: {
                  connect: {
                    id: productId,
                  },
                },
              },
            ],
          },
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        return NextResponse.json({ ok: false, error: error.message });
      }
    }
  } else {
    try {
      await prisma.cart.update({
        where: {
          id: cart?.id,
        },
        data: {
          products: {
            create: [
              {
                quantity: 1,
                product: {
                  connect: {
                    id: productId,
                  },
                },
              },
            ],
          },
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        return NextResponse.json({ ok: false, error: error.message });
      }
    }
  }

  return NextResponse.json({ ok: true, message: "Added to cart successfully" });
}
