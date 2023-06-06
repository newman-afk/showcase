import HydratedProducts from "@/app/components/ecommerce/products/HydratedProducts";

async function EcommercePage() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <HydratedProducts />
    </>
  );
}

export default EcommercePage;
