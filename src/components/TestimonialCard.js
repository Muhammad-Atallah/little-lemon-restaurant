import React from "react";
import { AiFillStar } from "react-icons/ai";

const TestimonialCard = ({ customerImage, customerName, customerReview }) => {
  return (
    <article className="flex flex-col gap-4 max-w-[13rem] shadow-md bg-white p-2 rounded-[16px] shadow-md">
      <section className="flex text-[#F4CE14]">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </section>
      <section className="flex items-center gap-2 text-sm font-semibold">
        <img
          className="w-[6rem] rounded-full"
          src={customerImage}
          alt={customerImage}
        />
        <h1>{customerName}</h1>
      </section>

      <section className="text-xs">
        <p>{customerReview}</p>
      </section>
    </article>
  );
};

export default TestimonialCard;
