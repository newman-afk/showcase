import getCurrentUser from "@/app/actions/getCurrentUser";
import { prisma } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  return await prisma.category
    .findMany()
    .then((categories) => {
      return NextResponse.json({ ok: true, data: categories });
    })
    .catch((error) => {
      if (error instanceof Error) {
        return NextResponse.json({ ok: false, error: error.message });
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

  const { category } = await request.json();

  let isCategoryExist;

  try {
    isCategoryExist = await prisma.category.findUnique({
      where: {
        name: category,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ ok: false, error: error.message });
    }
  }

  if (isCategoryExist) {
    return NextResponse.json({
      ok: false,
      error: `Category ${category} already exists`,
    });
  }

  try {
    await prisma.category.create({
      data: {
        name: category,
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
    message: `Added new category ${category} successfully!`,
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
  let category;
  try {
    category = await prisma.category.findUnique({
      where: { id: id },
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ ok: false, error: error.message });
    }
  }

  if (!category) {
    return NextResponse.json({
      ok: false,
      error: "Category not found, please try again later.",
    });
  }

  if (category.productIDs?.length > 0) {
    return NextResponse.json({
      ok: false,
      error: `Category ${category.name} is already used by some products and you cannot delete this category.`,
    });
  }

  try {
    await prisma.category.delete({
      where: { id: id },
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ ok: false, error: error.message });
    }
  }

  return NextResponse.json({
    ok: true,
    message: `${category.name} deleted successfully`,
  });
}
