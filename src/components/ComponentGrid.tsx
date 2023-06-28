/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useAppStore } from "@/store/store";
import React, { useEffect, useState } from "react";

type componentType = {
  c_name: string;
  component_file: string;
  created_at: string;
  developer_name: string;
  id: number;
  preview: string;
  style_file: string;
  test_file: string;
  visibility: string;
};

function ComponentGrid() {
  const { fetchPublicComponents, publicComponents } = useAppStore(
    (State) => State
  );
  useEffect(() => {
    fetchPublicComponents();
  }, []);

  return (
    <div className="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl ">
      <div className="flex grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
        {publicComponents?.map((obj, index) => {
          return (
            <div
              className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"
              key={index}
            >
              <a href="#_" className="block">
                <img
                  className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
                  src="https://i.ibb.co/xzqq8sN/IMG-4971-3.jpg"
                />
              </a>
              {/* <div className="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                <span>Lifestyle</span>
              </div> */}
              <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
                <a href="#_">{obj.c_name}</a>
              </h2>

              <p className="pt-2 text-xs font-medium">
                <a href="#_" className="mr-1 underline">
                  {obj.developer_name}
                </a>{" "}
                · <span className="mx-1">April 17, 2021</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ComponentGrid;
