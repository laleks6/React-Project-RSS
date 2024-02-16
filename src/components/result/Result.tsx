import * as React from 'react';
import Card from './Card';

type Myprops = {
  resultPromis: Record<string, string>[];
};

// eslint-disable-next-line react/prefer-stateless-function
class Result extends React.Component<Myprops, unknown> {
  render() {
    const { resultPromis } = this.props;
    return (
      <div className="results">
        <div className="results__block-cards">
          {resultPromis.length > 0 &&
            resultPromis.map((el, i) => {
              return <Card key={`${el}`} data={el} index={i} />;
            })}
        </div>
      </div>
    );
  }
}

export default Result;
