import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

function ProductInfo() {
  return (
    <>
      {/* ecommerce */}
      <div
        id="ecommerce"
        className="mx-4 flex h-screen py-8 dark:text-white md:mx-8"
      >
        <div
          className={clsx(
            "flex-1 items-center justify-evenly rounded-xl p-4 shadow shadow-stone-400 dark:shadow-orange-100 xl:flex xl:p-16"
          )}
        >
          <div className="flex-1">
            <div className="relative mx-auto h-[172px] max-w-[301px] rounded-t-xl border-[8px] border-gray-800 bg-gray-800 dark:border-gray-800 md:h-[294px] md:max-w-[512px]">
              <div className="relative h-[156px] overflow-hidden rounded-lg bg-white dark:bg-gray-800 md:h-[278px]">
                <video
                  src="/videos/ecommerce.mp4"
                  controls
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
            </div>
            <div className="relative mx-auto h-[17px] max-w-[351px] rounded-b-xl rounded-t-sm bg-gray-900 dark:bg-gray-700 md:h-[21px] md:max-w-[597px]">
              <div className="absolute left-1/2 top-0 h-[5px] w-[56px] -translate-x-1/2 rounded-b-xl bg-gray-800 md:h-[8px] md:w-[96px]"></div>
            </div>
          </div>
          <div className="mx-auto mt-8 flex flex-1 flex-col items-center justify-center gap-2 sm:max-w-md md:max-w-xl md:items-start xl:mt-0">
            <div className={clsx("items-center text-center md:flex")}>
              <span
                className={clsx(
                  "mr-8 flex items-center text-2xl font-medium text-gray-900 dark:text-white"
                )}
              >
                <span className="mr-1.5 flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-blue-600"></span>
                Ecommerce
              </span>

              <div className={clsx("flex flex-wrap gap-2")}>
                <span className="mr-2 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  Next
                </span>
                <span className="mr-2 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                  Prisma
                </span>
                <span className="mr-2 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                  Cloudinary
                </span>
                <span className="mr-2 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                  SEO
                </span>
              </div>
            </div>
            <div>
              Powerful Ecommerce website with dedicated Nextjs to provide SEO
              services; server rendering for maximum information security;
              administrator account to easily add products; and use Stripe to
              provide web-based online payment features.
            </div>
            <Link
              href="/showcase/ecommerce"
              type="button"
              className={clsx(
                "mb-2 ml-0 mr-2 self-start rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2.5 text-center text-sm font-medium uppercase text-white hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800"
              )}
            >
              Try it now !
            </Link>
          </div>
        </div>
      </div>
      {/* chatapp */}
      <div
        id="chatapp"
        className="mx-4 flex h-screen py-8 dark:text-white md:mx-8"
      >
        <div
          className={clsx(
            "flex-1 items-center justify-evenly rounded-xl p-4 shadow shadow-stone-400 dark:shadow-orange-100 xl:flex xl:p-16",
            "xl:flex-row-reverse"
          )}
        >
          <div className="flex-1">
            <div className="relative mx-auto h-[172px] max-w-[301px] rounded-t-xl border-[8px] border-gray-800 bg-gray-800 dark:border-gray-800 md:h-[294px] md:max-w-[512px]">
              <div className="relative h-[156px] overflow-hidden rounded-lg bg-white dark:bg-gray-800 md:h-[278px]">
                <Image
                  fill={true}
                  sizes="100%"
                  src="/images/coming-soon-light.avif"
                  className="h-[156px] w-full rounded-xl dark:hidden md:h-[278px]"
                  alt=""
                />
                <Image
                  fill={true}
                  sizes="100%"
                  src="/images/coming-soon-dark.avif"
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
                "xl:flex-row-reverse"
              )}
            >
              <span
                className={clsx(
                  "mr-8 flex items-center text-2xl font-medium text-gray-900 dark:text-white",
                  "xl:mr-0"
                )}
              >
                <span className="mr-1.5 flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-blue-600"></span>
                Chatapp
              </span>

              <div
                className={clsx("flex flex-wrap gap-2", "xl:flex-row-reverse")}
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
            <div className="mr-auto xl:text-right">
              Coming soon! <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, qui
              perspiciatis. Enim adipisci sed illo debitis quia ex aliquid
              perferendis!
            </div>
            <Link
              href="/showcase/chatapp"
              type="button"
              className={clsx(
                "mb-2 ml-0 mr-2 self-start rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2.5 text-center text-sm font-medium uppercase text-white hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800",
                "xl:self-end"
              )}
            >
              Try it now !
            </Link>
          </div>
        </div>
      </div>
      {/* videochatapp */}
      <div
        id="videochatapp"
        className="mx-4 flex h-screen py-8 dark:text-white md:mx-8"
      >
        <div
          className={clsx(
            "flex-1 items-center justify-evenly rounded-xl p-4 shadow shadow-stone-400 dark:shadow-orange-100 xl:flex xl:p-16"
          )}
        >
          <div className="flex-1">
            <div className="relative mx-auto h-[172px] max-w-[301px] rounded-t-xl border-[8px] border-gray-800 bg-gray-800 dark:border-gray-800 md:h-[294px] md:max-w-[512px]">
              <div className="relative h-[156px] overflow-hidden rounded-lg bg-white dark:bg-gray-800 md:h-[278px]">
                <Image
                  fill={true}
                  sizes="100%"
                  src="/images/coming-soon-light.avif"
                  className="h-[156px] w-full rounded-xl dark:hidden md:h-[278px]"
                  alt=""
                />
                <Image
                  fill={true}
                  sizes="100%"
                  src="/images/coming-soon-dark.avif"
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
            <div className={clsx("items-center text-center md:flex")}>
              <span
                className={clsx(
                  "mr-8 flex items-center text-2xl font-medium text-gray-900 dark:text-white"
                )}
              >
                <span className="mr-1.5 flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-blue-600"></span>
                VideoChatapp
              </span>

              <div className={clsx("flex flex-wrap gap-2")}>
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
            <div className="mr-auto">
              Coming soon! <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, qui
              perspiciatis. Enim adipisci sed illo debitis quia ex aliquid
              perferendis!
            </div>
            <Link
              href="/showcase/videochatapp"
              type="button"
              className={clsx(
                "mb-2 ml-0 mr-2 self-start rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2.5 text-center text-sm font-medium uppercase text-white hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800"
              )}
            >
              Try it now !
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
