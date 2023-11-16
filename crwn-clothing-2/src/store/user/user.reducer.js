
import { USER_ACTION_TYPES } from "./user.types";

/* Context is still context, because are what values that we expose, the only difference now is how we are storing the
current user, because we are not utilizing useState to store that value anymore, we are using reducers */

/* We know that we have some action is setCurrentUser */


export const INITIAL_STATE = {
  currentUser: null,
};

/** 
 * In the user context, we had a useReducer call, which would return us a dispatch, and that dispatch when called would
 * only fire actions to the associated userReducer that we got it from it, and that dispatch function we got back, will
 * only fire functions to the respective reducer, this is were it is different, because every single reducer receives
 * every single action inside redux
 */
export const userReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      return state
  }
};