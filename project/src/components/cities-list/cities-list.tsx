import {CITIES} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {NavLink} from 'react-router-dom';
import {changeCity, loadOffersByCity} from '../../store/action';
import {MouseEvent} from 'react';

function CitieslList (): JSX.Element {

  const selectedCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  const handleCityChange = (evt: MouseEvent) => {
    evt.preventDefault();
    const target = evt.target as HTMLLIElement;
    if (target.tagName === 'SPAN') {
      dispatch(changeCity(target.innerHTML));
      dispatch(loadOffersByCity());
    }
  };

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <li key={city}
          className="locations__item"
        >
          <NavLink className={`locations__item-link tabs__item ${city === selectedCity ? 'tabs__item--active' : ''}`}
            to={'/'}
            onClick={handleCityChange}
          >
            <span>{city}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default CitieslList;
