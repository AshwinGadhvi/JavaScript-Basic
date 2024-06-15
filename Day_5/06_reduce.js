//reduce method

const myNums = [1,2,3]

//reduce have to value accumulatore and currentValue

/**
    const myTotal = myNums.reduce(function (acc,currVAl){
        console.log(`acc: ${acc} and currVal : ${currVal}`);
        return acc+currVal
        },0)
 */

const myTotal = myNums.reduce((acc,cu_value)=>acc+cu_value,0);
console.log(myTotal);


const shoppingCart = [
    {
        itemName:"Js",
        price:2999
    },
    {
        itemName:"Python",
        price:999
    },
    {
        itemName:"Mobile Dev",
        price:5999
    },
    {
        itemName:"Data Science",
        price:12999
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=>acc+item["price"],0)
console.log(priceToPay)