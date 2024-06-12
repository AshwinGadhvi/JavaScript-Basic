// function SayMyName(){
//     console.log("Ashwin");
// }

// // SayMyName // it is reference
// SayMyName() //we calling funcrion


function addTwoNumbers(num1,num2)
{
    return num1+num2;
}

console.log(addTwoNumbers(2,2));

let result = addTwoNumbers(4,5);
// console.log(`result is : ${result}`);

function loginUserMessage(username)
{
    if(username === undefined) //!username
        {
            console.log("Please Enter A user Name")
            return
        }
    return `${username} just logged in`
}

console.log(loginUserMessage("ashwin op hei bhai"));

function loginUserMessage2(username = "Ashwin") //default parameter
{
    if(username === undefined) //!username
        {
            console.log("Please Enter A user Name")
            return
        }
    return `${username} just logged in`
}