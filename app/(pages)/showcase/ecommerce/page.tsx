import HydratedProducts from "@/app/(pages)/showcase/ecommerce/admin/products/components/HydratedProducts";

async function EcommercePage() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <HydratedProducts />
    </>
  );
}

export default EcommercePage;
