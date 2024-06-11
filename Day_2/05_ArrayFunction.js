const marvel_hero = ["Thor","Iron Man","Captain"]
const dc = ["Superman","BatMan","Flash"]

// marvel_hero.push(dc) // it will add entire array as 4 element
// console.log(marvel_hero);

// const op = marvel_hero.concat(dc) // it will extends the array by including dc
// console.log(op); 

// spread operator

const new_hero = [...marvel_hero,...dc] // spread oprator use to concat array
// consol.log(new_hero);

const anotherArray = [1,2,3,4,[5,6,7],8,[6,7,[3,4]]]

const real_another_array = anotherArray.flat(Infinity); // it will create new array in which they provide all the array element as spread without any array inside array
console.log(real_another_array);
// use when data scraping from another website

console.log(Array.isArray("Ashwin"));
console.log(Array.from("ashwin124")); // from this method is used to convert the any data to array
// console.log(Array.from(123));
// console.log(Array.from({name:"Ashwin"}));

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1,score2,score3));

// learn more about array function like of and from