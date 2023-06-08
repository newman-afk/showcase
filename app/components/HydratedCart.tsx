import { Hydrate, dehydrate } from "@tanstack/react-query";
import Cart from "./Cart";
import getQueryClient from "@/app/lib/getQueryClient";
import { getAllProductsInCart } from "@/app/actions/cart";

async function HydratedCart() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["products-in-cart"], getAllProductsInCart);
  const dehydratedState = dehydrate(queryClient);
  return (
    <Hydrate state={dehydratedState}>
      <Cart />
    </Hydrate>
  );
}

export default HydratedCart;
