export type HostInfo = {
  avatarUrl: string;
  name: string;
  isPro: boolean;
  id: string;
}

export type Offer = {
  city: City;
  previewImage: string;
  images: string[];
  title: string;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: HostInfo;
  description: string;
  location: Location;
  id: number;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: string;
  location: Location;
};
