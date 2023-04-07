import {Offer, Offers} from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import {randomId} from '../../utils';

type PlaceListProps = {
  offers: Offers;
}

function PlaceList (props: PlaceListProps) {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((currentOffer: Offer) => (
        <PlaceCard key={randomId()}
          offer={currentOffer}
        />
      ))}
    </div>
  );
}

export default PlaceList;
