import CreateBrandForm from "@/app/components/CreateBrandForm";
import HydratedBrands from "@/app/components/HydratedBrands";

function AdminBrandsPage() {
  return (
    <>
      <div>
        <div className="whitespace-nowrap text-center text-2xl font-semibold dark:text-white">
          Brands
        </div>
        {/* @ts-expect-error Async Server Component */}
        <HydratedBrands />
        <CreateBrandForm />
      </div>
    </>
  );
}

export default AdminBrandsPage;
