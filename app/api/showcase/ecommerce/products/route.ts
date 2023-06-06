import getCurrentUser from "@/app/actions/getCurrentUser";
import { prisma } from "@/app/utils/db";
import { SafeProduct } from "@/app/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id !== null) {
    return await prisma.product
      .findUnique({
        where: { id },
      })
      .then((product) => {
        return NextResponse.json({ ok: true, data: product });
      })
      .catch((err) => {
        if (err instanceof Error) {
          return NextResponse.json({ ok: false, error: err.message });
        }
      });
  }

  return await prisma.product
    .findMany()
    .then((products) => {
      return NextResponse.json({ ok: true, data: products });
    })
    .catch((err) => {
      if (err instanceof Error) {
        return NextResponse.json({ ok: false, error: err.message });
      }
    });
}

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({
      ok: false,
      error: "Invalid Request",
    });
  }

  if (currentUser.role !== "ADMIN") {
    return NextResponse.json({
      ok: false,
      error: "Invalid Request",
    });
  }

  const product: SafeProduct = await request.json();

  try {
    await prisma.product.create({
      data: {
        name: product.name,
        price: product.price,
        stock: product.stock,
        description: product.description,
        image: product.image,
        brand: {
          connect: {
            id: product.brand,
          },
        },
        categories: {
          connect: [{ id: product.categories[0] }],
        },
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ ok: false, error: error.message });
    }
  }

  return NextResponse.json({
    ok: true,
    message: `Product ${product.name} added successfully`,
  });
}
