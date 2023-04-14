import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {mockOffers} from './mock/offers';
import {mockCity} from './mock/city';
import {Provider} from 'react-redux';
import {store} from './store';

const Setting = {
  ErrorsCount: 312,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        placesCount={Setting.ErrorsCount}
        offers={mockOffers}
        city={mockCity[0]}
      />
    </Provider>
  </React.StrictMode>,
);
