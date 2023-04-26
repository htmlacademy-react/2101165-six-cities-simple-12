import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {APIRoute} from '../const';
import {Offer} from '../types/offer';
import {dropToken, saveToken} from '../services/token';
import {UserData} from '../types/user-data';
import {AuthData} from '../types/auth-data';

export const fetchHotelsAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchHotel',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Hotels);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<UserData | null, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/login',
  async({login: email, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email,password});
    if (data) {
      saveToken(data.token);
      return data;
    } else {
      return null;
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/logout',
  async(_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);
