import React from "react";

function Products() {
  return (
    <div className="container mx-auto" id="explore">
      <nav aria-label="Tabs">
        <ul className="flex border-b border-gray-100">
          <li className="flex-1 cursor-pointer">
            <a className="relative block p-4" href>
              <span className="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600" />
              <div className="flex items-center justify-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900">CLI</span>
              </div>
            </a>
          </li>
          <li className="flex-1 cursor-not-allowed opacity-25">
            <a className="relative block p-4" href>
              <div className="flex items-center justify-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900">
                  Components
                </span>
              </div>
            </a>
          </li>
          <li className="flex-1 cursor-not-allowed opacity-25">
            <a className="relative block p-4" href>
              <div className="flex items-center justify-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900">
                  Boilerplate
                </span>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Products;
