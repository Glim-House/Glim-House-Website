import React from "react";

function CliSideNav() {
  return (
    <div>
      <div>
        <ul className="flex flex-col space-y-2">
          <li>
            <strong className="block text-xs font-medium uppercase text-gray-400">
              Intro
            </strong>
            <ul className="mt-2 space-y-1">
              <li>
                <a
                  href
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  Overiew
                </a>
              </li>
              <li>
                <a
                  href
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Requirements
                </a>
              </li>
            </ul>
          </li>
          <li>
            <strong className="block text-xs font-medium uppercase text-gray-400">
              Commands
            </strong>
            <ul className="mt-2 space-y-1">
              <li>
                <a
                  href
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Create App
                </a>
              </li>
              <li>
                <a
                  href
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Generate
                </a>
              </li>
              <li>
                <a
                  href
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Add
                </a>
              </li>
              <li>
                <a
                  href
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Clone
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CliSideNav;
