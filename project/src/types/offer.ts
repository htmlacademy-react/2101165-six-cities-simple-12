import {Review} from '../types/review';

export type OfferImages = {
  src: string;
  alt: string;
}

export type HostInfo = {
  hostAvatar: string;
  hostName: string;
  isPro: boolean;
  descriptionOne: string;
  descriptionTwo: string;
}

export type Offer = {
  offerId: number;
  offerImages: OfferImages[];
  title: string;
  description: string;
  isPremium: boolean;
  offerType: string;
  rating: string;
  bedQuantity: string;
  maxPeopleQuantity: string;
  pricePerNight: string;
  itemsInside: string[];
  hostInfo: HostInfo;
  reviews: Review[];
};

export type Offers = Offer[];
