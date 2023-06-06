"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getAllCategories } from "@/app/actions/categories";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllBrands } from "@/app/actions/brands";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import { createNewProduct } from "@/app/actions/products";
import type { Brand, Category } from "@prisma/client";

const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

type CategoriesQueryData = {
  ok: boolean;
  data: Category[];
};
type BrandsQueryData = {
  ok: boolean;
  data: Brand[];
};
function CreateProductForm() {
  const queryClient = useQueryClient();
  const [url, setUrl] = useState<undefined | string>();

  const categoriesQuery = useQuery<CategoriesQueryData>({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  const categoriesResult = categoriesQuery.data;

  const brandsQuery = useQuery<BrandsQueryData>({
    queryKey: ["brands"],
    queryFn: getAllBrands,
  });

  const brandsResult = brandsQuery.data;

  const schema = z.object({
    name: z.string().min(1, { message: "Too short" }).max(30),
    price: z
      .number({
        invalid_type_error: "Price must be numerical",
      })
      .int({ message: "Supports integers only" })
      .min(1)
      .max(999999),
    stock: z
      .number({
        invalid_type_error: "Stock must be numerical",
      })
      .int()
      .min(1)
      .max(999999),
    brand: z.string().min(1, { message: "Please re-select the brand" }),
    categories: z.string().array().min(1),
    description: z.string().min(5, { message: "Too short" }).max(200),
  });

  type formData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<formData>({ resolver: zodResolver(schema) });

  const mutation = useMutation({
    mutationFn: createNewProduct,
    onMutate() {
      toast.loading("Adding new product...", { id: "add-new-product" });
    },
    onError(error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    },
    onSuccess: (data) => {
      setUrl(undefined);
      const {
        data: { ok, message, error },
      } = data;

      if (ok) {
        toast.success(message);
        reset();
        queryClient.invalidateQueries({ queryKey: ["products"] });
      }
      if (!ok) toast.error(error);
    },
    onSettled() {
      toast.remove("add-new-product");
    },
  });

  function submit(data: formData) {
    const finalData = { ...data, image: url as string };
    mutation.mutate(finalData);
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      {/* name */}
      <div className="group relative z-0 mb-6 w-full">
        <input
          type="text"
          {...register("name")}
          name="name"
          placeholder=" "
          id="name"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
        />
        <label
          htmlFor="name"
          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          Product name
        </label>
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {errors.name?.message}
        </p>
      </div>
      {/* price */}
      <div className="group relative z-0 mb-6 w-full">
        <input
          type="number"
          {...register("price", { valueAsNumber: true })}
          name="price"
          placeholder=" "
          id="price"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
        />
        <label
          htmlFor="price"
          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          Price
        </label>
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {errors.price?.message}
        </p>
      </div>
      {/* stock */}
      <div className="group relative z-0 mb-6 w-full">
        <input
          type="number"
          {...register("stock", { valueAsNumber: true })}
          name="stock"
          placeholder=" "
          id="stock"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
        />
        <label
          htmlFor="stock"
          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          Stock
        </label>
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {errors.stock?.message}
        </p>
      </div>
      {/* brand & categories */}
      <div className="grid md:grid-cols-2 md:gap-6">
        {/* brand */}
        <div className="group relative z-0 mb-6 w-full">
          <label
            htmlFor="brand"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            Brand
          </label>
          <select
            id="brands"
            {...register("brand")}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-200 bg-transparent px-0 py-2.5 text-sm text-gray-500 focus:border-gray-200 focus:outline-none focus:ring-0 dark:border-gray-700 dark:text-gray-400"
          >
            {brandsResult?.data?.map((brand) => (
              <option key={brand.id} value={brand.id} className="">
                {brand.name}
              </option>
            ))}
          </select>
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {errors.brand?.message}
          </p>
        </div>
        {/* categories */}
        <div className="group relative z-0 mb-6 w-full">
          <label
            htmlFor="categories"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            Categories
          </label>
          <select
            multiple
            id="categories"
            {...register("categories")}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-200 bg-transparent px-0 py-2.5 text-sm text-gray-500 focus:border-gray-200 focus:outline-none focus:ring-0 dark:border-gray-700 dark:text-gray-400"
          >
            {categoriesResult?.data?.map((category) => (
              <option key={category.id} value={category.id} className="">
                {category.name}
              </option>
            ))}
          </select>
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {errors.categories?.message}
          </p>
        </div>
      </div>
      {/* description */}
      <div className="group relative z-0 mb-6 w-full">
        <input
          type="text"
          {...register("description")}
          name="description"
          placeholder=" "
          id="description"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
        />
        <label
          htmlFor="description"
          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          Description
        </label>
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {errors.description?.message}
        </p>
      </div>
      {/* upload image */}
      {url === undefined ? (
        <CldUploadWidget
          onUpload={(result: any) => {
            setUrl(result.info.secure_url);
          }}
          uploadPreset={preset}
          options={{ maxFiles: 1 }}
        >
          {({ open }) => {
            return (
              <button
                onClick={() => open()}
                className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-transparent dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <svg
                  aria-hidden="true"
                  className="mb-3 h-10 w-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
              </button>
            );
          }}
        </CldUploadWidget>
      ) : (
        <CldImage
          width="960"
          height="600"
          preserveTransformations
          src={url}
          sizes="100vw"
          alt="Description of my image"
        />
      )}

      <button
        type="submit"
        className="mt-4 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
      >
        Submit
      </button>
    </form>
  );
}

export default CreateProductForm;
