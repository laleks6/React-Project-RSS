import * as React from 'react';
import gif404 from '../../assets/404.gif'
class ErrorBoundary extends React.Component {
    state = {
        error: null,
    };
    static getDerivedStateFromError(error) {
        return { error };
    }
    render() {
        const { error } = this.state;
        error && (console.log('ERROROR'))
        if (error) {
            return (
                <div className="block-error">
                    <img src={gif404} width="60%"/>
                    <p>{error.message}</p>
                    <button className="error-btn" onClick={() => this.setState({ error: null })}> 
                    Try again?
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;