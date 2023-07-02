import CreateComponent from "@/components/CreateComponent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function page() {
  return (
    <div>
      <Header />
      <CreateComponent />
      <Footer />
    </div>
  );
}

export default page;
