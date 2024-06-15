// const myCoding = ["js","Python","Ruby","Java","CPP"];

// const values = myCoding.forEach((item)=> { // for each can't return a value
//     // console.log(item);
//     return item
// })
// for each not return a value

const myNums = [1,2,3,4,5,6,7,8,9,10]

//syntax

//objrct.filter(call back function (parameter)=>{function with return})

// const newNums = myNums.filter((num)=> num>4); //filter is use to return a values
// console.log(newNums);

//when u use {} means you start a scope so for that reason you must have to explicitly return a return


// const newNums = []

// myNums.forEach((num)=>{
//     if(num>4)
//     {
//             newNums.push(num)
//     }
// })

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


const userBookes = books.filter((bk)=> bk["genre"]==='History')
console.log(userBookes)

const userPublistion = books.filter((bk)=>bk["publish"]>=2000)
console.log(userPublistion);

//const userPublistion = books.filter((bk)=>{return bk["publish"]>=2000}) //another way to write single line function with return statement


const issue = books.filter((bk)=>bk["publish"]>=1995 && bk["genre"]==='History')
console.log(issue);

