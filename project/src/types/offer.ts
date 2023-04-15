import {Review} from '../types/review';

export type OfferImage = {
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
  offerImages: OfferImage[];
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
  city: string;
  coordinates: number[];
};

export type CityLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: string;
  location: CityLocation;
};
