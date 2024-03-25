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

//find

//includes