import {LOCATIONS} from '../../const';

import CityItem from '../cities-item/cities-item';


function CitieslList (): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {LOCATIONS.map((city) => (
        <CityItem key={city.name} city={city} />
      ))}
    </ul>
  );
}

export default CitieslList;
