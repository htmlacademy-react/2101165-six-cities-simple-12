import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import EmptyScreen from '../../pages/empty-screen/empty-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import {Offers} from '../../types/offer';

type AppScreenProps = {
  placesCount: number;
  offers: Offers;
}

function App({placesCount, offers}: AppScreenProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen placesCount={placesCount} offers={offers} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={`${AppRoute.Property}/:id`}
          element={<PropertyScreen />}
        />
        <Route
          path={AppRoute.Empty}
          element={<EmptyScreen />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
