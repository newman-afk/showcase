import EcommerceNavbar from "@/app/components/EcommerceNavbar";
import { Metadata } from "next";

interface layoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "E-Commerce of showcase made by 符画虎",
};
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
