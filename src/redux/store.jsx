import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/features/auth/authSlice";
import randomNameReducer from "@/redux/features/random-name/randomNameSlice";


export const store = configureStore({
  reducer : {
    auth : authReducer,
    randomName : randomNameReducer
  }
})