"use client";

import { Menu } from "@headlessui/react";
import ThemeButton from "../ThemeButton";
import Image from "next/image";
import clsx from "clsx";
import { signOut } from "next-auth/react";
import useLoginModal from "@/app/hooks/zustand/useLoginModal";
import { useQuery } from "@tanstack/react-query";
import getCurrentUser_Client from "@/app/actions/getCurrentUser_Client";

function UserMenu() {
  const loginModal = useLoginModal();

  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser_Client,
  });

  const currentUser = userQuery.data;
  console.log("currentUser", currentUser);
  return (
    <>
      {currentUser ? (
        <Menu>
          <div className="relative items-center md:order-2">
            <div className="flex items-center gap-2">
              <ThemeButton />
              <Menu.Button
                type="button"
                className="mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0"
              >
                <span className="sr-only">Open user menu</span>
                <Image
                  className="h-8 w-8 rounded-full"
                  width="32"
                  height="32"
                  src={
                    currentUser.image
                      ? currentUser.image
                      : "/images/placeholder.jpg"
                  }
                  alt="user photo"
                />
              </Menu.Button>
            </div>
            <Menu.Items className="absolute right-[-3rem] z-50 my-4 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700 md:right-[-1rem] 2xl:right-[-4rem]">
              <div className="px-4 py-3">
                <span className="text-sm text-gray-900 dark:text-white">
                  {currentUser.name ? currentUser.name : "username"}
                </span>

                <span className="block truncate text-sm text-gray-500 dark:text-gray-400">
                  {currentUser.email
                    ? currentUser.email
                    : "useremail@email.com"}
                </span>
              </div>
              <div className="py-2" aria-labelledby="user-menu-button">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={clsx(
                        `block px-4 py-2 text-sm text-gray-700  dark:text-gray-200`,
                        active && "bg-gray-100 dark:bg-gray-600 dark:text-white"
                      )}
                    >
                      Dashboard
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={clsx(
                        `block px-4 py-2 text-sm text-gray-700  dark:text-gray-200`,
                        active && "bg-gray-100 dark:bg-gray-600 dark:text-white"
                      )}
                    >
                      Settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={clsx(
                        `block px-4 py-2 text-sm text-gray-700  dark:text-gray-200`,
                        active && "bg-gray-100 dark:bg-gray-600 dark:text-white"
                      )}
                    >
                      Earnings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => signOut()}
                      className={clsx(
                        `block px-4 py-2 text-sm text-gray-700  dark:text-gray-200`,
                        active && "bg-gray-100 dark:bg-gray-600 dark:text-white"
                      )}
                    >
                      Sign Out
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </div>
        </Menu>
      ) : (
        <div className="flex items-center justify-center gap-2 md:order-2">
          <ThemeButton />
          <button
            onClick={loginModal.onOpen}
            className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800"
          >
            Login
          </button>
        </div>
      )}
    </>
  );
}

export default UserMenu;
