import * as React from 'react';
import gif404 from '../../assets/404.gif';

interface Props {
  children?: React.ReactNode;
}

interface State {
  hasError: boolean | string;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return { hasError: error };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className="block-error">
          <img src={gif404} width="60%" alt="gif" />
          <p>{hasError.message}</p>
          <button
            type="button"
            className="error-btn"
            onClick={() => this.setState({ hasError: false })}
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
