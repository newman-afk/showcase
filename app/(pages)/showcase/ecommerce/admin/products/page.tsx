import CreateProductForm from "@/app/components/CreateProductForm";

function AdminProductsPage() {
  return (
    <>
      <div>
        <div className="whitespace-nowrap text-center text-2xl font-semibold dark:text-white">
          Products
        </div>
        <div className="my-4 whitespace-nowrap text-xl font-semibold dark:text-white">
          Add New Product
        </div>

        <CreateProductForm />
      </div>
    </>
  );
}

export default AdminProductsPage;
