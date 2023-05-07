import React, { useState } from "react";
import MenuButton from "../components/MenuButton";
import OrderMenuSection from "../components/OrderMenuSection";
import mainPhoto from "../assets/icons_assets/baklava.jpg";
import {
  appetizers,
  sandwiches,
  entrees,
  salads,
  desserts,
} from "../data/menu";

const OrderPage = () => {
  const [menu, setMenu] = useState(appetizers);
  const [menuTitle, setMenuTitle] = useState("Appetizers");

  return (
    <div className="w-full min-h-[80vh] flex flex-col gap-10 scroll-smooth">
      <section className="max-w-[1400px] self-center overflow-hidden">
        <img className="object-cover" src={mainPhoto} alt="Bruschetta" />
      </section>
      <section className="self-center max-w-[1400px] flex gap-2">
        <a
          aria-label="Appetizers"
          className="p-2 rounded-[16px] bg-[#41644a] text-white hover:text-black hover:bg-[#F4CE14] text-sm transition duration-300 cursor-pointer"
          href="#appetizers"
        >
          Appetizers
        </a>

        <a
          aria-label="Salads"
          className="p-2 rounded-[16px] bg-[#41644a] text-white hover:text-black hover:bg-[#F4CE14] text-sm transition duration-300 cursor-pointer"
          href="#salads"
        >
          Salads
        </a>

        <a
          aria-label="Entrees"
          className="p-2 rounded-[16px] bg-[#41644a] text-white hover:text-black hover:bg-[#F4CE14] text-sm transition duration-300 cursor-pointer"
          href="#entrees"
        >
          Entrees
        </a>

        <a
          aria-label="Sandwiches"
          className="p-2 rounded-[16px] bg-[#41644a] text-white hover:text-black hover:bg-[#F4CE14] text-sm transition duration-300 cursor-pointer"
          href="#sandwiches"
        >
          Sandwiches
        </a>
        <a
          aria-label="Desserts"
          className="p-2 rounded-[16px] bg-[#41644a] text-white hover:text-black hover:bg-[#F4CE14] text-sm transition duration-300 cursor-pointer"
          href="#desserts"
        >
          Desserts
        </a>
      </section>
      <section className="max-w-[1400px] self-center overflow-hidden flex flex-col gap-10">
        <article id="appetizers">
          <OrderMenuSection
            scrollTo="appetizers"
            menuSection="Appetizers"
            menuData={appetizers}
          />
        </article>

        <article id="salads">
          <OrderMenuSection menuSection="Salads" menuData={salads} />
        </article>
        <article id="entrees">
          <OrderMenuSection
            scrollTo="entrees"
            menuSection="Entrees"
            menuData={entrees}
          />
        </article>

        <article id="sandwiches">
          <OrderMenuSection
            scrollTo="sandwiches"
            menuSection="Sandwiches"
            menuData={sandwiches}
          />
        </article>
        <article id="desserts">
          <OrderMenuSection
            scrollTo="desserts"
            menuSection="Desserts"
            menuData={desserts}
          />
        </article>
      </section>
    </div>
  );
};

export default OrderPage;
