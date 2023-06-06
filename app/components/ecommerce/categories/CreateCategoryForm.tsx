"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { createNewCategory } from "@/app/actions/categories";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function CreateCategoryForm() {
  const router = useRouter();
  const schema = z.object({
    category: z.string().min(2).max(20),
  });

  type formData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({ resolver: zodResolver(schema) });

  const mutation = useMutation({
    mutationFn: createNewCategory,
    onMutate() {
      toast.loading("Adding new category...", { id: "add-new-category" });
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
        router.refresh();
      }
      if (!ok) toast.error(error);
    },
    onSettled() {
      toast.remove("add-new-category");
    },
  });
  const { isLoading } = mutation;

  function submit(data: formData) {
    mutation.mutate(data);
  }
  return (
    <form className="my-8" onSubmit={handleSubmit(submit)}>
      <div>
        <label
          htmlFor="category"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          New Category
        </label>
        <input
          {...register("category")}
          type="text"
          name="category"
          id="category"
          autoFocus
          className="my-4 block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
          placeholder="eg : phone"
          required
        />
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {errors.category?.message}
        </p>
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-lime-200 disabled:opacity-50 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 dark:focus:ring-lime-800 disabled:dark:text-slate-500"
      >
        <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
          Create New Category
        </span>
      </button>
    </form>
  );
}

export default CreateCategoryForm;
