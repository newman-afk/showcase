import EcommerceAdminSidebar from "@/app/(pages)/showcase/ecommerce/components/EcommerceAdminSidebar";

interface layoutProps {
  children: React.ReactNode;
}

function layout({ children }: layoutProps) {
  return (
    <>
      <EcommerceAdminSidebar>{children}</EcommerceAdminSidebar>
    </>
  );
}

export default layout;
