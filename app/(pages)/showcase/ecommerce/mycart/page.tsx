import HydratedCart from "./HydratedCart";

function MyCartPage() {
  return (
    <>
      <div className="container mx-auto py-10">
        {/* @ts-expect-error Async Server Component */}
        <HydratedCart />
      </div>
    </>
  );
}

export default MyCartPage;
