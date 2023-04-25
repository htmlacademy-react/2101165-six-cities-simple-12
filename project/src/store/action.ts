import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction<string>('data/changeCity');

export const loadOffersByCity = createAction('data/loadOffersByCity');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
