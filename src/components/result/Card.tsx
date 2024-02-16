import * as React from 'react';

type MyProps = {
  data: Record<string, string>;
  index: number;
};

// eslint-disable-next-line react/prefer-stateless-function
class Card extends React.Component<MyProps, unknown> {
  render() {
    const { data, index } = this.props;
    return (
      <div className={`card card-${index + 1}`}>
        <div> {data.name}</div>
        <div> {data.birth_year}</div>
      </div>
    );
  }
}

export default Card;
