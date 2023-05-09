import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <section
      style={{ "font-family": "Karla" }}
      className="w-full flex justify-center justify-items-center items-center h-[80vh]"
    >
      <section className=" flex flex-col justify-items-center items-center gap-10 py-16 px-4 sm:px-24 border-2 rounded-md m-2 shadow-lg">
        <section className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-md md:text-xl font-semibold text-center">
            Welcome Back!
          </h1>
          <p className="text-xs md:text-sm text-center">
            Please enter your login details.
          </p>
        </section>
        <LoginForm />
      </section>
    </section>
  );
};

export default LoginPage;
