const name = "AShwin"
const repoCount = 7

// console.log(name + repoCount + "Value");

// console.log(`hellow my name is ${name} and my repoCount is ${repoCount}`); //string interpoolation

//new way to declare a string 
const gameName = new String('Ashwin Gadhvi')
// console.log(gameName.__proto__) // accessing prototpe 


// console.log(gameName.length)
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf('s'));
const name1 = gameName

// console.log(name1.slice(-10,10))

const url = "https://www.google.com/ashwin%20gadhvi.com"

console.log(url.replace("%20","-"))
console.log(url.includes("ashiwn"))


console.log(url.split("%20"))