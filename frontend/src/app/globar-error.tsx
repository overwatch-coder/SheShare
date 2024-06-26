"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error({ error });
    console.log({ message: error.message, name: error.name });
  }, [error]);

  return (
    <html>
      <head>
        <title>Oops! Something went wrong!</title>
      </head>
      <body>
        <div className="flex flex-col items-center mx-auto mt-32 py-20 space-y-6 text-center">
          <h2 className="text-4xl font-bold text-primary-dark">
            Something went wrong!
          </h2>

          <small>Manually refresh the page if the issue persists</small>

          <div className="flex flex-col items-center space-y-3 md:flex-row md:space-y-0 md:space-x-5">
            <button
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
              className="px-5 py-3 text-white rounded bg-pink-500 hover:bg-transparent border hover:border-pink-500 hover:text-pink-500"
            >
              Try again
            </button>

            <Link
              href={"/"}
              className="px-5 py-3 text-white rounded bg-pink-500 hover:bg-transparent border hover:border-pink-500 hover:text-pink-500"
            >
              Go home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
