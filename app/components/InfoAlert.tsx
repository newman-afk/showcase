function InfoAlert({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="mb-4 flex rounded-lg bg-blue-50 p-4 text-sm text-blue-800 dark:bg-gray-800 dark:text-blue-400"
      role="alert"
    >
      <svg
        aria-hidden="true"
        className="mr-3 inline h-5 w-5 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="sr-only">Info</span>
      <div>
        <span className="mr-4 font-medium">Info alert!</span>
        {children}
      </div>
    </div>
  );
}

export default InfoAlert;
