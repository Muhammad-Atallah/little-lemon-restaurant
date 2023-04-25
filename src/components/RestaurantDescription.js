import React from "react";

const RestaurantDescription = ({ description, background }) => {
  return (
    <section className="flex flex-col gap-8 max-w-xl">
      <section className="flex flex-col gap-0">
        <h1
          className={
            background === "green"
              ? "text-[40px] md:text-[64px] text-[#F4CE14] font-semibold"
              : "text-[40px] lg:text-[64px] text-[#41644a] font-semibold w-full"
          }
        >
          Little Lemon
        </h1>
        <h2
          className={
            background === "green"
              ? "text-[30px] md:text-[40px] text-white leading-4"
              : "text-[30px] lg:text-[40px] text-[#41644a] leading-4"
          }
        >
          Chicago
        </h2>
      </section>
      <section>
        <p
          className={
            background === "green"
              ? "text-white text-[16px] md:text-[20px] mr-5"
              : "text-[#41644a] text-[16px] lg:text-[20px]"
          }
        >
          {description}
        </p>
      </section>
    </section>
  );
};

export default RestaurantDescription;
