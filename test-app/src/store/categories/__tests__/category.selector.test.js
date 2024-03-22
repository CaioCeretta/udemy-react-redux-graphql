import {
  selectCategories,
  selectCategoriesIsLoading,
  selectCategoriesMap
} from '../category.selector'

const mockState = {

  categories: {
    isLoading: false,
    categories: [
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
          { id: 1, name: 'item 1' },
          { id: 2, name: 'item 2' }
        ]
      }
    ]
  }
}

describe('Categories Selectors Test', () => {
  test('Select Categories', () => {
    const categoriesSlice = selectCategories(mockState)

    expect(categoriesSlice).toEqual(mockState.categories.categories)
  })

  test('selectCategoriesIsLoading should return isLoading state', () => {
    const isLoading = selectCategoriesIsLoading(mockState);

    expect(isLoading).toEqual(false)
  })

  test('selectCategoriesMap should convert the items array into the appropriate map', () => {
    const expectedCategoriesMap = {
      mens: [
        { id: 1, name: 'item 1' },
        { id: 2, name: 'item 2' }
      ],
      womens: [
        { id: 1, name: 'item 1' },
        { id: 2, name: 'item 2' }
      ]
    }

    const categoriesMap = selectCategoriesMap(mockState)

    expect(categoriesMap).toEqual(expectedCategoriesMap)
  })
})