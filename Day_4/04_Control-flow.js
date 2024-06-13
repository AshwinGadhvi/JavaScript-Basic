//if

const isUserLogedIn = true

// if(isUserLogedIn){
//     console.log("User Is Logged in")
// }

// const temp =41
// if(temp === 41)
// {
//     console.log("temp is 41");
// }else{
//     console.log("temp is not 41");
// }

// const score = 100
// if(score>50)
// {
//     const power = "Fly"
//     console.log(`user power is ${power}`);
// }

// const balance = 1000
// if(balance>500) console.log("yes"),console.log("No");

// if(balance<500){
//     console.log("less then 500");
// }else if(balance<750){
//     console.log("less then 750");
// }else{
//     console.log("Balance is 1000 i think");
// }

// const userLoggedIn = true
// const debitCard = true
// const one = true
// const two = false
// if (userLoggedIn && debitCard) {
//     console.log("User Has LoggedIn And Also Has DebitCard");
// }

// if (one || two)
// {
//     console.log("OP")
// }


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++ Switch ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = "march"

// switch (month) {
//     case "jan":
//         console.log("January");
//         break;
//     case "feb":
//         console.log("feb");
//         break;
//     case "march":
//         console.log("march");
//         break;
//     case "april":
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Truthy +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")