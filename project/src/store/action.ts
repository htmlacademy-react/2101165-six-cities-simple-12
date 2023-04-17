import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
// import {AuthorizationStatus} from '../const';

export const changeCity = createAction<string>('data/changeCity');
export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const loadOffersByCity = createAction('data/loadOffersByCity');
// export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
