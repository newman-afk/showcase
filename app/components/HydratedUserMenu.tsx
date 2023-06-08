import { Hydrate, dehydrate } from "@tanstack/react-query";
import getQueryClient from "@/app/lib/getQueryClient";
import getCurrentUser_Client from "@/app/actions/getCurrentUser_Client";
import UserMenu from "./UserMenu";

async function HydratedUserMenu() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["user"], getCurrentUser_Client);
  const dehydratedState = dehydrate(queryClient);
  return (
    <Hydrate state={dehydratedState}>
      <UserMenu />
    </Hydrate>
  );
}

export default HydratedUserMenu;
