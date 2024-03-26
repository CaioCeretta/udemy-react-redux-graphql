// map
/* Map returns a new array based on the code inside of it, not like forEach, for example, that would execute the loop but
it wouldn't return anything from it, being unnecessary to assign it to a variable*/
const myArrayM = [1, 2, 3, 4];

const map = myArrayM.map(el => {
  return el + 1
})


//or we can execute it without passing an argument, just iterating over the array length

const b = myArrayM.map(() => 'b')

console.log(b)

console.log(map);


//filter

const myArrayF = [1, 3, 5, 7, 9]

/*Filter we want to filter a new array based on the function that we write inside of it instead of modifying the array
 like the map
*/

const newArrayF = myArrayF.filter(el => {
  return el > 5
})

console.log(newArrayF)


//reduce

// This is one of the best array methods that we have in js

const myArrayR = [1, 2, 3, 4, 5]

/* If we want to add all these values together we could do a for loop and end up with some final value, or, this is the
perfect time to use reduce, it's a great method to use when we want to do two things

1 - We want to end up with one value in the end
2 - When we want to persist the return or outcome of iterating over our elements in each iteration

the first element is the accumulator doing whatever it wants based on the currentElement, and the second is the initial value of it

*/

const sum = myArrayR.reduce((acc, currEl) => {
  console.log(acc)
  return acc + currEl 
}, 0)

console.log(sum)

/* we can see that the accumulator, on each iteration, is summing with the value of the currEl, being 0, 1, 3, 6, 10 and 15*/

//find

const myArrayFind = [1, 3, 5, 7, 9];

//Find an element that correctly returns true based on the condition that we have

//
const findFive = myArrayFind.find(el => el === 5)


//This case it would find an element with the value of five and stop it right there
console.log(findFive)


//This case is similar to the top one, it stops when it reaches an element that is greater than 4
const findGtFour = myArrayFind.find(el => el > 4)

console.log(findGtFour)

const peopleArray = [{id: 1}, {id: 4}, {id: 7}]

/* If we want to find the people array with the id of 4, we would do it like this and this would give the element
that matches the condition */

console.log(peopleArray.find(person => person.id === 4))




//includes

/* What includes does is that it verify if that argument is any element that we want */

const myArrayI = [1, 2, 3, 4, 5, 2];

// const includes = myArrayI.includes(3)

// const includes = myArrayI.includes(9)

/* It can also be verified by the index */

const newArrayI = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  }
]

//This one is checking starting by the third index, if the 2 exists

// const includes = myArrayI.includes(2, 3);

const includes = myArrayI.includes({id: 2});

/*This would return false even though the object i'm passing is the exact same value, but what happens is because of the
way javascript references objects and primitive types, which in primitive types, if per example. i have

const a = 3

in the memory it will point to 3 and if const let = 3, it does the same thing, it points to the same 3 in memory, and if 
let c = b, it will not point to our value of b, instead it points to b, which then points to our value in memory of 3

if we change b to 5, b is now pointing to the value of 5 in memory, but c will not accompany it, it will still have the
value of 3

c is not equal to whatever b becomes, it will only point to the value that b pointed to when we assigned it

Inside of JS. anything that is not a primitive type, is called an object, and an object is unique, whenever an object
gets instantiated, it gets its own unique reference in memory, everything in js that is not, string; boolean; null;
undefined; number; symbol, is an object. So arrays are also objects, and we can see objects as a collection of things
that have properties that have values.

even though if we create something like const d = 'd', it will have the strings methods, that is because when we declare
something like a string that is a primitive, javascript provides a mechanism called property access for primitive values
which allows us to access certain methods and properties as if they were objects, in that case it is a primitive string,
However, js will automatically wrap that value into an object, a String object, when we attempt to access properties and
methods on it. That process is named implicit coercion or auto boxing

The arrays that we created, they all have properties, because they have these methods on them and they are pretty much
just properties that points to functions.  that's why we are able to use then like functions, we call them with the dot
notation like it's a property on the object.

Wherever we see an object get instantiated, what we see is javascript store that object as a brand new reference in memory.
So let's say we made a new constant like this

const obj1 = { id: 1 }

this object gets a new reference on the memory, even if we were to make a new obj2, and point it to a different object, like
const obj2 = { id: 1 }

it look the exact same as the obj1, but if we compare if obj1 is equal to obj2 it's going to be different, because js
compares the reference in memory. That would only work if we were to do something like when we point our  value of c to b,
but if we point, for example

const obj3 = obj2, the obj3 would point to that object, and because both obj3 and obj2 are pointing to the same object in
memory, the reference to memory will be the same, but if we change the properties on them, adding or modifying, they will
always point to the same object reference in memory, so if we do something like

let obj2 = {id: 1}

let obj3 = obj2

they will both have the same {id: 1} as value, but if we set obj2.id = 4, obj3.id will now also be 4
 

*/


/* Now on the includes object, that would be how we would get our includes to work, we would actually do



and if we were to display it, we would see that it is something like 

[
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  }
]

where the index 0 is id: 1 and so on

*/

const o1 = { id: 1 }
const o2 = { id: 2 }
const o3 = { id: 3 }
const newestArray = [o1, o2, o3]

console.log('biporoporopo', newestArray.includes(o1))

/*this will work because we are referencing that pointer in memory, so even though our array is this array above, the
objects inside of it are not new objects, they are all pointing to the same elements in memory, which is why when we do
the includes the evaluation is true, because that is essentially what includes is doing under the hood, its checking if
the reference that we are passing in is equal to any of the elements inside by their memory reference
*/
