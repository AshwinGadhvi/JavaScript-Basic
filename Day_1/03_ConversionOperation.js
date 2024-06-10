let score = "33abc";

// console.log(typeof score); // string
// console.log(typeof(score)); // string

let valueInNumber = Number(score);  // explicit type cast to number
// console.log(typeof(valueInNumber)); // number
// console.log(valueInNumber); // it is provide a NAN means it is not a number

let score2 = null;

// console.log(typeof score2); // object
// console.log(typeof(score2)); // object

let valueInNumber2 = Number(score2);  // explicit type cast to number
// console.log(typeof(valueInNumber2)); // number
// console.log(valueInNumber2); // 0


let score3 = undefined;

// console.log(typeof score3); // undefined
// console.log(typeof(score3)); // undefined

let valueInNumber3 = Number(score3);  // explicit type cast to number
// console.log(typeof(valueInNumber3)); // number
// console.log(valueInNumber3); // it is provide a NAN means it is not a number


let score4 = true;

// console.log(typeof score4); // boolean
// console.log(typeof(score4)); // boolean

let valueInNumber4 = Number(score4);  // explicit type cast to number
// console.log(typeof(valueInNumber4)); // number
// console.log(valueInNumber4); // 1


let score5 = "ashwin";

// console.log(typeof score5); // string
// console.log(typeof(score5)); // string

let valueInNumber5 = Number(score5);  // explicit type cast to number
// console.log(typeof(valueInNumber5)); // number
// console.log(valueInNumber5); // it is provide a NAN means it is not a number



// "33" => 33
// "33abc" => NAN
// true => 1; false => 0;

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


// 1 => true , 0=> False
// "" => false
// "AShwin" => true

let number1 = 22
let snumber2 = String(number1)
// console.log(snumber2);
// console.log(typeof snumber2);

// ****************************************************** Operation ******************************************************

let value = 3
let nagValue = -value
// console.log(nagValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**2);

let str1 = "hellow"
let str2 = " Ashwin"
let str3 = str1+str2
// console.log(str3);

// console.log(1+"3");
// console.log("1"+3);
// console.log("1"+2+2);
// console.log(1+2+"2");
// console.log(3+4*5%6);

// console.log(+true); // it provide a value of true because it increment the value
// console.log(+""); // empty parenthesis means 0 with text meant 1 so answer was 0 here

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter); // watch mdn and js for prefix and postfix





