import { Namespace } from '../../const';
import { Offer } from '../../types/offer';
import { State } from '../../types/state';

export const getOffers = (state: State): Offer[] => state[Namespace.Data].offers;
export const getDataLoadingStatus = (state: State): boolean => state[Namespace.Data].isOffersDataLoading;
