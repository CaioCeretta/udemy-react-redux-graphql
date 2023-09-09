#Difference between a pure function and an impure function

- A pure function returns the exact same thing, no matter how many times it gets called, no matter how many times it receives the same arguments

  Example:
  const pureFunc = (a, b) => {
    return a + b
  }

  for this function to be pure, if a is 2 and b is 4 it should always return 6

  Pure functions don't have side effects
  Pure components are typically stateless and rely on their props for rendering
  Pure functions are easy to reason about and test because their behavios is predicatable and isolated

- Impure functions, on the other hand, can have side effects or modify external state.
They may relt on and modify internal or external state, such as component state or global state managed by a library like redux and they can have unpredicatble behavior because they are not solely dependent on their inputs
One example of an impure function is this

let c = 3;

const funcA = (a, b) => {
  return a + b + c
}

this function is similar, but it relys on an external value c.
in this particular case if we passed 2 and 4 we would get 9, but c might change, and we wouldn't get the same value, so it is impure. 
other example

let c = 3;

const funcB = (a, b) => 
{
  c = a + b;

  return a * b
}

If we pass 2 and 4, this will definetely return the same result and look like a perfect result, however c is being changed outside of the function and this is considered a side effect, a side effect is when a function creates some kind of effect outside its scope, and in this particular case is setting some variable outside of the scope of its function. The variable c does not live in the scope of the function, it is accessible within the scope but it's also accessible outside of the scope, and if we want to change that variable, is considered a side effect 

