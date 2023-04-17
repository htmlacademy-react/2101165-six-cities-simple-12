import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {APIRoute} from '../const';
import {Offer} from '../types/offer';
import {loadOffers, setOffersDataLoadingStatus} from './action';

export const fetchHotelAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchHotel',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Hotels);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);


// export const checkAuthAction = createAsyncThunk<UserData, undefined, {
//     dispatch: AppDispatch;
//     state: State;
//     extra: AxiosInstance;
//   }>(
//     'user/checkAuth',
//     async (_arg, {dispatch, extra: api}) => {
//       const {data} = await api.get<UserData>(APIRoute.Login);
//       return data;
//     },
//   );

//   export const loginAction = createAsyncThunk<UserData, AuthData, {
//     dispatch: AppDispatch;
//     state: State;
//     extra: AxiosInstance;
//   }>(
//     'user/login',
//     async ({login: email, password}, {dispatch, extra: api}) => {
//       const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
//       saveToken(data.token);
//       dispatch(redirectToRoute(AppRoute.Root));
//       return data;
//     },
//   );

//   export const logoutAction = createAsyncThunk<void, undefined, {
//     dispatch: AppDispatch;
//     state: State;
//     extra: AxiosInstance;
//   }>(
//     'user/logout',
//     async (_arg, {dispatch, extra: api}) => {
//       await api.delete(APIRoute.Logout);
//       dropToken();
//     },
//   );
