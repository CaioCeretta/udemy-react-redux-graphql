fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const firstUser = users[0]
    console.log(firstUser)
    return fetch(
      'https://jsonplaceholder.typicode.com/posts?userid=' + firstUser.id
    )
  })
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.log(error))


/*to do the same thing with the async wait we would do it like this
 
to call an async function we utilize the await keyword, what this keyword does is that it pauses the execution until
what is being awaited is completed and comes back with a value

*/

const myAsyncFunction = async () => {
  try {
  const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users')
  /* any value on here would wait until this fetch comes back with a value, the await takes that resolved value
  and sets it to the constant that we declared and set it equal to*/
  const users = await usersResponse.json()

  const secondUser = users[1]

  console.log(secondUser)

  const postResponse = await fetch(
    'https://jsonplaceholder.typicode.com/posts?userid=' + secondUser.id
  )

  const posts = await postResponse.json();

  console.log(posts)
  } catch(err) {
    console.log(err)
  }

  // This is the exact same as the .catch on the fetch way

}

/**
 * As we can see, the async await function is more like a synchronous code, we await for a response, assign the resolved
 * value to a constant, and it is just like the .then from the promises
 */