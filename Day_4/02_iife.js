// Immediately Invoked Function Expression

(function chai()
{
    console.log("db connect");
}) ();    // it was named iife
// chai();

// put function inside () and then after ending of code call it like ()  ; it is use to terminate

( () => {
    console.log(`Db Connect two`);
} )();


((name)=>{
    console.log(`My Name Is ${name}`);
})('Ashwin'); //parameterized function and also simple iife

