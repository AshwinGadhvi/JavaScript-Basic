const array = [1,2,3,4,5,6,7,8,9,10]
for (let index = 0; index < array.length; index++){
    const element = array[index];
    // console.log(element);
}

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer Loop ${i}`);
//     for (let j = 0; j < i; j++) {
//         console.log(`innert Loop ${j}`);
//     }
    
// }

//printing tables in fun

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer Loop ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }

// let myHero = ['Ashwin','Vishwaraj','Jayraj','Sidhu'];
// for (let i = 0; i < myHero.length; i++) {
//     const element = myHero[i];
//     console.log(element);
// }


// continue and break in loops

for (let i = 1; i <= 20; i++) {
    if(i==5)
        {
            console.log('Deteced 5');
            break;
        }
    console.log(`Value of i : ${i}`);
}

for (let i = 1; i <= 20; i++) {
    if(i==5)
        {
            console.log('Deteced 5');
            continue;
        }
    console.log(`Value of i : ${i}`);
}