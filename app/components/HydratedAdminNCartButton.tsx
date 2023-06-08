import AdminNCartButton from "./AdminNCartButton";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import getQueryClient from "@/app/lib/getQueryClient";
import getCurrentUser_Client from "@/app/actions/getCurrentUser_Client";
import { getTotalsOfProductsInCart } from "@/app/actions/cart";

async function HydratedAdminNCartButton() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["user"], getCurrentUser_Client);
  await queryClient.prefetchQuery(["quantity"], getTotalsOfProductsInCart);
  const dehydratedState = dehydrate(queryClient);
  return (
    <Hydrate state={dehydratedState}>
      <AdminNCartButton />
    </Hydrate>
  );
}

export default HydratedAdminNCartButton;
