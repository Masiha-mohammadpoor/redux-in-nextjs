"use client"

import { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "@/redux/features/auth/authSlice";
import { toast } from "react-toastify";

const Signin = () => {

  const [values , setValues] = useState({
    email : "",
    password : ""
  })
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setValues({...values , [e.target.name] : e.target.value})
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if(!values.email || !values.password) {
      toast.error("enter email & password ! 😡")
    }else {
      dispatch(signin(values));
      setValues({
        email : "",
        password : ""
      });
      toast.success("You are logged in 😉")
    }

  }
  return (
    <section className=" flex justify-center mt-10">
      <form className="w-96 flex flex-col justify-center items-start">
        <label htmlFor="email" className="mb-2 p-2 text-white">
          email
        </label>
        <input
        autoComplete="off"
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={changeHandler}
          className="text-white bg-white bg-opacity-35 backdrop-blur-sm mb-4 w-full outline-none p-2 rounded-md"
        />
        <label htmlFor="password" className="mb-2 p-2 text-white">
          password
        </label>
        <input
        autoComplete="off"
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={changeHandler}
          className="text-white bg-white bg-opacity-35 backdrop-blur-sm mb-4 w-full outline-none p-2 rounded-md"
        />
        <button
        onClick={submitHandler}

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
