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

  /* 
    When we use both our intersection aswell as the return type, we will get the matchable type

    so it's essentially an extension on this action creator, it's going to reach into this function like the
    fetchCategoriesStart, get the return type Acton and it's going to get on this action the type value, being equal as
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START and it's going to use that and compare it with any action we compare
    against, so we are going to do it like so
 */

  type Matchable<AC extends () => AnyAction> = AC & {
    type: ReturnType<AC>['type']
    match(action: AnyAction): action is ReturnType<AC>
  }
/* w  Essentially what this type is doing is that, for example

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