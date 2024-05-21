import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.tsx';
import ErrorBoundary from './components/Error-B/ErrorBoundary.jsx';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter
        basename={
          process.env.NODE_ENV === 'production' ? '/Recipes-SPA-RSS/' : '/'
        }
      >
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
