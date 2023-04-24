import {store} from '../store/index';
import {AuthorizationStatus} from '../const';
import { UserData } from './user-data';
import { City, Offer } from './offer';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userInfo: UserData | null;
};

export type AppProcess = {
    city: City;
}

export type AppData = {
    offers: Offer[];
    currentOffer: Offer | null;
    isOffersDataLoading: boolean;
  };

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
