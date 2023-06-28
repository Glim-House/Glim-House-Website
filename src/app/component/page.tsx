import ComponentGrid from "@/components/ComponentGrid";
import Header from "@/components/Header";
import React from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function page() {
  return (
    <div>
      <Header />
      <ComponentGrid />
      <ToastContainer />
    </div>
  );
}

export default page;
