import { type } from "os";
import { AnyAction } from "redux-saga";



type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>['type']
  match(action: AnyAction): action is ReturnType<AC>
}

export function withMatcher<AC extends () => AnyAction & { type: string }>(actionCreator: AC): Matchable<AC>;

export function withMatcher<AC extends (...args: any[]) => AnyAction & { type: string }>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type
    }
  })
}

/* 


Essentially what this type is doing is that, for example

We have
type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;
 
we would say
withMatcher(fetchCategoriesSart)

because the fetchCategoriesStart is an action creator of a type that extends AnyAction and the return type
is also the type of the action creator


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