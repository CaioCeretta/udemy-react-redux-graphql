import { CATEGORIES_ACTION_TYPES, Category } from './category.types';
import { CategoryAction } from './category.action';

export type CategoriesState = {
  readonly categories: Category[]
  readonly isLoading: boolean;
  readonly Error: Error | null;
}

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as CategoryAction 
  /* This is a discriminating union type, that means that is a union type of all of the different action types that can
  come in as the action argument that this reducer will respond to. The problem with doing this pattern is that even
  though we as developers understand that this reducer will only respond to these action types, redux doesn't only pass
  this types to the reducer, redux, as we know, passes every single action type to the reducer, whenever an action
  dispatches, they go to every single reducer, so, if we only want to respond to those specific actions, in reality,
  it will all compiles down to javascript in the end.
  Redux is still going to dispatch all the actions, and there is no type guard preventing any of the actions that don't
  match this discriminating union from coming in.
  But there is a path we can go in, here we know that there is this value that we get from typing out this action, now we
  know that based on what code we are implementing inside, the payload MUST be category, because at by the time that our 
  code can pass that case statement, of, per example, fetchcategoriessuccess, the action must be the same, and we get
  that benefit through using our ts types, and in order to retain that, we lose some of the reality of our code, for example:

  If we commented out that default return state, at first it won't throw an error,
  
  and the reason for it, is that this reducer is infering that this reducer will only receive these three action types
  and inside of our cases, we have created a case for all three of those action types, and they are all returning a
  state object and they are still returning a caegories state type out of this reducer, that makes typescript, think that
  we already covered all possible cases that this reducer can receive, but in our console we can see that typescript
  is complaining saying that the sliceReducer for categories returned undefined during initialization, 

  So, to alter this union type and type what that reducer will receive is on creating a matchable, which will be done in
  the reducer.utils

  The reason why we are attaching functions to it, is because this reducer is assuming that all the actions coming through
  are gonna be one of these three types, but in reality, its actually not that case, because what happens is
  
  Redux initializes, redux passes all of these actions, and the  
  */ 
) => { 

  switch (action.type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true}      
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload, isLoading: false }
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, isLoading: false, error: action.payload} 
    default:
      return state;
  }
};
