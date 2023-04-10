import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {mockOffers} from './mock/offers';
import {city} from './mock/city';

const Setting = {
  ErrorsCount: 312,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      placesCount={Setting.ErrorsCount}
      offers={mockOffers}
      city={city}
    />
  </React.StrictMode>,
);
