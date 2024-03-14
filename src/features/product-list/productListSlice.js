import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProd } from './productListAPI';

const initialState = {
  products: [],
  status: 'idle',
};

export const fetchAllProdAsync = createAsyncThunk(
  'product/fetchAllProd',
  async () => {
    const response = await fetchAllProd();
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products += action.payload;
      });
  },
});

export const { increment} = productSlice.actions;

export const selectAllprod = (state) => state.product.products;

export default productSlice.reducer;
