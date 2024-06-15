const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const new_Numeber= myNumbers.map((num)=>num+10) //it will automatically return
// console.log(new_Numeber);

//learning About Chaining
//in this u can apply any method on objects or array by adding them on up on and also it returns true value only

const newNums = myNumbers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
console.log(newNums)
