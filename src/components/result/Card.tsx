import React, { useContext } from 'react';
import LocaleContext from '../context/LocaleContext';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCard } from '../../store/reduxSlice';
type TypePropsResult = {
  data: Record<string, string>;
  index: number;
};

function Card({ data, index }: TypePropsResult) {
  const { image, name } = data;
  const dispatch = useDispatch();
  const setActiveCardDispatch = (el: number) => dispatch(setActiveCard(el));
  return (
    <div
      data-testid={`click-card_${index}`}
      className={`card card-${index + 1}`}
      onClick={() => setActiveCardDispatch(index)}
      onKeyDown={() => setActiveCardDispatch(index)}
      role="button"
      tabIndex={0}
    >
      <img className="card__img" src={image} alt={name} />
      <div className="card__info">
        <div className="card__tags">
          <p>{data.name}</p>
          <p>{data.difficulty}</p>
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Card;
