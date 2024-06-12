// Learning About rest Operator

function calculateCartPrice(...num1) // ... this is called as rest operator in function but we also use to concat array then we have to call this spread operator 
{
    return num1
}

// console.log(calculateCartPrice(100,2000,3000))

const user ={
    name:"Ashiwn",
    price:"200"
}

function handleObject(anyobject)
{
    const {price: p,name: n} = anyobject
    console.log(`my name is ${n} and my income is ${p}`);
}

handleObject(user);