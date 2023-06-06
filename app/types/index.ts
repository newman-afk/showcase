import type { Product, User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

export type SafeProduct = {
  image: string;
  name: string;
  price: number;
  stock: number;
  brand: string;
  categories: string[];
  description: string;
};
