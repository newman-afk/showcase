import Image from "next/image";

function page() {
  return (
    <div className="px-4 py-9 2xl:container dark:bg-slate-600 md:px-6 md:py-12 lg:px-20 lg:py-16 2xl:mx-auto">
      <h1 className="pb-4 text-3xl font-bold leading-9 text-gray-800 dark:text-white lg:text-4xl">
        About Us
      </h1>
      <p className="text-base font-normal leading-6 text-gray-600 dark:text-white">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum.In the first place we have granted to God, and by this
        our present charter confirmed for us and our heirs forever that the
        English Church shall be free, and shall have her rights entire, and her
        liberties inviolate; and we will that it be thus observed; which is
        apparent from
      </p>

      <div className="pt-12">
        <h1 className="pb-4 text-3xl font-bold leading-9 text-gray-800 dark:text-white lg:text-4xl">
          Our Story
        </h1>
        <p className="text-base font-normal leading-6 text-gray-600 dark:text-white">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum.In the first place we have granted to God, and by
          this our present charter confirmed for us and our heirs forever that
          the English Church shall be free, and shall have her rights entire,
          and her liberties inviolate; and we will that it be thus observed;
          which is apparent from
        </p>
      </div>
    </div>
  );
}

export default page;
