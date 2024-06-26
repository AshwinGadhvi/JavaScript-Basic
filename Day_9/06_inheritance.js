class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,pass){
        super(username);
        this.email = email
        this.pass = pass
    }

    addCourse(){
        console.log(`new course added ${this.username}`);
    }
}

const ashwin = new Teacher("Ashwin","ashwin.ce@gmail.com",4323);

ashwin.addCourse();

const gadhvi = new User("ashwin");

gadhvi.logMe();

console.log(ashwin instanceof Teacher);