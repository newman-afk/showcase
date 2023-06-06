import Link from "next/link";

function page() {
  return (
    <div className=" bg-gray-100">
      <div className="bg-white p-6 dark:bg-slate-900 md:mx-auto">
        <svg
          viewBox="0 0 24 24"
          className="mx-auto my-6 h-16 w-16 text-green-600"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <div className="text-center">
          <h3 className="text-center text-base font-semibold text-gray-900 dark:text-slate-50 md:text-2xl">
            Payment Done!
          </h3>
          <p className="my-2 text-gray-600 dark:text-gray-400">
            Thank you for completing your secure online payment.
          </p>
          <p className=" dark:text-white"> Have a great day! </p>
          <div className="py-10 text-center">
            <Link
              href="/showcase/ecommerce/mycart"
              className="bg-indigo-600 px-12 py-3 font-semibold text-white hover:bg-indigo-500"
            >
              GO BACK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
