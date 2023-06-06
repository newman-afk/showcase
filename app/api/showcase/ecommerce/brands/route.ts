import getCurrentUser from "@/app/actions/getCurrentUser";
import { prisma } from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  return await prisma.brand
    .findMany()
    .then((brands) => {
      return NextResponse.json({ ok: true, data: brands });
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

  const { brand } = await request.json();

  let isBrandExist;
  try {
    isBrandExist = await prisma.brand.findUnique({
      where: {
        name: brand,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ ok: false, error: error.message });
    }
  }

  if (isBrandExist) {
    return NextResponse.json({
      ok: false,
      error: `Brand ${brand} already exists`,
    });
  }

  try {
    await prisma.brand.create({
      data: {
        name: brand,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({
        ok: false,
        error: error.message,
      });
    }
  }

  return NextResponse.json({
    ok: true,
    message: `Added new brand ${brand} successfully!`,
  });
}

export async function DELETE(request: Request) {
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

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") as string;
  let brand;
  try {
    brand = await prisma.brand.findUnique({
      where: { id: id },
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ ok: false, error: error.message });
    }
  }

  if (!brand) {
    return NextResponse.json({
      ok: false,
      error: "Brand not found, please try again later.",
    });
  }

  let product;
  try {
    product = await prisma.product.findFirst({
      where: {
        brandName: brand.name,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ ok: false, error: error.message });
    }
  }

  if (product) {
    return NextResponse.json({
      ok: false,
      error: `Brand ${brand.name} had some products and you can not deleted it.`,
    });
  }

  try {
    await prisma.brand.delete({
      where: { id: id },
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ ok: false, error: error.message });
    }
  }

  return NextResponse.json({
    ok: true,
    message: `${brand.name} deleted successfully`,
  });
}
