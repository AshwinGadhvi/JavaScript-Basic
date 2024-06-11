// singleton => when we make object using constructor 
// not singlton => when we make object using literals

//Object.create // this is how object made using constructor

// Object Literals
const JsUser = {
    name: "Ashwin",
    age: 19,
    location: "Adipur",
    email: "ashwingadhvi.ce@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday","Saturday"],
    "Full Name": "Ashwin Gadhvi"
}

// Two Ways To Access The Element

console.log(JsUser.email); // first one
console.log(JsUser["email"]); // second one

// first one can't use when we want to access full name. so that for a reason we have to use second one

// declaration of symbol

const sym = Symbol("Key1")

// now we gone a add symbol in object below

// const JsUser = {
//     name: "Ashwin",
//     age: 19,
//     [sym]: "Key1", 
//     location: "Adipur",
//     email: "ashwingadhvi.ce@gmail.com",
//     isLoggedIn: false,
//     lastLoginDay: ["Monday","Saturday"],
//     "Full Name": "Ashwin Gadhvi"
// }

// how to access it
// console.log(JsUser[sym])


// change karna to aata hei

// if we want to freez the object (means not apply any one to change the value) or locked it
// syntax for it
// Object.freeze(JsUser); //like this we can freez the object


JsUser.greeting = function(){
    console.log("hellow jsuser");
}

JsUser.greetingTwo = function(){
    console.log(`hellow jsuser ${JsUser["name"]}`);
}

// console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());