import {useAppDispatch, useAppSelector} from '../../hooks';
import {AuthorizationStatus, AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {logoutAction} from '../../store/api-actions';
import { MouseEvent } from 'react';
import { getAuthorizationStatus, getUserData } from '../../store/user-process/selectors';
import Logo from '../logo/logo';

function Header(): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const dispatch = useAppDispatch();

  const userData = useAppSelector(getUserData);

  const handleClickSignOut = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">

          <Logo />

          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                authorizationStatus === AuthorizationStatus.Auth &&
                  <>
                    <li className="header__nav-item user">
                      <div className="header__nav-profile">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                          <img
                            className="user__avatar"
                            src={userData?.avatarUrl}
                            width="54"
                            height="54"
                            alt="User avatar"
                          />
                        </div>
                        <span className="header__user-name user__name">{userData && userData.email}</span>
                      </div>
                    </li>
                    <li className="header__nav-item">
                      <Link
                        className="header__nav-link"
                        onClick={handleClickSignOut}
                        to="/"
                      >
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </>
              }

              {
                authorizationStatus === AuthorizationStatus.NoAuth &&
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile"
                      to={AppRoute.Login}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
              }

            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
