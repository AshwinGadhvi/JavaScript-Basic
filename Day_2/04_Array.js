// Array

const myArray = [0,1,2,3,4,5,6] // it was resizeable and alsoo contain multiple type of data at once

// console.log(myArray[0]);
// when we create an array it provides a shallow copy it means it can provide a reference of the array if we changing copy array it can effect main aray
// deep copy : it cannot be passed. it means it cannot provide a reference when we changed the copy array it does not effect the main array

// another way to declare a array
const heros = new Array("ashwin","gadhvi");
// console.log(heros);

// Array Method

// myArray.push(6);
// console.log(myArray);

// unshift as usual insert at first
// shift as usual delete at first

const newArray = myArray.join() // it joins the array
console.log(myArray)
console.log(newArray)
console.log(typeof newArray) //type after join was switch to string

// checkout the method which was slice and splice 
// in the slice we can see if we have give range 1,3 => 1,2
// in the splice we can see if we have give range 1,4 => 1,2,3,4


