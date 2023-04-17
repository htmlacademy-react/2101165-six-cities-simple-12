import {Offer} from '../../types/offer';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type PlaceCardProps = {
  offer: Offer;
}

function PlaceCard ({offer}: PlaceCardProps) {

  const {id, isPremium, title, type, price, rating, previewImage} = offer;

  const [activeCard, setActiveCard] = useState<number | null>(null); // eslint-disable-line

  return (
    <article className="cities__card place-card"
      onMouseOver={() => setActiveCard(id)}
      onMouseOut={() => setActiveCard(null)}
    >
      {
        isPremium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Property}/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={title} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{`${price} `}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Property}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
