import {LOCATIONS} from '../../const';
import { memo } from 'react';

import CitiesItem from '../cities-item/cities-item';

function CitieslList (): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {LOCATIONS.map((city) => (
        <CitiesItem key={city.name} city={city} />
      ))}
    </ul>
  );
}

export default memo(CitieslList);
