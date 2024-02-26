import { type } from "os";
import { AnyAction } from "redux-saga";

/*The any action is essentially an interface that extends upon this action type
export interface AnyAction extends Action {
  [extraProps: string]: any
}

It extends the 
export type Action<T extends string = string> = {
  type: T
}
*/

/* 
  We know that the action creators below return that specific type, like, createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
  will return back this specific type, and we want to leverage this function to do a check, and the way we do that
  is attach a method on this action creator, and attach additional methods into it
 */


export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
}

export type Action<T> = {
  type: T
}

export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>

export function createAction<T extends string>(type: T, payload: void): Action<T>

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}

// export const createAction = (type, payload) => ({type, payload})