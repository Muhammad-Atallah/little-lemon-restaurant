import React from "react";

const RestaurantDescription = () => {
  return (
    <section className="flex flex-col gap-8 max-w-xl">
      <section className="flex flex-col gap-0">
        <h1 className="text-[64px] text-[#F4CE14] font-semibold">
          Little Lemon
        </h1>
        <h2 className="text-[40px] text-white leading-4">Chicago</h2>
      </section>
      <section>
        <p className="text-white text-[20px]">
          Indulge in the vibrant flavors of the Mediterranean at our restaurant.
          Our menu features fresh ingredients, authentic dishes, and a warm,
          inviting atmosphere for an unforgettable dining experience.
        </p>
      </section>
    </section>
  );
};

export default RestaurantDescription;
