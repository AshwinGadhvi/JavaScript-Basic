// Stack And Heap

// Stack is used at primitive dataTypes
// Heap is used at non primitive dataTypes

// stack memory is provide a copy where we can declare a variable 
// heap memoru provide a reference where we can declare a object


// in the stack real value can't change when we changing the copy of it.
// in the heap original value was changed where we change the reference value.

let myName = "Ashwin"
let anotherMyName = myName

anotherMyName = "Gadhvi"

console.log(anotherMyName);
console.log(myName);

let user = {
    email: "ashwingadhvi.ce@gmail.com",
    upi: "user@oksbi"
}

let user2 = user

user2.email = "opbhai@gmail.com"

console.log(user)