import React from "react";
import RestaurantDescription from "./RestaurantDescription";
const AboutSection = () => {
  return (
    <section style={{ "font-family": "Karla" }} className="w-full ">
      <section className="flex max-w-[1400px] m-auto px-10 mb-2 py-10 justify-between gap-16 ">
        <section className="flex flex-col gap-8 self-start">
          <RestaurantDescription
            background="white"
            description="Little Lemon is a Mediterranean restaurant in Chicago founded and run by Mario and Adrian, two passionate chefs committed to authentic, healthy, and fresh cuisine. The restaurant boasts a warm and inviting atmosphere with a menu that features a range of traditional Mediterranean dishes, including fresh salads, hearty sandwiches, and flavorful entrees. Mario and Adrian source their ingredients from local farms and use only the freshest produce and spices to create their flavorful dishes. Little Lemon is a must-visit destination for anyone seeking delicious, healthy Mediterranean fare."
          />
        </section>
        <section className="flex self-center">
          <img
            src={require("../assets/icons_assets/Mario and Adrian A.jpg")}
            className="w-lg min-w-[14rem] w-[14rem] rounded-[5px] relative translate-y-16 translate-x-16 z-10"
            alt="restaurant food"
          />
          <img
            src={require("../assets/icons_assets/Mario and Adrian b.jpg")}
            className="w-lg min-w-[14rem] w-[14rem] relative rounded-[5px] z-0"
            alt="restaurant food"
          />
        </section>
      </section>
    </section>
  );
};

export default AboutSection;
