/* reselect creates us for this concept of a memoized selector
  memoized is basically it caches the previous value of something and if the input hasn't changed, then just returns
  the same output

  like a pure function add(a, b) => a + b

  if we call add(3,6) will give us the value of 9, if we call it again with the same arguments and the input does not
  change, it will already know the result, and won't waste extra memory to recalculate it

  What reselect createSelector does is basically that, it memoizes them, assuming that the input does not change, then
  our output should always be the same

  Parameters:
  Input Selectors (Array of Selectors):

  These are the selectors that provide the input data for the memoized selector.
  When the Redux state changes, these selectors are called with the updated state to recalculate their values.
  Result Function (Function):

  This function takes the results of the input selectors as its arguments.
  It computes the final result based on these input values.
  The result function is called only if the input selectors' results have changed since the last call.
*/


import { createSelector } from 'reselect'

const selectCategoriesReducer = (state) => { return state.categories; }

export const selectCategories = createSelector(
  /* create selector receives 2 parameters, being the first an array of input selectors and the second is going to be
  the output selector
  The input selector is what do i want as part of the parameters that i'm going to use to produce, what the selector
  should return back, what slices do i want from redux, so i can use to produce it
  In this case, we are using the categoriesSlice, because all of the categories slice, which we will receive as the
  argument inside the output array, it means that whatever the output of state.categories is, will be the argument that
  is in the same place as the output array
  Let's say we have an other selector in the array below, such as the currentUser selector, this will now be the second
  argument of the output function, being (categories, currentUser).
  In this case we only need the categories. 
  */
  [selectCategoriesReducer],
  (categoriesSlice) => { console.log('selector 2'); return categoriesSlice.categories }
)

/**
 * Now that selectCategories is memoized, it means that the only time it will re run is when the input selector, the
 * categories state, changes, if the input is the same, it will not re render
 */

/* As long as the selectCategories doesn't change, we don't want this reduce to be executed again */

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categoriesSlice) => {
    console.log('Selector Recalculation')

    return categoriesSlice.reduce((acc, category) => {
    const { title, items } = category;

    acc[title.toLowerCase()] = items;

    return acc;
  }, {})}
)

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);