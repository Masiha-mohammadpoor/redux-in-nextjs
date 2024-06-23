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
    },
    changeAdmin : (state , action) => {
      return {...state , isAdmin : !state.isAdmin}
    }
  }
})

export const {signin , signout , changeAdmin} = authSlice.actions;
export default authSlice.reducer;