import React, { useContext } from "react";
import OrderMenuItem from "./OrderMenuItem";
import OrderContext from "../contexts/OrderContext";

const OrderMenuSection = ({
  menuSection,
  menuData,
  subTotal,
  setSubTotal,
  items,
  setItems,
  setShowBasket,
}) => {
  return (
    <section className="flex flex-col gap-5 justify-center justify-items-center text-[#41644a]">
      <h1 className="text-center font-bold text-lg uppercase">{menuSection}</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-5 justify-center justify-items-center">
        {menuData.map((item) => (
          <OrderMenuItem
            setShowBasket={setShowBasket}
            subTotal={subTotal}
            setSubTotal={setSubTotal}
            items={items}
            setItems={setItems}
            {...item}
          />
        ))}
      </section>
    </section>
  );
};

export default OrderMenuSection;
