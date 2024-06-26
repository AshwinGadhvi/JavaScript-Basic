//ES6

// class User{
//     constructor(username,email,pass){
//         this.username = username;
//         this.email = email;
//         this.pass = pass;
//     }

//     encryptPassword(){
//         return `${this.pass}abc`;
//     }

//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const ashwin = new User("ashwin","ashwin.ce@gmail.com","4323");

// console.log(ashwin.encryptPassword());
// console.log(ashwin.changeUserName());

// behind the scene

function User(username,email,pass){
    this.username = username;
    this.email = email;
    this.pass = pass;
}


User.prototype.encryptPassword = function(){
    return `${this.pass}abc`;
}

User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`;
}

const gadhvi = new User("gadhvi","gadhvi.ce@gmail.com","1323");

console.log(gadhvi.encryptPassword());
console.log(gadhvi.changeUserName());