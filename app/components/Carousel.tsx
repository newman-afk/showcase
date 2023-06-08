"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

const Images = [
  {
    id: "1",
    alt: "ecommerce",
    href: "#ecommerce",
    srcDark: "/images/ecommerce-dark.png",
    srcLight: "/images/ecommerce-light.png",
  },
  {
    id: "2",
    alt: "chatapp",
    href: "#chatapp",
    srcDark: "/images/coming-soon-dark.avif",
    srcLight: "/images/coming-soon-light.avif",
  },
  {
    id: "3",
    alt: "videochatapp",
    href: "#videochatapp",
    srcDark: "/images/coming-soon-dark.avif",
    srcLight: "/images/coming-soon-light.avif",
  },
];

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(2);

  function goPrev() {
    setCurrentImageIndex((prev) =>
      prev === 0 ? Images?.length - 1 : prev - 1
    );
  }

  function goNext() {
    setCurrentImageIndex((prev) =>
      prev === Images?.length - 1 ? 0 : prev + 1
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto aspect-video w-4/5">
      <div className="flex h-full w-full items-center justify-center ">
        {Images.map((image, i) => {
          return (
            <a
              href={image.href}
              key={image.id}
              className={clsx(
                "absolute h-5/6 w-full rounded-2xl border",
                i !== currentImageIndex && " -z-50 opacity-0"
              )}
            >
              <Image
                priority
                alt={image.alt}
                fill={true}
                sizes="100%"
                style={{ objectFit: "cover" }}
                src={image.srcDark}
                className=" rounded-2xl dark:block"
              />
              <Image
                priority
                alt={image.alt}
                fill={true}
                sizes="100%"
                style={{ objectFit: "cover" }}
                src={image.srcLight}
                className=" rounded-2xl dark:hidden"
              />
              {image.alt !== "ecommerce" && (
                <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10vw] font-bold text-emerald-600 dark:text-neutral-200/70">
                  {image.alt}
                </div>
              )}
            </a>
          );
        })}
      </div>

      <button
        type="button"
        onClick={goPrev}
        className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-white/30 dark:group-hover:bg-white/50 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-gray-800 dark:text-white sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        onClick={goNext}
        className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-white/30 dark:group-hover:bg-white/50 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-gray-800 dark:text-white sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

export default Carousel;
