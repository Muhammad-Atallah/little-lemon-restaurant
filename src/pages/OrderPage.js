import React, { useState, useEffect } from "react";
import MenuButton from "../components/MenuButton";
import OrderMenuSection from "../components/OrderMenuSection";
import mainPhoto from "../assets/icons_assets/baklava.jpg";
import { IoBasket } from "react-icons/io5";
import {
  appetizers,
  sandwiches,
  entrees,
  salads,
  desserts,
} from "../data/menu";

const OrderPage = () => {
  const [subTotal, setSubTotal] = useState(0);
  const [items, setItems] = useState([]);
  const [showBasket, setShowBasket] = useState(false);
  const [hideBasket, setHideBasket] = useState(true);

  const handleBasketButton = () => {
    setHideBasket(!hideBasket);
  };

  return (
    <div className="w-full min-h-[80vh] flex flex-col gap-10 scroll-smooth justify-center justify-items-center">
      <section className="max-w-[1400px] self-center overflow-hidden">
        <img className="object-cover" src={mainPhoto} alt="Bruschetta" />
      </section>
      <section className="self-center max-w-[1400px] grid grid-rows-2 grid-cols-3 sm:flex gap-2">
        <a
          aria-label="Appetizers"
          className="p-2 rounded-[16px] bg-[#41644a] text-white hover:text-black hover:bg-[#F4CE14] text-[12px] sm:text-sm transition duration-300 cursor-pointer text-center"
          href="#appetizers"
        >
          Appetizers
        </a>

        <a
          aria-label="Salads"
          className="p-2 rounded-[16px] bg-[#41644a] text-white hover:text-black hover:bg-[#F4CE14] text-[12px] sm:text-sm transition duration-300 cursor-pointer text-center"
          href="#salads"
        >
          Salads
        </a>

        <a
          aria-label="Entrees"
          className="p-2 rounded-[16px] bg-[#41644a] text-white hover:text-black hover:bg-[#F4CE14] text-[12px] sm:text-sm transition duration-300 cursor-pointer text-center"
          href="#entrees"
        >
          Entrees
        </a>

        <a
          aria-label="Sandwiches"
          className="p-2 rounded-[16px] bg-[#41644a] text-white hover:text-black hover:bg-[#F4CE14] text-[12px] sm:text-sm transition duration-300 cursor-pointer text-center"
          href="#sandwiches"
        >
          Sandwiches
        </a>
        <a
          aria-label="Desserts"
          className="p-2 rounded-[16px] bg-[#41644a] text-white hover:text-black hover:bg-[#F4CE14] text-[12px] sm:text-sm transition duration-300 cursor-pointer text-center"
          href="#desserts"
        >
          Desserts
        </a>
      </section>
      <section className="flex flex-row max-w-[1400px] justify-center m-auto justify-betwen gap-8">
        <section className=" self-center overflow-hidden flex flex-col gap-10">
          <article id="appetizers">
            <OrderMenuSection
              setShowBasket={setShowBasket}
              subTotal={subTotal}
              setSubTotal={setSubTotal}
              items={items}
              setItems={setItems}
              menuSection="Appetizers"
              menuData={appetizers}
            />
          </article>

          <article id="salads">
            <OrderMenuSection
              setShowBasket={setShowBasket}
              subTotal={subTotal}
              setSubTotal={setSubTotal}
              items={items}
              setItems={setItems}
              menuSection="Salads"
              menuData={salads}
            />
          </article>
          <article id="entrees">
            <OrderMenuSection
              setShowBasket={setShowBasket}
              subTotal={subTotal}
              setSubTotal={setSubTotal}
              items={items}
              setItems={setItems}
              menuSection="Entrees"
              menuData={entrees}
            />
          </article>

          <article id="sandwiches">
            <OrderMenuSection
              setShowBasket={setShowBasket}
              subTotal={subTotal}
              setSubTotal={setSubTotal}
              items={items}
              setItems={setItems}
              menuSection="Sandwiches"
              menuData={sandwiches}
            />
          </article>
          <article id="desserts">
            <OrderMenuSection
              setShowBasket={setShowBasket}
              subTotal={subTotal}
              setSubTotal={setSubTotal}
              items={items}
              setItems={setItems}
              menuSection="Desserts"
              menuData={desserts}
            />
          </article>
        </section>

        {/* Basket for all screen sizes except small screens */}
        <section
          style={{
            "background-image":
              "linear-gradient(to bottom, #41644a, #4d7457, #598464, #659572, #72a680)",
          }}
          className={
            showBasket
              ? "w-[12rem] h-full col-span-1 shadow-lg flex-col justify-start sticky top-0 bg-[#41644a] text-white rounded-md hidden sm:flex"
              : "w-[12rem] min-h-[50vh] bg-white col-span-1 shadow-lg flex-col justify-start sticky top-0 hidden"
          }
        >
          <section className="flex flex-col gap-5 py-5">
            <section className="flex justify-center gap-1 justify-items-center">
              <h1 className="font-bold self-center">Basket</h1>
              <IoBasket className="self-center" size={25} />
            </section>
            {items.map((item) => (
              <article className="flex justify-between text-xs px-2 border-b-[1px]">
                <section className="flex gap-1">
                  <h1>1</h1>
                  <h1>{item.name}</h1>
                </section>
                <h2>${item.price}</h2>
              </article>
            ))}

            <section className="text-[12px] flex flex-col">
              <section className="flex justify-between px-2">
                <h1>Subtotal</h1>
                <h2>${subTotal}</h2>
              </section>
              <section className="flex justify-between px-2">
                <h1>Delivery costs</h1>
                <h2>$1,00</h2>
              </section>
              <section className="flex justify-between px-2">
                <h1>Total</h1>
                <h2>${subTotal + 1}</h2>
              </section>
            </section>
            <button className="p-2 rounded-[16px] bg-[#F4CE14] text-black text-sm w-20 self-center">
              Checkout
            </button>
          </section>
        </section>

        {/* Basket for small screens, controlled by button */}
        <section className="fixed bottom-2 justify-center justify-items-center">
          <section
            style={{
              "background-image":
                "linear-gradient(to bottom, #41644a, #4d7457, #598464, #659572, #72a680)",
            }}
            className={
              hideBasket
                ? "hidden"
                : "w-[12rem] h-full col-span-1 shadow-lg flex-col justify-start bg-[#41644a] text-white rounded-md"
            }
          >
            <section className="flex flex-col gap-5 py-5">
              {items.map((item) => (
                <article className="flex justify-between text-xs px-2 border-b-[1px]">
                  <section className="flex gap-1">
                    <h1>1</h1>
                    <h1>{item.name}</h1>
                  </section>
                  <h2>${item.price}</h2>
                </article>
              ))}

              <section className="text-[12px] flex flex-col">
                <section className="flex justify-between px-2">
                  <h1>Subtotal</h1>
                  <h2>${subTotal}</h2>
                </section>
                <section className="flex justify-between px-2">
                  <h1>Delivery costs</h1>
                  <h2>$1,00</h2>
                </section>
                <section className="flex justify-between px-2">
                  <h1>Total</h1>
                  <h2>${subTotal + 1}</h2>
                </section>
              </section>
              <button className="p-2 rounded-[16px] bg-[#F4CE14] text-black text-sm w-20 self-center">
                Checkout
              </button>
            </section>
          </section>
          <button
            onClick={handleBasketButton}
            className="flex gap-2 py-1 px-2 rounded-md bg-[#41644a] text-white self-center mx-auto my-5 sm:hidden"
          >
            <h1>Basket</h1>
            <IoBasket className="self-center" size={25} />
            <h1 className="bg-[#F4CE14] rounded-full px-2 py-1 text-[12px]">
              {items.length}
            </h1>
          </button>
        </section>
      </section>
    </div>
  );
};

export default OrderPage;
