import CreateBrandForm from "@/app/(pages)/showcase/ecommerce/admin/brands/components/CreateBrandForm";
import HydratedBrands from "@/app/(pages)/showcase/ecommerce/admin/brands/components/HydratedBrands";

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
