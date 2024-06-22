// // Creation
// const promise1 = new Promise(function(resolve, reject) {
//     // Do an async task
//     // DB calls, cryptography, Networking
//     setTimeout(function() {
//         console.log("Async Task Complete");
//         resolve(); // then is directly connected with resolve so for calling then we have call resolve method.
//     }, 1000);
// });

// promise1.then(function() {
//     console.log("Promise Consumed");
// });


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task Complete 2");
        resolve();
    },1000)
}).then(function () {
    console.log("Async 2 remove");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Ashwin",email:"Op"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Ashwin",password:"4323"})
        }else{
            reject('ERROR : Something went Wrong')
        }
    },1000)
})

promise4.then((user)=>{
    return user["username"]
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The Promise Is Resolve Or Reject")
})


const promise5 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"JavaSCript",password:"4323"})
        }else{
            reject('ERROR : JavaScript went Wrong')
        }
    },1000)
})



async function consumepromise5(){
    try {
        const response = await promise5
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumepromise5()


// async function getAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }

// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{return response.json()})
.then((date)=>{console.log(date)})
.catch((error)=>{console.log(error)})