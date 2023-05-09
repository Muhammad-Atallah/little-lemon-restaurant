import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState();

  const navigation = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    console.log("submitted");
    navigation("/");
  };
  return (
    <form onSubmit={handleForm} className="flex flex-col gap-6">
      <article className="flex flex-col gap-1 justify-center items-center">
        <label
          className="font-semibold text-xs md:text-sm text-gray-500"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="border-2 p-1 text-xs w-56 rounded-md"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
      </article>
      <article className="flex flex-col gap-1  justify-center items-center">
        <label
          className="font-semibold text-xs md:text-sm text-gray-500"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="border-2 p-1 text-xs w-56 rounded-md"
          type="password"
          name="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}"
        />
      </article>
      <section className="flex justify-between gap-10">
        <article className="flex flex-row-reverse gap-1 justify-center items-center">
          <label className="font-semibold text-xs" htmlFor="remember">
            Remember for 30 days
          </label>
          <input
            onChange={(e) => setRemember(e.target.checked)}
            value={remember}
            type="checkbox"
            name="remember"
            id="remember"
          />
        </article>
        <NavLink className="font-bold text-xs text-[#41644a]">
          Forgot password?
        </NavLink>
      </section>
      <article className="flex flex-col gap-1  justify-center items-center">
        <input
          className="text-sm justify-center cursor-pointer border-2 py-2 px-3 rounded-[16px] mt-2 bg-[#F4CE14]"
          type="submit"
          value="Sign in"
        />
      </article>
      <article className="flex justify-center gap-2 items-center">
        <h1 className="font-semibold text-xs"> Don't have an account?</h1>
        <NavLink className="font-bold text-xs text-[#41644a]">Sign up</NavLink>
      </article>
    </form>
  );
};

export default LoginForm;
