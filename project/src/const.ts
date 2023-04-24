export enum AppRoute {
  Login = '/login',
  Property = '/property',
  Empty = '/empty',
  Main = '/',
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const ARRAY_FOR_ADD_COMMENT_TEMPLATE = [
  {
    mark: '5',
    textMark: 'perfect'
  },
  {
    mark: '4',
    textMark: 'good'
  },
  {
    mark: '3',
    textMark: 'not bad'
  },
  {
    mark: '2',
    textMark: 'badly'
  },
  {
    mark: '1',
    textMark: 'terribly'
  }
];

export const CITIES: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum APIRoute {
  Hotels = '/hotels',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export const LOCATIONS = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  }
];

export const MAX_OFFER_IMAGES_QUANTITY = 6;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Namespace {
  User = 'USER',
  Data = 'DATA',
  App = 'APP'
}

