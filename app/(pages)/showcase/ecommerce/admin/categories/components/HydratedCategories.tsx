import { Hydrate, dehydrate } from "@tanstack/react-query";
import getQueryClient from "../../../../../../lib/getQueryClient";
import { getAllCategories } from "../../../../../../actions/categories";
import Categories from "./Categories";

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
