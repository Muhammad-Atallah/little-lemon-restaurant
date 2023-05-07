import Button from "../components/Button";
import React, { useState } from "react";
import MenuSection from "../components/MenuSection";
import mainPhoto from "../assets/icons_assets/konstantinas-ladauskas-86vIY4SPr6A-unsplash.jpg";
import MenuButton from "../components/MenuButton";
import {
  appetizers,
  sandwiches,
  entrees,
  salads,
  desserts,
} from "../data/menu";

const MenuPage = () => {
  const [menu, setMenu] = useState(appetizers);
  const [menuTitle, setMenuTitle] = useState("Appetizers");

  return (
    <div className="w-full min-h-[80vh] flex flex-col gap-10">
      <section className="max-w-[1400px] self-center overflow-hidden">
        <img className="object-cover" src={mainPhoto} alt="Bruschetta" />
      </section>
      <section className="self-center max-w-[1400px] flex gap-2">
        <MenuButton
          buttonText="Appetizers"
          setMenu={setMenu}
          setMenuTitle={setMenuTitle}
          data={appetizers}
          buttonColor={menuTitle === "Appetizers" && "yellow"}
        />

        <MenuButton
          buttonText="Salads"
          setMenu={setMenu}
          setMenuTitle={setMenuTitle}
          data={salads}
          buttonColor={menuTitle === "Salads" && "yellow"}
        />

        <MenuButton
          buttonText="Entrees"
          setMenu={setMenu}
          setMenuTitle={setMenuTitle}
          data={entrees}
          buttonColor={menuTitle === "Entrees" && "yellow"}
        />

        <MenuButton
          buttonText="Sandwiches"
          setMenu={setMenu}
          setMenuTitle={setMenuTitle}
          data={sandwiches}
          buttonColor={menuTitle === "Sandwiches" && "yellow"}
        />

        <MenuButton
          buttonText="Desserts"
          setMenu={setMenu}
          setMenuTitle={setMenuTitle}
          data={desserts}
          buttonColor={menuTitle === "Desserts" && "yellow"}
        />
      </section>
      <section className="self-center max-w-[1400px]">
        <MenuSection data={menu} menuTitle={menuTitle} />
      </section>
    </div>
  );
};

export default MenuPage;
