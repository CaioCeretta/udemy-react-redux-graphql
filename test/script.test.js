const googleSearch = require('./script')

dbMock = [
  'dog.com',
  'cheesepuff.com',
  'disney.com',
  'dogpictures.com'
]

/*it(
  'this is a test', () => {
    expect('hello').toBe('hello')
    // googleSearch('testtest')
  }
) */

describe('Google Search', () => {
  
it('It is searching google', () => {
  expect(googleSearch('doggy.com', dbMock))
  .toEqual([])
  expect(googleSearch('dog', dbMock))
  .toEqual(['dog.com', 'dogpictures.com'])
})

it('Work with undefined and null input', () => {
  expect(googleSearch(undefined, dbMock)).toEqual([])
  expect(googleSearch(null, dbMock)).toEqual([])
})

it('Does not return more than 3 matches', () => {
  expect(googleSearch('.com', dbMock).length).toEqual(3)
})

})