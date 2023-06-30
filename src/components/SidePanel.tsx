"use client";
import { useAppStore } from "@/store/store";
import React from "react";
import { toast } from "react-toastify";

function SidePanel() {
  const { toggleSideBar } = useAppStore((State) => State);
  const copyToClipboard = () => {
    toast.success("copied to clipboard");
  };
  return (
    <>
      <div className="bg-white shadow-xl w-3/4 fixed top-0 right-0 h-screen overflow-auto p-8 ">
        <div
          className="inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white cursor-pointer hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          onClick={() => {
            toggleSideBar(false);
          }}
        >
          <svg
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            width="12px"
            height="12px"
            viewBox="0 0 52 52"
            enableBackground="new 0 0 52 52"
            xmlSpace="preserve"
          >
            <path
              d="M31,25.4L44,12.3c0.6-0.6,0.6-1.5,0-2.1L42,8.1c-0.6-0.6-1.5-0.6-2.1,0L26.8,21.2c-0.4,0.4-1,0.4-1.4,0
	L12.3,8c-0.6-0.6-1.5-0.6-2.1,0l-2.1,2.1c-0.6,0.6-0.6,1.5,0,2.1l13.1,13.1c0.4,0.4,0.4,1,0,1.4L8,39.9c-0.6,0.6-0.6,1.5,0,2.1
	l2.1,2.1c0.6,0.6,1.5,0.6,2.1,0L25.3,31c0.4-0.4,1-0.4,1.4,0l13.1,13.1c0.6,0.6,1.5,0.6,2.1,0l2.1-2.1c0.6-0.6,0.6-1.5,0-2.1
	L31,26.8C30.6,26.4,30.6,25.8,31,25.4z"
            />
          </svg>
        </div>

        <div className="max-w-7xl py-6 flex space-x-5 w-full  items-center justify-center mx-auto tails-selected-element">
          <div className="flex flex-col h-full w-full ">
            <div className="text-4xl font-semibold"> Test Component</div>
            <div>By devpenzil</div>
          </div>
          <div className="flex items-center justify-between h-full w-full bg-gray-200 p-3 rounded-md ">
            <div className="text-base font-mono font-thin">
              glim clone devpenzil/test_component ComponentName
            </div>
            <div className="cursor-pointer" onClick={copyToClipboard}>
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                  fill="#000000"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="max-w-7xl   flex space-x-5 w-full h-[300px] items-center justify-center mx-auto tails-selected-element">
          <div className="flex h-full w-full bg-gray-300 rounded-md" />
          <div className="flex h-full w-full bg-gray-300 rounded-md overflow-auto">
            <code>
              <pre>
                {`
            {
              "data": {
                "form": "ssn",
                "formpage": "signupdetails",
                "formProgress": 3,
                "onboardState": "completed",
                "onboardpagestatus": "welcome",
                "characterDetails": {
                  "isStarted": true,
                  "crediMix": true,
                  "revolvingAccounts": true,
                  "installmentAccounts": true,
                  "negativeItems": true,
                  "isCompleted": true,
                }
              }
            }`}
              </pre>
            </code>
          </div>
        </div>
        <div className="max-w-7xl  py-4 flex space-x-5 w-full h-[300px]  items-center justify-center mx-auto tails-selected-element">
          <div className="flex h-full w-full bg-gray-300 rounded-md" />
          <div className="flex h-full w-full bg-gray-300 rounded-md" />
        </div>
      </div>
    </>
  );
}

export default SidePanel;
