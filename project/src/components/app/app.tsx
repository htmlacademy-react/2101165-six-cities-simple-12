import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import EmptyScreen from '../../pages/empty-screen/empty-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import {store} from '../../store';
import {fetchHotelsAction, checkAuthAction} from '../../store/api-actions';
import {useEffect} from 'react';
import { getDataLoadingStatus } from '../../store/app-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function App(): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const isOffersDataLoading = useAppSelector(getDataLoadingStatus);

  useEffect(() => {
    store.dispatch(fetchHotelsAction());
    store.dispatch(checkAuthAction());
  }, []);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen />}
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
