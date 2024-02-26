
import { createAction, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";

import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";

// export const setCate  gories = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray)


/* So, as said on the reducer utils, now to do that type checking on the functions themselves
we need to leverage something known as a type predicate, and a type predicate is basically a function that verifies whether
a specific argument that it receives is going to be a narrower type or not, so we can think on an example like this

Let's say we have two different types

type Alien = {
  fly: () => void
}

type Human = {
  speak: () => void
}


//What happens here is after it identifies whether the entity as a human or an alien, then the type that comes out of it
should be something that is narrow to the scope of human

That means that inside what our logic needs to do is that it needs to assume that this entity is a human

function isHuman (entity: Human | Alien): entity is Human {

  This means, that if this is true, what we are getting back, should be, in theory, more narrowed once we run it
  so we need to add this more narrower type definition, putting the return type of the entityy as Human.

  So that is what that function aims to do, this function receives some argument value, which can only be Human or Alien
  and the logic itself, essentially cast the entity as Human, the reason for why we do this is that if we try and call
  entity.speak with an Alien argument it will return a type error 

  we know that an alien don't have a speak method, but we want to leverage that, we want to call it if it doesn't exist
  so that we can check if the method on it is equal to undefined, if it is, than we know that it's not a Human, and we know
  for sure that it is a Human and then the output of this function is that type predicate, it is narrowed that the entity
  that i receive MUST be human, and that is what this logic is aiming to do.

  return  (entity as Human).speak !== undefined

}

now let's use it in example, let's say with have a constant named Josh and we don't know whether it is a human or if it
is an alien

const Josh 

if(isHuman(Josh)) {
  Josh.speak()

  This should work, because essentially, as long as that isHuman passes, typescript knows that this must be an Human

  the return of the function being 'entity is Human', automatically narrows that function, so if it passes later on
  the type has being narrowed significantly smaller, and that is the idea on type predicate function.

  On the reducer case, that is basically what we are going to do, we are going to narrow it so we know that the type
  we are recieving is a specific kind of an action
}





export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>

export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>

export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>

export type CategoryAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFailed

export const fetchCategoriesStart = (): FetchCategoriesStart =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess = (categoriesArray: Category[]): FetchCategoriesSuccess =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  )

 
export const fetchCategoriesFailed = (error: Error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)

// export const fetchCategoriesAsync = () => async dispatch => {
//   dispatch(fetchCategoriesStart());
//   try {
//     const categoriesArray = await getCategoriesAndDocuments('categories')
//     dispatch(fetchCategoriesSuccess(categoriesArray))
//   } catch (error) {
//     dispatch(fetchCategoriesFailed(error))
//   }

