// for of, for in, for each loops


//for of loop

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(`Value of Index : ${num}`);
// }

// const greetings = "Hellow Worlds";
// for (const greet of greetings) {
//     console.log(`each Char : ${greet}`);
// }

// Maps

const map = new Map()
map.set('Gujarat',"GJ");
map.set('Goa',"Goa");
map.set('Mumbai',"MH");

// console.log(map);

for (const [key, value] of map) {
    // console.log(key,':-',value);
}

const myObject = {
    js:'javascript',
    cpp:'cpp',
    rb:'Ruby'
}


//for in loop because we cannot iterat object using for of loop
for (const key in myObject) {
    // console.log(`Keys : ${key} : value : ${myObject[key]}`);
}

const prg = ["java","cpp"]

//for in loop provide only index where for of directly provided value of element or object
for(const key in prg)
{
    // console.log(key);
}

// map is not iteratable in for in loop but it is iteratable in for of loop

//for each loop learning

const coding = ["js","java","python","cpp","ruby"]

// coding.forEach( (item)=>{
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe); // passing only reference

// coding.forEach( (item,index,arr)=> {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"Visual Basics",
        languageFileName:"vb"
    },
    {
        languageName:"Figma",
        languageFileName:"fig"
    },
]

myCoding.forEach((item)=>{
    console.log(item["languageFileName"]);
})