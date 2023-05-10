import React from "react";
import SignUpForm from "../components/SignUpForm";

const SignUpPage = () => {
  return (
    <section
      style={{ "font-family": "Karla" }}
      className="w-full flex justify-center justify-items-center items-center h-[80vh]"
    >
      <section
        style={{
          "background-image":
            "linear-gradient(to bottom, #41644a, #4d7457, #598464, #659572, #72a680)",
        }}
        className=" flex flex-col justify-items-center items-center gap-10 py-16 px-4 sm:px-24 border-2 rounded-md m-2 shadow-lg text-white"
      >
        <section className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-md md:text-xl font-semibold text-center">
            Sign Up to Little Lemon
          </h1>
          <p className="text-xs md:text-sm text-center">
            Get special deals and track your orders!
          </p>
        </section>
        <SignUpForm />
      </section>
    </section>
  );
};

export default SignUpPage;
