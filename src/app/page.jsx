"use client"
import Signin from "@/components/Signin";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const Home = () => {
  return (
    <Provider store={store}>
      <main>
        <Signin />
      </main>
    </Provider>
  );
};

export default Home;
