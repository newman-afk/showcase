"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

const Images = [
  {
    id: "1",
    alt: "ecommerce",
    href: "#ecommerce",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  },
  {
    id: "2",
    alt: "fads",
    href: "#test2",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  },
  {
    id: "3",
    alt: "fads",
    href: "#test3",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  },
];

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(2);

  function goPrev() {
    setCurrentImageIndex((prev) => (prev === 0 ? Images.length - 1 : prev - 1));
  }

  function goNext() {
    setCurrentImageIndex((prev) => (prev === Images.length - 1 ? 0 : prev + 1));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto aspect-video w-4/5">
      <div className="flex h-full w-full rounded-lg">
        {Images.map((image, i) => {
          return (
            <a
              href={image.href}
              key={image.id}
              className={clsx(
                "absolute h-full w-full",
                i !== currentImageIndex && " -z-50 opacity-0"
              )}
            >
              <Image
                priority
                alt={image.alt}
                fill={true}
                sizes="100%"
                style={{ objectFit: "cover" }}
                src={image.src}
                className=" rounded-2xl"
              />
            </a>
          );
        })}
      </div>

      <button
        type="button"
        onClick={goPrev}
        className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
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
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
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
