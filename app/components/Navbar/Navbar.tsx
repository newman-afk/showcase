import Image from "next/image";
import Link from "next/link";
import MainMenu from "./MainMenu";
import HydratedUserMenu from "./HydratedUserMenu";

function Navbar() {
  return (
    <>
      <nav className="relative z-50 border-gray-200 bg-white shadow dark:bg-gray-900 dark:shadow-slate-800">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center p-4 md:justify-between">
          {/* logo */}
          <Link href="/" className="flex flex-1 items-center md:flex-initial">
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              width="32"
              height="32"
              className="mr-3 h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              Showcase
            </span>
          </Link>
          {/* @ts-expect-error Async Server Component */}
          <HydratedUserMenu />
          <MainMenu />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
