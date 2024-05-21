import React from 'react';
import { useAppDispatch } from '../../hook';
import { setActiveCard } from '../../store/reduxSlice';
import iconStar from '../../assets/icon_star.png';
import { Recipe } from '../../types/types';

type TypePropsResult = {
  data: Recipe;
  index: number;
};

function Card({ data, index }: TypePropsResult) {
  const { image, name } = data;
  const dispatch = useAppDispatch();
  const setActiveCardDispatch = (el: number) => dispatch(setActiveCard(el));
  const styleDifficulty: Record<string, Record<string, string>> = {
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
          <img className="card__img" src={`${image}`} alt={`${name}`} />
        </div>

        <div className="card__tags">
          <div
            style={styleDifficulty[`${data.difficulty}`]}
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
