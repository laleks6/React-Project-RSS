import * as React from 'react';
import gif404 from '../../assets/404.gif';

interface Props {
  children?: React.ReactNode;
}

interface State {
  hasError: null | Record<string, string>;
}

class ErrorBoundary extends React.Component<Props, State> {
  // eslint-disable-next-line react/state-in-constructor
  public state: State = {
    hasError: null,
  };

  static getDerivedStateFromError(error: unknown) {
    return { hasError: error };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className="block-error">
          <img src={gif404} width="60%" alt="gif" />
          {hasError && <p>{hasError.message}</p>}
          <button
            type="button"
            className="error-btn"
            onClick={() => this.setState({ hasError: null })}
          >
            Try again?
          </button>
        </div>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
