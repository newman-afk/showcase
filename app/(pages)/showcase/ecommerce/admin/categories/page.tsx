import CreateCategoryForm from "@/app/components/ecommerce/categories/CreateCategoryForm";
import HydratedCategories from "@/app/components/ecommerce/categories/HydratedCategories";

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
