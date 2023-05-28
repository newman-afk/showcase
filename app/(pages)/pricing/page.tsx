import Image from "next/image";

function page() {
  return (
    <>
      <div className="px-6 py-20 xl:container xl:mx-auto 2xl:px-0">
        <div className="items-center justify-between lg:flex">
          <div className=" w-full lg:w-1/2">
            <p className="text-base leading-4 text-gray-600">
              Choose your plan
            </p>
            <h1
              role="heading"
              className="mt-3 text-3xl font-bold leading-10 text-gray-800 md:text-5xl"
            >
              Our pricing plan
            </h1>
            <p
              role="contentinfo"
              className="mt-5 text-base leading-5 text-gray-600"
            >
              We’re working on a suit of tools to make managing complex systems
              easier, for everyone for free. we can’t wait to hear what you
              think
            </p>
            <div className="w-56">
              <div className="mt-10 flex items-center rounded-full bg-gray-100 shadow">
                <button
                  className="mr-1 rounded-full bg-gray-100 px-6 py-4 text-base leading-none text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
                  id="monthly"
                >
                  Monthly
                </button>
                <button
                  className="rounded-full bg-indigo-700 px-6 py-4 text-base leading-none text-white focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
                  id="annually"
                >
                  Annually
                </button>
              </div>
            </div>
          </div>
          <div
            className="relative mt-12 w-full md:px-8 lg:mt-0 lg:w-7/12 xl:w-1/2"
            role="list"
          >
            <Image
              fill={true}
              sizes="100%"
              src="https://i.ibb.co/0n6DSS3/bgimg.png"
              className="absolute -ml-12 mt-24 w-full"
              alt="background circle images"
            />
            <div
              role="listitem"
              className="relative z-30 cursor-pointer rounded-lg bg-white p-8 shadow"
            >
              <div className="items-center justify-between md:flex">
                <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                  Starter
                </h2>
                <p className="mt-4 text-2xl font-semibold leading-6 text-gray-800 md:mt-0">
                  FREE
                </p>
              </div>
              <p className="mt-4 text-base leading-6 text-gray-600 md:w-80">
                Full access to all features and no credit card required
              </p>
            </div>
            <div
              role="listitem"
              className="relative z-30 mt-3 flex cursor-pointer rounded-lg bg-white shadow"
            >
              <div className="h-auto  w-2.5 rounded-bl-md rounded-tl-md bg-indigo-700" />
              <div className="w-full p-8">
                <div className="items-center justify-between md:flex">
                  <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                    Personal
                  </h2>
                  <p className="mt-4 text-2xl font-semibold leading-6 text-gray-800 md:mt-0">
                    $18<span className="text-base font-normal">/mo</span>
                  </p>
                </div>
                <p className="mt-4 text-base leading-6 text-gray-600 md:w-80">
                  Unlimited products features and dedicated support channels
                </p>
              </div>
            </div>
            <div
              role="listitem"
              className="relative z-30 mt-7 cursor-pointer rounded-lg bg-white p-8 shadow"
            >
              <div className="items-center justify-between md:flex">
                <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                  Team
                </h2>
                <p className="mt-4 text-2xl font-semibold leading-6 text-gray-800 md:mt-0">
                  $18<span className="text-base font-normal">/mo</span>
                </p>
              </div>
              <p className="mt-4 text-base leading-6 text-gray-600 md:w-80">
                Unlimited products features and dedicated support channels
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
