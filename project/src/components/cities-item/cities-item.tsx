import { changeCity } from '../../store/app-process/app-process';
import { getCity } from '../../store/app-process/selectors';
import { City } from '../../types/offer';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {NavLink} from 'react-router-dom';

type CityItemProps = {
  city: City;
}

function CityItem ({city}: CityItemProps): JSX.Element {

  const selectedCity = useAppSelector(getCity);
  const dispatch = useAppDispatch();

  const handleCityChange = () => {
    dispatch(changeCity({city}));
  };

  return (
    <li className="locations__item">
      <NavLink className={`locations__item-link tabs__item ${city.name === selectedCity.name ? 'tabs__item--active' : ''}`}
        to={'/'}
        onClick={handleCityChange}
      >
        <span>{city.name}</span>
      </NavLink>
    </li>
  );
}

export default CityItem;
