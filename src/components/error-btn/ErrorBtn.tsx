import * as React from 'react';

type State = {
  status: boolean;
};

class ErrorBtn extends React.Component<unknown, State> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      status: true,
    };
  }

  eventErrorBtn = () => {
    this.setState({ status: false });
  };

  render() {
    const { status } = this.state;
    if (!status) {
      throw new Error('I crashed!');
    }
    return (
      <button type="button" className="button" onClick={this.eventErrorBtn}>
        click on me
      </button>
    );
  }
}

export default ErrorBtn;
