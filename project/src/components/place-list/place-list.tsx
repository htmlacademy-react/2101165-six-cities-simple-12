import {Offer} from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlaceListProps = {
  offers: Offer[];
}

function PlaceList ({offers}: PlaceListProps) {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((currentOffer: Offer) => (
        <PlaceCard key={currentOffer.id}
          offer={currentOffer}
        />
      ))}
    </div>
  );
}

export default PlaceList;
