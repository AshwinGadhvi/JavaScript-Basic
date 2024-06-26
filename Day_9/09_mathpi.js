const discriptot = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(discriptot);
// console.log(Math.PI);
// Math.PI =5
// console.log(Math.PI);


const ob = {
    name: "Ashwin",
    Sem: 3,
    Avail: true,

    op: function(){
        console.log("op");
    }
}

console.log(Object.getOwnPropertyDescriptor(ob,"name"));


// Object.defineProperty(ob,'name',{
//     writable:false,
//     enumerable:false
// })
// console.log(Object.getOwnPropertyDescriptor(ob,"name"));

for(const [key,value] of Object.entries(ob)){ //it is not iteratable so we use object.entries()
    if(typeof value !== 'function')
    {
        console.log(`key ${key} and value ${value}`);
    }
}