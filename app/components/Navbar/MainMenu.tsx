"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useWindowSize from "@/app/hooks/useWindowSize";
import { Menu } from "@headlessui/react";

function MainMenu() {
  const windowSize = useWindowSize();
  const pathname = usePathname();
  return (
    <Menu>
      <Menu.Button
        type="button"
        className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </Menu.Button>

      <div className="absolute left-0 top-12 w-full items-center justify-between md:static md:order-1 md:flex md:w-auto">
        <Menu.Items
          static={windowSize.width !== undefined && windowSize.width >= 768}
          className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900"
        >
          <Menu.Item>
            {({ active }) => (
              <Link
                href="/"
                className={clsx(
                  "block rounded py-2 pl-3 pr-4 text-gray-900 dark:border-gray-700 dark:text-white md:p-0",
                  active &&
                    pathname !== "/" &&
                    "bg-gray-100 dark:bg-gray-700 md:bg-transparent md:text-blue-700 md:dark:bg-transparent md:dark:text-blue-500",
                  pathname === "/" &&
                    "bg-blue-700 text-white md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                )}
                aria-current="page"
              >
                Home
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                href="/about"
                className={clsx(
                  "block rounded py-2 pl-3 pr-4 text-gray-900 dark:border-gray-700 dark:text-white md:p-0",
                  active &&
                    pathname !== "/about" &&
                    "bg-gray-100 dark:bg-gray-700 md:bg-transparent md:text-blue-700 md:dark:bg-transparent md:dark:text-blue-500",
                  pathname === "/about" &&
                    "bg-blue-700 text-white md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                )}
                aria-current="page"
              >
                About
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                href="/pricing"
                className={clsx(
                  "block rounded py-2 pl-3 pr-4 text-gray-900 dark:border-gray-700 dark:text-white md:p-0",
                  active &&
                    pathname !== "/pricing" &&
                    "bg-gray-100 dark:bg-gray-700 md:bg-transparent md:text-blue-700 md:dark:bg-transparent md:dark:text-blue-500",
                  pathname === "/pricing" &&
                    "bg-blue-700 text-white md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                )}
                aria-current="page"
              >
                Pricing
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                href="/contact"
                className={clsx(
                  "block rounded py-2 pl-3 pr-4 text-gray-900 dark:border-gray-700 dark:text-white md:p-0",
                  active &&
                    pathname !== "/contact" &&
                    "bg-gray-100 dark:bg-gray-700 md:bg-transparent md:text-blue-700 md:dark:bg-transparent md:dark:text-blue-500",
                  pathname === "/contact" &&
                    "bg-blue-700 text-white md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                )}
                aria-current="page"
              >
                Contact
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </div>
    </Menu>
  );
}

export default MainMenu;
