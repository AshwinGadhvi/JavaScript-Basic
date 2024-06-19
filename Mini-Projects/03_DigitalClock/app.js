const time = document.querySelector('#time');

setInterval(()=>{
    let date = new Date();
    time.innerHTML = `<h1>${date.toLocaleTimeString()}</h1>`;
    
},1000)
