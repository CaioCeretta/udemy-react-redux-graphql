/* Currying is the technique of translating the evaluation of a function that takes multiple arguments into evaluating a
sequence of functions, each with a single argument

For example, you take a function, which can take multiple parameters, and instead, using currying, modify it, to a
function that takes one parameter at a time
*/

const multiply = (a, b) => a * b

multiply(3, 4);

// now using currying

const curriedMultiply = (a) => (b) => a * b

// because of closures, we have access inside of the b function, to the a variable

console.log(curriedMultiply(5)(3))

// This is useful because now we can treate multiple utility functions out of this, for example */

const curriedMultiplyBy5 = curriedMultiply(5)

// Now this function for the rest of its time, when we call it, it will multiply the value to 5

const fifty = curriedMultiplyBy5(10)

console.log(fifty)