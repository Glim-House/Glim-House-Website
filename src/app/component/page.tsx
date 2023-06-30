"use client";
import ComponentGrid from "@/components/ComponentGrid";
import Header from "@/components/Header";
import SidePanel from "@/components/SidePanel";
import { useAppStore } from "@/store/store";
import React from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function page() {
  const { showSidebar } = useAppStore((State) => State);
  return (
    <div>
      <Header />
      <ComponentGrid />
      {showSidebar && <SidePanel />}
      <ToastContainer />
    </div>
  );
}

export default page;
