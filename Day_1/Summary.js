// Primitive

// 7 types : String, Number, Boolean, null, Undefined, Symbol, BigInt

// Non Primirive

// Array, Objects, Functions

// it is dynamically typed language

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id == anotherId);


let Mobile = 704688765463456789062268n // using n at the end we store or convert the value into the BigInt
// console.log(typeof Mobile);


// Object


const hero = ["Iron man","Captain","Thor"];
const heroin = {
    name:"Natasha",
    char:"Black Widow",
    movie:"3"
};

const ashwin = ()=>{
    console.log("ha bhai ha");
}

console.log("Calling Array : ",hero)
console.log("Calling Objects : ",heroin)
console.log("calling function : ",ashwin)