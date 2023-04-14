import {CITIES} from '../../const';
import {randomId} from '../../utils';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {NavLink} from 'react-router-dom';
import {changeCity, loadOffersByCity} from '../../store/action';
import {MouseEvent} from 'react'; 

function CitieslList () : JSX.Element {

  const selectedCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();
  const setClasses = (city: string) => `locations__item-link tabs__item ${city === selectedCity ? 'tabs__item--active' : ''}`; 
  
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
        <li key={randomId()}
          className="locations__item"
          onClick={handleCityChange}
        >
          <NavLink className={setClasses(city)} 
            to={'/'}
          >
            <span>{city}</span>
          </NavLink>
      </li>
      ))}
    </ul>
  )
}

export default CitieslList;
