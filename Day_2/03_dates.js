//dates 

let myDate = new Date()
// console.log(`printing normal date Object ${myDate}`); // provide entire date with time zone 
// console.log(`printing date using converting into string ${myDate.toString()}`); // convert date into string and provide month and day
// console.log(`printing date using localstring ${myDate.toLocaleDateString()}`); // convert into local format
// console.log(`printing date using iso ${myDate.toISOString()}`) // provide date and time in iso standatd
// console.log(`printing date using json ${myDate.toJSON()}`); // no diffrence
// console.log(`printing date using only localstring ${myDate.toLocaleString()}`); // provide time and date
// console.log(`printing date using localtime ${myDate.toLocaleTimeString()}`); // provide only time 

// console.log(typeof myDate);
let myCreatedDate = new Date(2024,10,24);
// console.log(`my created date was ${myCreatedDate.toDateString()}`);

// if we need in format like yyyy-mm-dd
let myCreatedDate2 = new Date("2004-11-24");
// console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now();

// console.log(Math.floor(myTimeStamp/1000))

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.toLocaleString('dafault',{minute:"numeric"}))
// newDate.toLocaleString('dafault',{minute:"numeric"})
// we can edit localstring in details like what type of output we need means syntax or format