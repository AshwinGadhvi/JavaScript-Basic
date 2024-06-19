const button = document.querySelectorAll('.button');
const body = document.querySelector('body');
console.log(button);

button.forEach((item)=>{
    item.addEventListener("click",function (e){
        if (e.target.id === 'blue')
        {
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'green')
        {
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'yellow')
        {
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'red')
        {
            body.style.backgroundColor = e.target.id;
        }
    });
});


const home = document.querySelector('#Home');

home.addEventListener('click',()=>{
    window.location.href = "../index.html";
})