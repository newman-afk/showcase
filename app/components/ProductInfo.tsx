import clsx from "clsx";
import Image from "next/image";

const ProductsInfo = [
  {
    id: "ecommerce",
  },
  {
    id: "test2",
  },
  {
    id: "test3",
  },
];
function ProductInfo() {
  return (
    <>
      {ProductsInfo.map((info, i) => (
        <div
          key={info.id}
          className="mx-4 flex h-screen py-8 dark:text-white md:mx-8"
          id={info.id}
        >
          <div
            className={clsx(
              "flex-1 items-center justify-evenly rounded-xl p-4 shadow dark:shadow-orange-100 xl:flex xl:p-16",
              i % 2 === 1 && "xl:flex-row-reverse"
            )}
          >
            <div className="flex-1">
              <div className="relative mx-auto h-[172px] max-w-[301px] rounded-t-xl border-[8px] border-gray-800 bg-gray-800 dark:border-gray-800 md:h-[294px] md:max-w-[512px]">
                <div className="relative h-[156px] overflow-hidden rounded-lg bg-white dark:bg-gray-800 md:h-[278px]">
                  <Image
                    fill={true}
                    sizes="100%"
                    src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png"
                    className="h-[156px] w-full rounded-xl dark:hidden md:h-[278px]"
                    alt=""
                  />
                  <Image
                    fill={true}
                    sizes="100%"
                    src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png"
                    className="hidden h-[156px] w-full rounded-lg dark:block md:h-[278px]"
                    alt=""
                  />
                </div>
              </div>
              <div className="relative mx-auto h-[17px] max-w-[351px] rounded-b-xl rounded-t-sm bg-gray-900 dark:bg-gray-700 md:h-[21px] md:max-w-[597px]">
                <div className="absolute left-1/2 top-0 h-[5px] w-[56px] -translate-x-1/2 rounded-b-xl bg-gray-800 md:h-[8px] md:w-[96px]"></div>
              </div>
            </div>
            <div className="mx-auto mt-8 flex flex-1 flex-col items-center justify-center gap-2 sm:max-w-md md:max-w-xl xl:mt-0">
              <div
                className={clsx(
                  "items-center text-center md:flex",
                  i % 2 === 1 && "xl:flex-row-reverse"
                )}
              >
                <span
                  className={clsx(
                    "mr-8 flex items-center text-2xl font-medium text-gray-900 dark:text-white",
                    i % 2 === 1 && "xl:mr-0"
                  )}
                >
                  <span className="mr-1.5 flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-blue-600"></span>
                  Ecommerce
                </span>

                <div
                  className={clsx(
                    "flex flex-wrap gap-2",
                    i % 2 === 1 && "xl:flex-row-reverse"
                  )}
                >
                  <span className="mr-2 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    Default
                  </span>
                  <span className="mr-2 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                    Dark
                  </span>
                  <span className="mr-2 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                    Red
                  </span>
                  <span className="mr-2 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                    Green
                  </span>
                  <span className="mr-2 rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                    Yellow
                  </span>
                  <span className="mr-2 rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
                    Indigo
                  </span>
                  <span className="mr-2 rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                    Purple
                  </span>
                  <span className="mr-2 rounded-full bg-pink-100 px-2.5 py-0.5 text-xs font-medium text-pink-800 dark:bg-pink-900 dark:text-pink-300">
                    Pink
                  </span>
                </div>
              </div>
              <div className={clsx(i % 2 === 1 && "xl:text-right")}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                necessitatibus, non magni, aspernatur enim cum dolore, omnis
                sapiente sed quia consectetur dicta ad labore consequatur
                incidunt accusantium earum asperiores. Fugit architecto, itaque
                velit earum totam maiores libero deleniti. Sint nemo at
                dignissimos quam neque natus labore quis ducimus et incidunt.
              </div>
              <button
                type="button"
                className={clsx(
                  "mb-2 ml-0 mr-2 self-start rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800",
                  i % 2 === 1 && "xl:self-end"
                )}
              >
                Try it now!
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductInfo;
