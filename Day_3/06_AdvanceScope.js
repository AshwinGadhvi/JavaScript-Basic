function one()
{
    const userName = "Ashwin";
    function two()
    {
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website); // it provide an error because of an use of scope level of the two function which cannot access outside

    two()
}
// one()

//closure => it means function inside function access the main function data member's but outside cannot do that

if(true){
    const userName = "Ashwin"
    if(userName === "Ashwin")
        {
            const website = " Youtube"
            // console.log(userName+website)
        }
        // console.log(website); // not access
}
// console.log(userName); // not access

//+++++++++++++++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5)); // we can aacess it because we cannot provide a function to variable
function addone(value){
    return value+1
    }


    addTwo(5,6) // we cannot access this because function was provided to variable which was not declare yet // it was called as hoising
const addTwo = function(num1,num2){
    return num1+num2
}


