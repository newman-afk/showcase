"use client";

import { ProductInCart, addToCart } from "@/app/actions/cart";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { toast } from "react-hot-toast";

function AddToCartButrton({ productId }: { productId: string }) {
  const mutation = useMutation({
    mutationFn: addToCart,
    onMutate() {
      toast.loading("Adding to cart...", { id: "add-to-cart" });
    },
    onSuccess(data) {
      const {
        data: { ok, message, error },
      } = data;

      if (ok) {
        toast.success(message);
        // router.refresh();
      }
      if (!ok) toast.error(error);
    },
    onError(error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    },
    onSettled() {
      toast.remove("add-to-cart");
    },
  });

  const query = useQuery({
    queryKey: ["is-product-in-cart"],
    queryFn: () => ProductInCart(productId),
  });

  const isProductInCart = query.data;

  const { isLoading } = mutation;

  return (
    <>
      {isProductInCart && (
        <Link
          href="/showcase/ecommerce/mycart"
          className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Go to cart
        </Link>
      )}
      {!isProductInCart && (
        <button
          onClick={() => mutation.mutate(productId)}
          disabled={isLoading}
          className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to cart
        </button>
      )}
    </>
  );
}

export default AddToCartButrton;
