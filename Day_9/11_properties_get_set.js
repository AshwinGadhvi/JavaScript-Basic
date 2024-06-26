function User(email,pass){
    this._email = email
    this._pass = pass

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this._email =email
        }
    })

    Object.defineProperty(this,'pass',{
        get: function(){
            return this._pass.toUpperCase()
        },
        set:function(value){
            this._pass =email
        }
    })
}

const ashwin = new User("ashwin@gmail.com","ashwin");
console.log(ashwin["email"])