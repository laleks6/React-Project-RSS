import React, { useContext } from 'react';
import LocaleContext from '../context/LocaleContext';

type TypePropsResult = {
  data: Record<string, string>;
  index: number;
};

function Card({ data, index }: TypePropsResult) {
  const { image, name } = data;
  const { setActiveCard } = useContext(LocaleContext);
  return (
    <div
      data-testid={`click-card_${index}`}
      className={`card card-${index + 1}`}
      onClick={() => setActiveCard(index)}
      onKeyDown={() => setActiveCard(index)}
      role="button"
      tabIndex={0}
    >
      <img className="card__img" src={image} alt={name} />
      <div className="card__info">
        <div className="card__tags">
          <p>{data.mealType}</p>
          <p>{data.difficulty}</p>
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Card;
