import { configureStore } from "@reduxjs/toolkit";

// import { compose, createStore, applyMiddleware } from 'redux'
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
// import createSagaMiddleware from 'redux-saga'
// import { rootSaga } from './root-saga';

// // Root reducer, is more like a big reducer in case our code is made by various minor reducers

import { rootReducer } from './root-reducer'




const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean)


// const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});


// sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store)