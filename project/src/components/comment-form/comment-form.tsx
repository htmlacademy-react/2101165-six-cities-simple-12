import {useState, ChangeEvent, FormEvent} from 'react';
import {ARRAY_FOR_ADD_COMMENT_TEMPLATE} from '../../const';

function CommentForm () : JSX.Element {

  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (evt : FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setRating('');
    setReview('');
  };

  const handleRatingChange = (evt : ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };

  const handleReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(evt.target.value);
  };

  return (
    <form className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {
          ARRAY_FOR_ADD_COMMENT_TEMPLATE.map((arrayElement) => (
            <>
              <input className="form__rating-input visually-hidden"
                name="rating"
                value={arrayElement.mark}
                id={`${arrayElement.mark}-stars`}
                type="radio"
                onChange={handleRatingChange}
                checked={rating === arrayElement.mark}
              />
              <label htmlFor={`${arrayElement.mark}-stars`} className="reviews__rating-label form__rating-label" title={arrayElement.textMark}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </>
          ))
        }

      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleReviewChange}
        value={review}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button"
          type="submit"
          disabled={!(rating && review)}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
