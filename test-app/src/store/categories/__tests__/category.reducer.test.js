import {
  categoriesReducer,
  CATEGORIES_INITIAL_STATE
} from "../category.reducer";

import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed
} from '../category.action'


describe('Category reducer tests', () => {
  test('fetchCategoriesStart', () => {
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: true
    }

    expect(categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesStart())).toEqual(expectedState)

  })

  test('fetchCategoriesSuccess', () => {
    const mockData = [
      {
        title: 'mens',
        imageUrl: 'anyimage',
        items: [
          { id: 1, name: 'item 1' },
          { id: 2, name: 'item 2' }
        ]
      },
      {
        title: 'womens',
        imageUrl: 'anyimage',
        items: [
          { id: 1, name: 'item1' },
          { id: 2, name: 'item2' }
        ]
      }
    ]

    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: false,
      categories: mockData
    }

    expect(
      categoriesReducer(
        CATEGORIES_INITIAL_STATE,
        fetchCategoriesSuccess(mockData)
      )
    ).toEqual(expectedState)


  })

  test('fetchCategoriesFailed', () => {
    const mockError = new Error('There was an error fetching')

    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      error: mockError,
      isLoading: false
    }

    expect(
      categoriesReducer(
        CATEGORIES_INITIAL_STATE,
        fetchCategoriesFailed(mockError)
        )
       ).toEqual(expectedState)
  })
})