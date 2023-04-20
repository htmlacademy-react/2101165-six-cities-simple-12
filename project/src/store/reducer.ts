import {createReducer} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {changeCity, loadOffersByCity, setOffersDataLoadingStatus, setAuthorizationStatus} from './action';
import {CITIES, AuthorizationStatus} from '../const';
import {fetchHotelsAction, loginAction} from './api-actions';
import { UserData } from '../types/user-data';

type initialStateType = {
  city: string;
  offers: Offer[];
  offersByCity: Offer[];
  isOffersDataLoading: boolean;
  authorizationStatus: string;
  userInfo: UserData;
}

const initialState: initialStateType = {
  city: CITIES[0],
  offers: [],
  offersByCity: [],
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: {
    avatarUrl: '',
    email: '',
    id: 0,
    isPro: false,
    name: '',
    token: ''
  }
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
    .addCase(loginAction.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
