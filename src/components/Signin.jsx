"use client"

import { useState } from "react";

const Signin = () => {

  const [values , setValues] = useState({
    email : "",
    password : ""
  })

  const changeHandler = (e) => {
    setValues({...values , [e.target.name] : e.target.value})
  }

  return (
    <section className=" flex justify-center mt-10">
      <form className="w-96 flex flex-col justify-center items-start">
        <label htmlFor="email" className="mb-2 p-2 text-white">
          email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={changeHandler}
          className="text-white bg-white bg-opacity-35 backdrop-blur-sm mb-4 w-full outline-none p-2 rounded-md"
        />
        <label htmlFor="password" className="mb-2 p-2 text-white">
          password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={changeHandler}
          className="text-white bg-white bg-opacity-35 backdrop-blur-sm mb-4 w-full outline-none p-2 rounded-md"
        />
        <button
          type="submit"
          className="submit-btn bg-blue-400 w-full rounded-md mt-8 p-2 text-white"
        >
          sign in
        </button>
      </form>
    </section>
  );
};

export default Signin;
