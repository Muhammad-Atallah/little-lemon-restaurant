import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonialsData = [
    {
      customerImage: require("../assets/images/Aanetra S..jpg"),
      customerName: "Aanetra S.",
      customerReview:
        "Little Lemon is a hidden gem in Chicago! The Mediterranean food is delicious and the service is fantastic. Highly recommend!",
    },
    {
      customerImage: require("../assets/images/Barbara B..png"),
      customerName: "Barbara B.",
      customerReview:
        "Little Lemon is a delightful surprise! The Mediterranean dishes are so fresh and healthy, perfect for my diet. Great find!",
    },
    {
      customerImage: require("../assets/images/James E..png"),
      customerName: "James E.",
      customerReview:
        "Little Lemon is a feast for the eyes! The Mediterranean plates are beautifully presented, and the lamb gyro was my favorite. A must-visit for foodies!",
    },
    {
      customerImage: require("../assets/images/Olivia M..png"),
      customerName: "Olivia M",
      customerReview:
        "Little Lemon was a great introduction to authentic Mediterranean cuisine. The flavors and spices were amazing, and the service was top-notch. Will definitely return!",
    },
  ];
  return (
    <section
      style={{ "font-family": "Karla" }}
      className="flex flex-col max-w-[1400px] m-auto px-10 mb-2 py-10 gap-10 bg-[#FBDABB]"
    >
      <section className="flex justify-between">
        <h1 className="text-[40px] font-semibold">What our customers say!</h1>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center items-center gap-5">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard
            customerName={testimonial.customerName}
            customerImage={testimonial.customerImage}
            customerReview={testimonial.customerReview}
          />
        ))}
      </section>
    </section>
  );
};

export default Testimonials;
