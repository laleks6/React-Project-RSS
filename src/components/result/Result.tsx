import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ActiveCard from '../active-card/ActiveCard';
import Loading from '../loading/Loading';
import Card from './Card';

function Result() {
  const { data, loading, activeCard } = useSelector((state) => state.project);

  const { recipes } = data;
  return (
    <div>
      {data ? (
        <div className="results">
          <div className="results__block-cards">
            {loading ? (
              <Loading />
            ) : (
              recipes.length > 0 &&
              recipes.map((el, i) => {
                return <Card key={`${i}`} data={el} index={i} />;
              })
            )}
          </div>

          {activeCard >= 0 && (
            <ActiveCard resultPromis={recipes[activeCard]} index={activeCard} />
          )}
        </div>
      ) : (
        <div>Not found</div>
      )}
    </div>
  );
}

export default Result;
