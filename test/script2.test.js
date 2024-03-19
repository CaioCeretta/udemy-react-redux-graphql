
const swapi = require('./script2')

it('calls swapi to get people', (done) => {
  expect.assertions(1)
  swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(82)
    done()
    //The done() is  basically telling us to wait the whole execution before setting the test as done
  })
})


it('calls swapi to get people with a promise with return', () => {
  expect.assertions(1)
  return swapi.getPeoplePromise(fetch).then(data => {
    expect(data.count).toEqual(82)
    /* Or we can sikmply return the promise, because jest is smart enough to know that i has to wait the for the promise
     return, and if the promise is rejected the test will automatically fail
     
     if we ommit the return the test is going to be complete before the promise actually gets resolved or rejected

      So when run asynchronous test is always a good practice to return the promise and utilize the expect assertion
     */
  })
})

it('calls swapi to get people with promise 2 assertions', () => {
  expect.assertions(2)
  return swapi.getPeoplePromise(fetch).then(data => {
    expect(data.count).toEqual(82)
    expect(data.results.length).toBeGreaterThan(5);

  })
})


it('getPeople returns count and results', () => {
  mockFetch = jest.fn().mockReturnValue(Promise.resolve({
    json: () => Promise.resolve({
      count: 87,
      results: [0, 1, 2, 3, 4, 5]
    })
  }))

})