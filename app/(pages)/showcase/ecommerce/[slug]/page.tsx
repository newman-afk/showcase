import { getProduct } from "@/app/actions/products";
import DangerAlert from "@/app/components/alert/DangerAlert";
import InfoAlert from "@/app/components/alert/InfoAlert";
import type { Product } from "@prisma/client";

type ProductResultType = {
  ok: boolean;
  data: Product;
  error: string;
};
async function ProductPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const result: ProductResultType = await getProduct({
    productId: searchParams.id as string,
  });
  const { ok, data, error } = result;

  return (
    <>
      <div className="mx-auto max-w-screen-xl">
        {!ok && <DangerAlert>{error}</DangerAlert>}
        {data === null && <InfoAlert>404! Product Not Found</InfoAlert>}

        <div className="h-40">
          <div className="">{data?.description}</div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
