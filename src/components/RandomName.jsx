"use client";
import { useSelector, useDispatch } from "react-redux";
import { getRandomNameAsync } from "@/redux/features/random-name/randomNameSlice";

const RandomName = () => {
  const dispatch = useDispatch();
  const names = useSelector((state) => state.randomName);

  const clickHandler = () => {
    console.log("hello");
    dispatch(getRandomNameAsync());
  };

  const renderList = () => {
    return (
      <>
        <h1
          className={`${
            names.names.length >= 1 ? "block" : "hidden"
          } text-white text-2xl text-center`}
        >
          Name List:
        </h1>
        <ul
          className={`${
            names.names.length >= 1 ? "block" : "hidden"
          } text-white list-decimal mb-10 mt-5 p-3 w-96 bg-white bg-opacity-35 backdrop-blur-sm rounded-md border-l-4 border-blue-300 list-inside`}
        >
          {names.names.map((name, index) => {
            return <li key={index}>{name}</li>;
          })}
        </ul>
      </>
    );
  };

  return (
    <section className="flex justify-center mt-10">
      <div className="w-96 flex flex-col justify-center items-center">
        <button
          onClick={clickHandler}
          className="bg-blue-500 px-4 py-2 rounded-md text-white"
        >
          Generate Random Name !
        </button>
        <div className="mt-5">{renderList()}</div>
      </div>
    </section>
  );
};

export default RandomName;
