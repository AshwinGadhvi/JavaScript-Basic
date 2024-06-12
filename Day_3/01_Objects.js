// singleton object

// const tinderUser = new Object() // this is singleton object
// console.log(tinderUser);

const tinderUser  = {} // this is not a singleton object
// console.log(tinderUser);

tinderUser.id = "D23CE180"
tinderUser.name = "Ashwin"
tinderUser.age = 19

const regularUser = {
    emial: "ashwingadhvi.ce@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Ashwin",
            lastName:"Gadhvi"
        }
    }
}

// console.log(regularUser["fullName"]["userFullName"]["lastName"]);
// const main = {...tinderUser,...regularUser}
// console.log(main);

const ob1 = {1:"a",2:"b"};
const ob2 = {3:"c",4:"d"};

const ob3 = Object.assign({},ob1,ob2); // it is static method 
// console.log(ob3);

const ob4 = {...ob1,...ob2};
// console.log(ob4);

const users = [
    {
        id:1,
        email: "a@gmail.com"
    },
    {
        id:1,
        email: "b@gmail.com"
    },
    {
        id:1,
        email: "a@gmail.com"
    },
    {
        id:1,
        email: "a@gmail.com"
    },
]

// console.log(users[1]["email"]);
// to get all keys Object.key("Name Of Object")
// to get all values Object.values("Name of Object")

console.log(Object.entries(tinderUser)); // entries was convert all the key pair value in array as element

console.log(tinderUser.hasOwnProperty('id')); // to check that this property exist or not



