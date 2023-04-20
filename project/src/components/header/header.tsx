import {useAppDispatch, useAppSelector} from '../../hooks';
import {AuthorizationStatus, AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {logoutAction} from '../../store/api-actions';

function Header(): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();
  // const userData = useAppSelector((state) => state.userInfo);


  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {
          authStatus === AuthorizationStatus.Auth &&
          <>
            <li className="header__nav-item user">
              <div className="header__nav-profile">
                <div className="header__avatar-wrapper user__avatar-wrapper">
                  {/* <img
                      className="user__avatar"
                      src={userData.avatarUrl}
                      width="54"
                      height="54"
                      alt="User avatar"
                    /> */}
                </div>
                <span className="header__user-name user__name">11{/*userData.email*/}</span>
              </div>
            </li>
            <li className="header__nav-item">
              <Link
                className="header__nav-link"
                to="/"
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(logoutAction());
                }}
              >
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </>
        }

        {
          authStatus === AuthorizationStatus.NoAuth &&
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
  );
}

export default Header;
