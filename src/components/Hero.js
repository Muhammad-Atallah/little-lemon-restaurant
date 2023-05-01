import React from "react";
import RestaurantDescription from "./RestaurantDescription";
import Button from "./Button";

const Hero = () => {
  return (
    <section style={{ "font-family": "Karla" }} className="w-full ">
      <section className="flex max-w-[1400px] m-auto px-10 mb-2 py-10 bg-[#41644a]">
        <section className="w-full flex flex-col gap-8 self-start">
          <RestaurantDescription
            background="green"
            description="Indulge in the vibrant flavors of the Mediterranean at our restaurant.
          Our menu features fresh ingredients, authentic dishes, and a warm,
          inviting atmosphere for an unforgettable dining experience."
          />
          <Button
            buttonText="Reserve a Table"
            buttonColor="yellow"
            to="/booking"
          />
        </section>
        <section className="w-full justify-center hidden sm:flex">
          <img
            src={require("../assets/icons_assets/restauranfood.png")}
            className=" w-auto md:w-[15rem] relative rounded-[16px]"
            alt="restaurant food"
          />
        </section>
      </section>
    </section>
  );
};

export default Hero;
