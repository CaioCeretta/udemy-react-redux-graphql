/* 
*/


import { createSelector } from 'reselect'
import { CategoriesState } from './category.reducer';
import { CategoryMap } from './category.types';

const selectCategoriesReducer = (state): CategoriesState => state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => { console.log('selector 2'); return categoriesSlice.categories }
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categoriesSlice): CategoryMap => {
    console.log('Selector Recalculation')

    return categoriesSlice.reduce((acc, category) => {
    const { title, items } = category;

    acc[title.toLowerCase()] = items;

    return acc;
  }, {} as CategoryMap)}
  /* Generally we don't want to cast some type, because we are telling typescript that this type is going to be something.
  But here with reduce we know that what we are typing is going to be this CategoryMap object, so this is a place that it
  is relatively type safe */
)

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);