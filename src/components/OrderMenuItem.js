import React from "react";
const OrderMenuItem = ({ name, description, image, price }) => {
  return (
    <article className="h-[200px] w-[95%] sm:w-[250px] sm:h-[400px] border-2 rounded-md text-[#41644a] overflow-hidden flex flex-row-reverse sm:flex-col justify-between sm:justify-normal gap-2 text-center mx-4 sm:pb-2 cursor-pointer group ">
      <img
        className="w-[50%] object-cover sm:w-full sm:max-h-[60%] sm:h-[60%] rounded-r-md group-hover:scale-110 transition duration-500"
        src={image}
        alt=""
      />
      <section className="w-[50%] sm:w-full flex flex-col justify-around gap-2 p-1">
        <h1 className="text-sm sm:text-base w-full font-semibold uppercase">
          {name}
        </h1>
        <p className="text-[12px] w-full">{description}</p>
        <h2 className="text-xs font-semibold">{price}</h2>
      </section>
    </article>
  );
};

export default OrderMenuItem;
