import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contace Us, no, just me",
};

function Contact() {
  return (
    <div className="my-12 flex w-full items-center justify-center">
      <div className="top-40 rounded bg-white px-8 py-12 shadow lg:px-28">
        <p className="text-center text-xl font-bold leading-7 text-gray-700 md:text-3xl">
          Let’s chat and get a quote!
        </p>
        <div className="mt-12 items-center md:flex">
          <div className="flex flex-col md:w-72">
            <label className="text-base font-semibold leading-none text-gray-800">
              Name
            </label>
            <input
              tabIndex={0}
              arial-label="Please input name"
              type="name"
              className="focus:oultine-none mt-4 rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-100 focus:border-indigo-700"
              placeholder="Please input  name"
            />
          </div>
          <div className="mt-4 flex flex-col md:ml-6 md:mt-0 md:w-72">
            <label className="text-base font-semibold leading-none text-gray-800">
              Email Address
            </label>
            <input
              tabIndex={0}
              arial-label="Please input email address"
              type="name"
              className="focus:oultine-none mt-4 rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-100 focus:border-indigo-700"
              placeholder="Please input email address"
            />
          </div>
        </div>
        <div className="mt-8 items-center md:flex">
          <div className="flex flex-col md:w-72">
            <label className="text-base font-semibold leading-none text-gray-800">
              Company name
            </label>
            <input
              tabIndex={0}
              role="input"
              arial-label="Please input company name"
              type="name"
              className="focus:oultine-none mt-4 rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-100 focus:border-indigo-700 "
              placeholder="Please input company name"
            />
          </div>
          <div className="mt-4 flex flex-col md:ml-6 md:mt-0 md:w-72">
            <label className="text-base font-semibold leading-none text-gray-800">
              Country
            </label>
            <input
              tabIndex={0}
              arial-label="Please input country name"
              type="name"
              className="focus:oultine-none mt-4 rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-100 focus:border-indigo-700"
              placeholder="Please input country name"
            />
          </div>
        </div>
        <div>
          <div className="mt-8 flex w-full flex-col">
            <label className="text-base font-semibold leading-none text-gray-800">
              Message
            </label>
            <textarea
              tabIndex={0}
              aria-label="leave a message"
              role="textbox"
              className="focus:oultine-none mt-4 h-36 resize-none rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-100 focus:border-indigo-700"
              defaultValue={""}
            />
          </div>
        </div>
        <p className="mt-4 text-xs leading-3 text-gray-600">
          By clicking submit you agree to our terms of service, privacy policy
          and how we use data as stated
        </p>
        <div className="flex w-full items-center justify-center">
          <button className="mt-9 rounded bg-indigo-700 px-10 py-4 text-base font-semibold leading-none text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
