// learning about call stack in execution contex

// => javascript execution context
// first file made global execution context and provided to this keyword => window
// javascript is single threded
// second file was functional execution context
// learn about eval



function one()
{
    console.log("Ashwin");
    TWO()
}

function TWO()
{
    THREE()
    console.log("Gadhvi");
}

function THREE()
{
    console.log("Jethalal");
}

one();