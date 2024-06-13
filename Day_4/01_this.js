// Arraow function and this keyword

const user ={
    name:"Ashwin",
    price:999,
    welcomeMessage: function(){
        console.log(`welcome to website ${this.name}`);
        // console.log(this); // it will work with current value in js
    }
}

// user.welcomeMessage()
// user.name = "Gadhvi"
// user.welcomeMessage()


// console.log(this); // it will referd to empty object because their are no global context here present

// in the browser global object is window


// function chai(){
//     let userName = "Ashwin";
//     console.log(this.userName); //we can use only this in function but we cannot access current variable or something value using this in function 
// }

// chai();

// const chai = function(){
//     let userName="Ashwin";
//     console.log(this.userName);
// }

const chai = () => {
    let userName = "Ashwin";
    console.log(this);
}

// chai()

const addTwo = (num1,num2)=> {
    return num1+num2
}

// console.log(addTwo(5,6));

// const impli = (num1,num2)=> (num1+num2)  //implicit parenthesis we dont have to write return function

// console.log(impli(4,4));

const returnUser = ()=> ({userName:"Ashwin"}) //wrap in parenthesis to return object

console.log(returnUser());

// const myArray = [1,2,3,4,5,6,7]

// myArray.forEach(()=>{})