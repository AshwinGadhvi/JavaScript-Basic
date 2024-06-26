class User{
    constructor(email,pass){
        this.email =email
        this.pass= pass
    }
    get pass(){
        return `${this._pass.toUpperCase()}Ashwin`; // new syntax 
    }
    set pass(value){
        this._pass = value.toUpperCase();
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value.toUpperCase();
    }

}
// _variable means private variable

//using getter we can give diffrent value and using setter we can set the values

const ashwin = new User("ashwin@gmail.com","123");
console.log(ashwin["pass"]);