import * as React from 'react';

type TypePropsResult = {
  data: Record<string, string>;
  index: number;
  handleActiveCard: (activeCard: number) => void;
};

function Card({ handleActiveCard, data, index }: TypePropsResult) {
  const { image, name } = data;
  return (
    <div
      className={`card card-${index + 1}`}
      onClick={() => handleActiveCard(index)}
      onKeyDown={() => handleActiveCard(index)}
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
