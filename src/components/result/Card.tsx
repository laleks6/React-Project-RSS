import React, { useContext } from 'react';
import LocaleContext from '../context/LocaleContext';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCard } from '../../store/reduxSlice';
import iconStar from '../../assets/icon_star.png';
type TypePropsResult = {
  data: Record<string, string>;
  index: number;
};

function Card({ data, index }: TypePropsResult) {
  const { image, name } = data;
  const dispatch = useDispatch();
  const setActiveCardDispatch = (el: number) => dispatch(setActiveCard(el));
  const styleDifficulty = {
    Easy: {
      'background-color': 'blue',
    },
    Medium: {
      'background-color': 'yellow',
      color: 'black',
    },
  };

  return (
    <div
      data-testid={`click-card_${index}`}
      className={`card card-${index + 1}`}
      onClick={() => setActiveCardDispatch(index)}
      onKeyDown={() => setActiveCardDispatch(index)}
      role="button"
      tabIndex={0}
    >
      <div className="card__block-img">
        <div className="food-img">
          {' '}
          <img className="card__img" src={image} alt={name} />
        </div>

        <div className="card__tags">
          <div
            style={styleDifficulty[data.difficulty]}
            className="tags__difficulty"
          >
            {data.difficulty}
          </div>
          <div className="tags__rating">
            <img src={iconStar} alt="star reiting" className="icon-star" />
            {data.rating}
          </div>
        </div>
      </div>
      <div className="card__info">
        <span>{name}</span>
      </div>
    </div>
  );
}

export default Card;
