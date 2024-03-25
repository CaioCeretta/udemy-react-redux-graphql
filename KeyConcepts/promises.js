/*This is a pseudo function which is basically fetching from this link, and we pass two arguments to a function, which is
called a 'callback'. Inside of it we are either getting the user successfully or an error if something goes wrong along
the way
getUser('facebook/caioceretta', (user, error) => {
  if (error) {
    throw (error)
  }

  const userId = user.id

  /* Then with the userId we pass it to this new function, and also utilize a callback with two arguments of friends and
  error
  getFriends(userId, (friends, error) => {
    if (error) {
      throw (error)
    }

    const john = friends.find(...)

    getPosts(john, (posts, error) => {
      if (error) {
        throw (error)
      }
      const recentPosts = posts[0]


      commentsForPost(recentPosts, (comments, error) => {
        if (error) {
          throw error
        }

        displayComments(comments)
      })

    })

  })
})

*/


/* In the pseudo code above, we can clearly say that the code is too difficult to read, because it is a massive
pyramid tree like shape of nested callbacks, it is a callback hell because the code is very extensive to read and debug

all those functions are asynchronous functions, we don't know when those functions will complete ou error, and we have to
nest all of those functions because each one depends on the result and the return of the previous ones

and promises came to get rid of these
*/

const myPromise = new Promise((resolve, reject) => {
  /*  The promise will be either a resolved value or a rejected value.
    The promise is going to be on a state where it is pending, until either the resolve or rejected has been called.
    
 */

  if (true) {
    setTimeout(() => {
      resolve('I have succeeded')
    }, 1000)
  } else {
    reject('I have failed')
  }

  /* Now after one second, the promise will hold this value that we've passed to the resolve, to get the rejected value
   we need to chain a catch on the .then, but it is perfectly fine to just resolve and not implementing a reject
   But having a reject we are able to control the separation of a successful api callback and a unsuccessful api call
   and that is the main benefit of using promises, when we use an api call we don't know, 100% of times, if it will work
   or not, the server may be down, or we made a mistake on the request
    */
})

//When we utilize the .then the argument will have the value of the resolve
console.log(myPromise
  .then(value => console.log(value))
  .catch(error => console.log(error)))

//And if we want to chain more .thens inside of it, the first parameter is going to be the return of the previous .then

console.log(myPromise
  .then(value => value + '!!!!')
  .then(valueWithExclamations => console.log(valueWithExclamations))
  .catch(error => console.log(error)))

/* In the case above we are returning a new string plust the four exclamation marks, what .then will do with that value
is it will wrap it inside a resolve promise, that way we can chain .then on it with our new value and then console.log
that new value because it has wrapper this value into a resolved promise, we can only call .then into a resolved promise
we cannot call it on a normal string, and the only reason we can do so is because each .then is wrapping a value that
gets returned from the callback that they get passed into a resolved promise*/


/*

  On the other hand, with fetch, when we use it, we can see that fetch looks very similar to the promise code we just wrote

  the reason for it is that fetch returns us a promise value while it makes an api request to the url that we passed it.

  If the endpoint throws an error like lack of permission or misstyped it, instead of giving us back a value, the fetch
  will also reject that value in the promise that it gives back to us, if it's sucessful, it instead will resolve it,
  and we are going to get a .then response, because it's what the fetch gaves us back.
  we usually convert into a json object, calling .json on the response, and it will wrap that .json value on another resolved
  promise, which gets passed to next .then and we finally console.log it.

*/

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))


fetch('https://jsonplaceholder.typicode.com/nonexistentendpoint')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.log('An error occurred:', error));

// or

fetch('https://jsonplaceholder.typicode.com/nonexistentendpoint')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  })
  .then(json => console.log(json))
  .catch(error => console.log('An error occurred:', error));

