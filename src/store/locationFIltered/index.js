/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

const locationFIlteredSlice = createSlice({
  name: 'locationFiltered',
  initialState,
  reducers: {
    setLocationFilteredStore: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLocationFilteredStore } = locationFIlteredSlice.actions;

export default locationFIlteredSlice.reducer;
