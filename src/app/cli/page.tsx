import Counter from "@/components/Counter";
import Feature from "@/components/Features";
import React from "react";

function Index() {
  return (
    <div className="container mx-auto">
      <div className="text-6xl font-bold">Glim CLI</div>
      <div className="mt-4">
        Glim cli is the react native boilerplate that provide hassle-free
        architecture for developing react native applications. It's an all in
        one library kit for react native developers. Through glim cli we can
        create components, screens, redux components etc.
      </div>
      <Feature />
      <Counter />
    </div>
  );
}

export default Index;
