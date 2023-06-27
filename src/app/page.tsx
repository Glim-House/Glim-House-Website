"use client";
import Description from "@/components/Description";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import Spotlight from "@/components/Spotlight";
import { useAppStore } from "@/store/store";
import React from "react";

function Page() {
  const value = useAppStore((state) => state);
  console.log(value);
  return (
    <div>
      <Spotlight />
      <Products />
      <Description />
      <Footer />
    </div>
  );
}

export default Page;
