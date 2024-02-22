import * as React from 'react';
import ActiveCard from '../active-card/ActiveCard';
import Loading from '../loading/Loading';
import Card from './Card';

type TypePropsResult = {
  resultPromis: Record<string, string>[] | null;
  activeCard: number;
  loading: boolean;
  handleActiveCard: (activeCard: number) => void;
};

function Result({
  handleActiveCard,
  resultPromis,
  activeCard,
  loading,
}: TypePropsResult) {
  return (
    <div>
      {resultPromis && (
        <div className="results">
          <div className="results__block-cards">
            {!loading ? (
              <Loading />
            ) : (
              resultPromis.length > 0 &&
              resultPromis.map((el, i) => {
                return (
                  <Card
                    key={`${el}`}
                    data={el}
                    index={i}
                    handleActiveCard={handleActiveCard}
                  />
                );
              })
            )}
          </div>

          {activeCard >= 0 && (
            <ActiveCard
              resultPromis={resultPromis[activeCard]}
              index={activeCard}
              handleActiveCard={handleActiveCard}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Result;
