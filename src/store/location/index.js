/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocationStore: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLocationStore } = locationSlice.actions;

export default locationSlice.reducer;
