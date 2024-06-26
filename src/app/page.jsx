"use client";
import Signin from "@/components/Signin";
import Info from "@/components/Info";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RandomName from "@/components/RandomName";

const Home = () => {
  return (
    <Provider store={store}>
      <main className="px-3 h-screen pb-5">
        <Signin />
        <Info />
        <RandomName />
      </main>
      <ToastContainer />
    </Provider>
  );
};

export default Home;
