import { createContext, useState } from "react";

const OrderContext = createContext("");

export function OrderProvider({ children }) {
  const [subTotal, setSubTotal] = useState();
  const [items, setItems] = useState([{ name: "", number: "", price: "" }]);
  return (
    <OrderContext.Provider value={{ subTotal, setSubTotal, items, setItems }}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContext;
