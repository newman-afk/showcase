import { Hydrate, dehydrate } from "@tanstack/react-query";
import getQueryClient from "../../../utils/getQueryClient";
import { getAllProducts } from "@/app/actions/products";
import Products from "./Products";

async function HydratedProducts() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["products"], getAllProducts);
  const dehydratedState = dehydrate(queryClient);
  return (
    <Hydrate state={dehydratedState}>
      <Products />
    </Hydrate>
  );
}
export default HydratedProducts;
