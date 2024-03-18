

const getPeoplePromise = () => {
  return fetch('https://swapi.dev/api/people')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    return {
      count: data.count,
      results: data.results
    }

})

}

const getPeople = async () => {
  const getRequest = await fetch('https://swapi.dev/api/people')
  const data = await getRequest.json()
  
    console.log(data)
    return {
      count: data.count,
      results: data.results
    }
  
}

getPeople()
  .then(people => console.log(people))
  .catch(error => console.log('Error', error))


  module.exports = {getPeople}