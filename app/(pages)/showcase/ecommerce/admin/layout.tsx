import EcommerceAdminSidebar from "@/app/components/EcommerceAdminSidebar";

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
