# Reducer Saga

It is one of the most complex library in the redux ecosystem, and the reason for it is due to the power that it brings to our system
The main advantage of the redux saga is that it allows us to perform very complex coordination of asynchronous side effects inside of redux.

In our typical redux flow, we have our middlwares sitting in front of our reducers, redux saga is indeed a middleware but it flows differently as we tipically expect a middleware to flow and they receive actions.
With most middlwares actions hit middleware before they hit the reducer, but saga is different, the actions will hit
the reducers first before moving onto the saga, and it flows after the reducer has  been updated
So if we think of an action flow, it starts on the component and it moves up and goes through every middleware except for the saga, then it moves through the corresponding reducers, update their values and THEN, finally, it will hit the sagas, the sagas will respond to these actions and perform certain business logics, certain asynchronous requests, whatever it is, it is just in the realm of writing js code based on an action, maybe sending news actions are generated, maybe the saga does something and get it gets a value, and then it's like "Oh, i need to fire off an action so that i can subsequently update the reducers, so that's what the sagas will do, they might fire a new action, which will pass to the middlewares and then it will continue on the flow, it includes go to the saga again, an action fired by saga can trigger other sagas.







