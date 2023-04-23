import {createReducer} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {changeCity, loadOffersByCity, setOffersDataLoadingStatus, authRequired, updateUser} from './action';
import {CITIES, AuthorizationStatus} from '../const';
import {fetchHotelsAction} from './api-actions';
import { UserData } from '../types/user-data';

type initialStateType = {
  city: string;
  offers: Offer[];
  offersByCity: Offer[];
  isOffersDataLoading: boolean;
  authorizationStatus: string;
  userInfo: UserData | null;
}

const initialState: initialStateType = {
  city: CITIES[0],
  offers: [],
  offersByCity: [],
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(fetchHotelsAction.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.offersByCity = state.offers.filter((offer)=> offer.city.name === state.city);
    })
    .addCase(loadOffersByCity, (state) => {
      state.offersByCity = state.offers.filter((offer) => offer.city.name === state.city);
    })
    .addCase(authRequired, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(updateUser, (state, action) => {
      state.userInfo = action.payload;
    });
});

export {reducer};
