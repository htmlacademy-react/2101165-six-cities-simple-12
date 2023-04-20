import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {APIRoute, AuthorizationStatus} from '../const';
import {Offer} from '../types/offer';
import {setOffersDataLoadingStatus, setAuthorizationStatus} from './action';
import {dropToken} from '../services/token';
import {UserData} from '../types/user-data';
import {AuthData} from '../types/auth-data';

export const fetchHotelsAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchHotel',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Hotels);
    dispatch(setOffersDataLoadingStatus(false));
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData | null, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
      return data;
    } catch (error) {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
      dropToken();
      return null;
    }
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async (authData, { extra: api }) => {
    const {data} = await api.post<UserData>(
      APIRoute.Login,
      authData,
    );
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
