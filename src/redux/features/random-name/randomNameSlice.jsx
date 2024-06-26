import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const getRandomNameAsync = createAsyncThunk(
  "random-name/getRandomNameAsync",
  async () => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${Math.floor(
          Math.random() * (10 - 1 + 1) + 1
        )}`
      );
      return data;
    } catch (err) {
      return err.message;
    }
  }
);

const initialState = {
  loading: false,
  names: [],
  error: null,
};

const getRandomNameSlice = createSlice({
  name: "random-name",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getRandomNameAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      return { ...state, names: [...state.names, action.payload.name] };
    }),
      builder.addCase(getRandomNameAsync.rejected, (state, action) => {
        return { ...state, error: action.payload };
      }),
      builder.addCase(getRandomNameAsync.pending, (state, action) => {
        return { ...state, loading: true };
      });
  },
});

export default getRandomNameSlice.reducer;

// [getRandomNameAsync.fulfilled] : (state , action) => {
//   return {...state , name : [...state.name , action.payload.name]}
// },
// [getRandomNameAsync.pending] : (state , action) => {
//   return {...state , loading : true , name : state.name}
// },
// [getRandomNameAsync.rejected] : (state , action) => {
//   return {...state , error : action.payload}
// }
