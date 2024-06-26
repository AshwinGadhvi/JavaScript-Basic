function setUserName(username){
    this.username = username
}

function createUser(username,email,password){
    setUserName.call(this,username) //using call function we can explicitly calling the function without call this is reference
    // we use this as first parameter to pass the values to current context
    this.email = email
    this.password = password
}

const ashwin = new createUser("Ashwin","ashwingadhvi.ce@gmail.com","4323");
console.log(ashwin);