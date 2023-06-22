import Description from "@/components/Description";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import Spotlight from "@/components/Spotlight";
import React from "react";

function page() {
  return (
    <div>
      <Spotlight />
      <Products />
      <Description />
      <Footer />
    </div>
  );
}

export default page;
