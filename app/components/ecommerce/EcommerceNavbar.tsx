import Link from "next/link";
import HydratedAdminNCartButton from "./HydratedAdminNCartButton";

function EcommerceNavbar() {
  return (
    <div className="mx-auto max-w-screen-xl bg-slate-50 px-4 dark:bg-gray-900">
      <div className="flex items-center justify-between py-4">
        <Link
          href="/showcase/ecommerce"
          className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-lime-200 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 dark:focus:ring-lime-800"
        >
          <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
            Ecommerce
          </span>
        </Link>
        {/* @ts-expect-error Async Server Component */}
        <HydratedAdminNCartButton />
      </div>
    </div>
  );
}

export default EcommerceNavbar;
