import HydratedProducts from "@/app/components/HydratedProducts";

async function EcommercePage() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <HydratedProducts />
    </>
  );
}

export default EcommercePage;
