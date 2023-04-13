import React from "react";
import RestaurantDescription from "./RestaurantDescription";
import MainImage from "./MainImage";
import Button from "./Button";

const Hero = () => {
  return (
    <section style={{ "font-family": "Karla" }} className="w-full bg-[#41644a]">
      <section className="flex max-w-[1400px] m-auto px-10 mb-2 py-10 justify-between">
        <section className="flex flex-col gap-8 self-start">
          <RestaurantDescription />
          <Button buttonText="Reserve a Table" buttonColor="yellow" />
        </section>
        <section className="self-end">
          <MainImage />
        </section>
      </section>
    </section>
  );
};

export default Hero;
