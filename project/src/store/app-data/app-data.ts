import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../../const';
import { AppData } from '../../types/state';
import { fetchHotelsAction } from '../api-actions';

const initialState: AppData = {
  offers: [],
  currentOffer: null,
  isOffersDataLoading: false,
};
export const appData = createSlice({
  name: Namespace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHotelsAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchHotelsAction.fulfilled, (state, action) => {
        state.isOffersDataLoading = false;
        state.offers = action.payload;
      });
  }
});
