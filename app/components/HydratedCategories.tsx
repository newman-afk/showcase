import { Hydrate, dehydrate } from "@tanstack/react-query";
import getQueryClient from "@/app/lib/getQueryClient";
import Categories from "./Categories";
import { getAllCategories } from "../actions/categories";

async function HydratedCategories() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["categories"], getAllCategories);
  const dehydratedState = dehydrate(queryClient);
  return (
    <Hydrate state={dehydratedState}>
      <Categories />
    </Hydrate>
  );
}

export default HydratedCategories;
