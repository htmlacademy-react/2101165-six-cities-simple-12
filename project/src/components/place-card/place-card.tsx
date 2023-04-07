import {Offer} from '../../types/offer';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type PlaceCardProps = {
  offer: Offer;
}

function PlaceCard (props: PlaceCardProps) {

  const {offer} = props;
  const {offerId, isPremium, title, offerType, offerImages, pricePerNight, rating} = offer;

  const [activeCard, setActiveCard] = useState<number | undefined>(undefined); // eslint-disable-line

  return (
    <article className="cities__card place-card"
      onMouseOver={() => {setActiveCard(offerId);}}
      onMouseOut={() => {setActiveCard(undefined);}}
    >
      {
        isPremium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Property}/${offerId}`}>
          <img className="place-card__image" src={offerImages[1].src} width="260" height="200" alt={offerImages[1].alt} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{`${pricePerNight} `}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Property}/${offerId}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{offerType}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
