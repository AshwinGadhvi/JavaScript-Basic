let myName = "Ashwin     "

console.log(myName.length);

let myHero = ["thor","SpiderMan"];

let heroPower = {
    thor:"Hammer",
    SpiderMan: "SpiderWeb",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.SpiderMan}`);
    }
}

Object.prototype.ashwin = function(){
    console.log(`Ashwin Is present in All Objects`); //adding An global Level Object and adding ashwin prototype in all created object
}

// heroPower.ashwin()

Array.prototype.HeyAshwin = function(){
    console.log(`Ashwin Is Op`);
}

// myHero.HeyAshwin()

// heroPower.HeyAshwin()
const User = {
    name: "Ashwin",
    email: "ashwin.ce@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//Modern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName = "Ashwin       "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUserName.trueLength()
"gadhvi".trueLength();
"op  ".trueLength();