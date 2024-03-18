const swapi = require('./script2')

it('calls swapi to get people', () => {
  swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87)
  })
})