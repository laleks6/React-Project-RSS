import * as React from 'react';
import { useAppSelector } from '../../hook';
import ActiveCard from '../active-card/ActiveCard';
import Loading from '../loading/Loading';
import Card from './Card';

function Result() {
  const { data, loading, activeCard } = useAppSelector(
    (state) => state.project
  );

  return (
    <div>
      {data ? (
        <div className="results">
          <div className="results__block-cards">
            {loading ? (
              <Loading />
            ) : (
              data.recipes &&
              data.recipes.map((el, i) => {
                return <Card key={`${el}`} data={el} index={i} />;
              })
            )}
          </div>

          {activeCard >= 0 && (
            <ActiveCard
              resultPromis={data.recipes[activeCard]}
              index={activeCard}
            />
          )}
        </div>
      ) : (
        <div>Not found</div>
      )}
    </div>
  );
}

export default Result;
