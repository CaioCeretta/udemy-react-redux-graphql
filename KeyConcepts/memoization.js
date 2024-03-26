/**
 * Caching is a way for us to speed up our programs and hold some piece of data in an easy and accessible box and
 * memoization is a specific form of cache wich we'll se in this lesson* 
*/

function add80(n) {
  console.log('Long time')
  return n + 80
}

// console.log(add80(5))

/* If we do that again, we will still have the outcome of 85, and if we had that long time operation inside of it, it
would execute everytime, this would be away we can improve the function above*/

let cache = {};

function memoizedAdd80(n) {
  if(n in cache) {
    return cache[n]
  } 

  console.log('long time')
  cache[n] = n + 80
  return cache[n]
  
} 


console.log('1', memoizedAdd80(5))
console.log('2', memoizedAdd80(5))

/* Memoization is a form of caching, which is caching the return value of a function, based on its parameters, and if the
parameter doesn't change it's memoized, because it's calculated the same thing before, with the same parameter, and is a 
cached version of the function, it's memoized */