"use client";

import { Dialog } from "@headlessui/react";
import useRegisterModal from "@/app/hooks/zustand/useRegisterModal";
import RegisterForm from "./RegisterForm";

export default function RegisterModal() {
  const registerModal = useRegisterModal();
  return (
    <Dialog
      open={registerModal.isOpen}
      onClose={registerModal.onClose}
      className="relative z-50"
    >
      <div className="fixed bottom-0 left-0 right-0 top-0 flex h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden p-4 md:inset-0">
        <Dialog.Panel className="relative max-h-full w-full max-w-md ">
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={registerModal.onClose}
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Register to our platform
              </h3>
              <RegisterForm />
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
