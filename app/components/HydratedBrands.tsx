import { Hydrate, dehydrate } from "@tanstack/react-query";
import getQueryClient from "@/app/lib/getQueryClient";
import { getAllBrands } from "@/app/actions/brands";
import Brands from "./Brands";

async function HydratedBrands() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["brands"], getAllBrands);
  const dehydratedState = dehydrate(queryClient);
  return (
    <Hydrate state={dehydratedState}>
      <Brands />
    </Hydrate>
  );
}

export default HydratedBrands;
