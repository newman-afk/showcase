import EcommerceNavbar from "@/app/components/ecommerce/EcommerceNavbar";

interface layoutProps {
  children: React.ReactNode;
}

async function layout({ children }: layoutProps) {
  return (
    <>
      <div className="bg-slate-50 dark:bg-gray-900">
        <EcommerceNavbar />
        {children}
      </div>
    </>
  );
}

export default layout;
