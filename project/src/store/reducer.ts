import {createReducer} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {loadOffers, changeCity, loadOffersByCity} from './action';
import {CITIES} from '../const';
import {mockOffers} from '../mock/offers';

type initialStateType = {
  city: string;
  offers: Offer[];
  offersByCity: Offer[];
}

const initialState: initialStateType = {
  city: CITIES[0],
  offers: [],
  offersByCity: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.offersByCity = state.offers.filter((offer)=> offer.city === state.city);
    })
    .addCase(loadOffersByCity, (state) => {
      state.offersByCity = state.offers.filter((offer) => offer.city === state.city);
    });
});

export {reducer};
