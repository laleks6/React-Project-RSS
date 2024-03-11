import * as React from 'react';
import ActiveCard from '../active-card/ActiveCard';
import Loading from '../loading/Loading';
import Card from './Card';
import LocaleContext from '../context/LocaleContext';

type TypePropsResult = {
  activeCard: number;
  loading: boolean;
};

function Result({ activeCard, loading }: TypePropsResult) {
  const { data } = React.useContext(LocaleContext);
  return (
    <div>
      {data ? (
        <div className="results">
          <div className="results__block-cards">
            {!loading ? (
              <Loading />
            ) : (
              data.length > 0 &&
              data.map((el, i) => {
                return <Card key={`${el}`} data={el} index={i} />;
              })
            )}
          </div>

          {activeCard >= 0 && (
            <ActiveCard resultPromis={data[activeCard]} index={activeCard} />
          )}
        </div>
      ) : (
        <div>Not found</div>
      )}
    </div>
  );
}

export default Result;
