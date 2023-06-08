"use client";

import { useQuery, useMutation } from "@tanstack/react-query";
import { deleteCategory, getAllCategories } from "../actions/categories";
import { toast } from "react-hot-toast";
import type { Category } from "@prisma/client";

type DataType = {
  ok: boolean;
  data: Category[];
};
function Categories() {
  const categoriesQuery = useQuery<DataType>({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  const result = categoriesQuery.data;

  const mutation = useMutation({
    mutationFn: deleteCategory,
    onMutate() {
      toast.loading("Deleting Category...", { id: "delete-category" });
    },
    onError(error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    },
    onSuccess: (data) => {
      const {
        data: { ok, message, error },
      } = data;

      if (ok) {
        toast.success(message);
        categoriesQuery.refetch();
      }
      if (!ok) toast.error(error);
    },
    onSettled() {
      toast.remove("delete-category");
    },
  });

  const { isLoading } = mutation;
  return (
    <div className="my-8 dark:text-white">
      <span className="block">Categories:</span>
      <div className="my-2 flex flex-wrap gap-4">
        {result !== undefined &&
          result?.data?.map((category) => (
            <div
              className="block rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 hover:scale-125 dark:bg-blue-900 dark:text-blue-300 [&:hover>button]:inline-block [&>button]:hidden"
              key={category.id}
            >
              <span>{category.name}</span>
              <button
                type="button"
                disabled={isLoading}
                onClick={() => mutation.mutate(category.id)}
                className="ml-2 hover:scale-150"
                aria-label="Delete"
              >
                <span className="sr-only">Delete</span>
                <svg
                  aria-hidden="true"
                  className="h-2 w-2"
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
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Categories;
