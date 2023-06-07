import CreateCategoryForm from "@/app/(pages)/showcase/ecommerce/admin/categories/components/CreateCategoryForm";
import HydratedCategories from "@/app/(pages)/showcase/ecommerce/admin/categories/components/HydratedCategories";

function AdminCategoriesPage() {
  return (
    <>
      <div>
        <div className="whitespace-nowrap text-center text-2xl font-semibold dark:text-white">
          Categories
        </div>
        {/* @ts-expect-error Async Server Component */}
        <HydratedCategories />
        <CreateCategoryForm />
      </div>
    </>
  );
}

export default AdminCategoriesPage;
