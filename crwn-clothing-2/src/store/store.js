import { compose, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

// Root reducer, is more like a big reducer in case our code is made by various minor reducers

import { rootReducer } from './root-reducer'




/*All the reducers are pure functions, they receive a state and an action, and it returns us some object that represents
the values in the state

This store is just an facility the movement and passing of actions through these reducers, so all a store realy needs is
just the reducer in order to be created, but in order for this be useful, we also want to pass it a logger, which is ess
entially something that allows us to see what the state looks like before an action is dispatched, what the action is
and how the state in turn, looks after the action

In order to do that, we need to create a middleware, which will run before an action hits the reducer.
*/

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);


/* but also what we can do here is that we can say that these middlewares are actually something like enhancers. So in
order for this to work we have to generate it using something named compose

But there are different types of enhancers that we can have, middlwares are just the primary ones.


*/

const composedEnhancers = compose(applyMiddleware(...middleWares));



// The first parameter is the root reducer, the second is the additional states we want to include and the 3rd is the logge r
export const store = createStore(rootReducer, undefined, composedEnhancers)

