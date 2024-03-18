import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
// import { CategoriesProvider } from './contexts/categories.context';
import { Elements } from '@stripe/react-stripe-js';
import './index.scss';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { persistor, store } from './store/store';
import { stripePromise } from './utils/stripe/stripe.utils';




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor} >
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();