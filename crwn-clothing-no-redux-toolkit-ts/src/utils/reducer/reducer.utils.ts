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