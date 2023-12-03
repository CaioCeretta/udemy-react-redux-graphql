import { configureStore } from '@reduxjs/toolkit'

// import { compose, createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

// const composeEnhancer =
//   (process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['user'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: rootReducer,
  /* If we pass a middleware, we will override the three middlewares that come together with redux toolkit, so, in this
  case, the default middleware that warns us about a non serialized value being passed, in the case of setCurrentUser
  the userImpl, which is not a string or number, it wont return that warn if we override it
  middleware: middleWares*/

  /*If we want to include our middlwares, but also the ones included by the tk, we need to do it like this*/
  // middleware: getDefaultMiddlware => getDefaultMiddlware({
  //   serializableCheck: false,
  // }),
  /* This is one way we can turn this off. Or */
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false
  //   }).concat(middleWares)
  /* This function will get the defaultMiddlware and concat with our own middlewares array, but if we want to include
  the default middleware but we want to make sure that we fix this serializable issue, which will happen in the app

  The other two middlewares, as we saw examples, one of them is about checking if we are writing good redux code, for
  example, it was warning that we were not sending serialized values, we were sending objects, and the third one, as we
  saw, it won't let us assign values to read only properties, which are values that are not designed to be mutaded, in
  redux everything needs to be a new copy, that's how reducers are designed, it makes sense that the values inside them
  are also not meant to be mutated.
  So basically that middleware is preventing us to running any mutations inside of our redux
  
  */
 middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleWares)

})

// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

// export const persistor = persistStore(store);
