const user = {
    username:"Ashwin",
    loginCount:"4",
    getUserDetails: function(){
        // console.log("get user details from database");
        // console.log(`userName is : ${this.username}`);
        console.log(this);
    }
}

// console.log(user.loginCount);
// console.log(user.getUserDetails());
// console.log(this);

function User(userName,LoginCount){
    this.userName = userName;
    this.LoginCount = LoginCount;
    // return this implicitly define return
    this.grerting = function(){
        console.log(`welcome ${this.userName}`);
    }
    return this
}

const UserOne = new User("Ashwin Gadhvi",12);
const UserTwo = new User("Gadhvi Ashwin",7); //this will be shown when we call the user constructor if we don't write new
// console.log(UserOne);

// console.log(UserTwo.grerting());


console.log(UserOne.constructor);