import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email : "",
  password : "",
  isAdmin : false
}

const authSlice = createSlice({
  name : "auth",
  initialState,
  reducers : {
    signin : (state , action) => {
      return {...state , email : action.payload.email , password : action.payload.password}
    },
    signout : () => {
      return initialState
    }
  }
})

export const {signin , signout} = authSlice.actions;
export default authSlice.reducer;