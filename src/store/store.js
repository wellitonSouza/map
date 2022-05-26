import { configureStore } from '@reduxjs/toolkit';
import locationFIlteredSlice from './locationFIltered';
import locationSlice from './location';
import pagesSlice from './pages'

export default configureStore({
  reducer: {
    location: locationSlice,
    locationFiltered: locationFIlteredSlice,
    pages: pagesSlice,
  },
});
