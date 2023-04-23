import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';

export const changeCity = createAction<string>('data/changeCity');

export const loadOffersByCity = createAction('data/loadOffersByCity');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const setAuthorizationStatus = createAction<string>('user/setAuthorizationStatus');

export const authRequired = createAction<AuthorizationStatus>('authRequired');
export const updateUser = createAction<UserData | null>('updateUser');
