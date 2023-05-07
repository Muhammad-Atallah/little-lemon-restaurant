import React from "react";
import OrderMenuItem from "./OrderMenuItem";

const OrderMenuSection = ({ menuSection, menuData }) => {
  return (
    <section className="flex flex-col gap-5 justify-center justify-items-center text-[#41644a]">
      <h1 className="text-center font-bold text-lg uppercase">{menuSection}</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto gap-5 justify-center justify-items-center">
        {menuData.map((item) => (
          <OrderMenuItem {...item} />
        ))}
      </section>
    </section>
  );
};

export default OrderMenuSection;
