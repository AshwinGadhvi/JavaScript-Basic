class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`userName : ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const ashwin = new User("ashiwn");
// console.log(ashwin.createId());

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("Ashwin","i@gmail.com");

iphone.logMe();
console.log(iphone.createId()); // obviously static member and member function can't get access by child class

