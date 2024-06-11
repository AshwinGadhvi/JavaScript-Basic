// numbers and maths

const balance = new Number(500) // when we create this using explicitly by number so it specify in answer like [Number :500]
console.log(balance);


// console.log(balance.toString()); // to convert into the string

console.log(balance.toFixed(2)); // used for precision value 

const anotherNumber = 123.890
console.log(anotherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // to show the number in proper way like 10,00,000

// checking into the console of thw browser

//++++++++++++++++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(Math.abs(-13));
console.log(Math.round(4.5)); // ceil and floor
//min and max

console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min+ 1)) + min)