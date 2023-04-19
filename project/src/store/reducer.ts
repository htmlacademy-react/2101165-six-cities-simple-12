import {createReducer} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {loadOffers, changeCity, loadOffersByCity, setOffersDataLoadingStatus} from './action';
import {CITIES} from '../const';
import { fetchHotelsAction } from './api-actions';

type initialStateType = {
  city: string;
  offers: Offer[];
  offersByCity: Offer[];
  isOffersDataLoading: boolean;
}

const initialState: initialStateType = {
  city: CITIES[0],
  offers: [],
  offersByCity: [],
  isOffersDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.offersByCity = state.offers.filter((offer)=> offer.city.name === state.city);
    })
    .addCase(fetchHotelsAction.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.offersByCity = state.offers.filter((offer)=> offer.city.name === state.city);
    })
    .addCase(loadOffersByCity, (state) => {
      state.offersByCity = state.offers.filter((offer) => offer.city.name === state.city);
    });
});

export {reducer};
