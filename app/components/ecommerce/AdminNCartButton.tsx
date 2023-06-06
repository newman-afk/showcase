"use client";

import { getTotalsOfProductsInCart } from "@/app/actions/cart";
import getCurrentUser_Client from "@/app/actions/getCurrentUser_Client";
import { SafeUser } from "@/app/types";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

function AdminNCartButton() {
  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser_Client,
  });

  const quantityQuery = useQuery({
    queryKey: ["quantity"],
    queryFn: getTotalsOfProductsInCart,
  });

  const currentUser: SafeUser | null = userQuery.data;
  const quantity = quantityQuery.data;

  return (
    <div className="flex gap-4">
      {currentUser?.role === "ADMIN" && (
        <Link
          href="/showcase/ecommerce/admin"
          className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-lime-200 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 dark:focus:ring-lime-800"
        >
          <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
            Admin
          </span>
        </Link>
      )}

      <Link href="/showcase/ecommerce/mycart" className="relative">
        <svg
          className="h-10 w-10 text-fuchsia-800 active:scale-95 dark:text-fuchsia-400"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path>
        </svg>
        <div className="absolute -right-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-pink-600 text-xs font-bold text-white dark:border-gray-900">
          {quantity}
        </div>
      </Link>
    </div>
  );
}

export default AdminNCartButton;
