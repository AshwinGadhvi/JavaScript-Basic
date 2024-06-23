let value = parseInt(prompt("Enter A Value"));

const body = document.querySelector('body');
body.style.margin="0px";
body.style.padding="0px";
body.style.overflow = "hidden";
// console.log(value);
for(let i=1;i<=value;i++)
{
    if(i%2!=0)
    {
        for(j=1;j<=value;j++)
            {
                if(j%2!=0)
                {
                    const span = document.createElement("span");
                    span.style.backgroundColor="black";
                    span.style.height="100px";
                    span.style.width="100px";
                    span.style.display="inline-block";
                    span.style.border="1px solid black";
                    body.appendChild(span);
                }
                else if(j%2===0)
                {
                    const span = document.createElement("span");
                    span.style.backgroundColor="white";
                    span.style.height="100px";
                    span.style.width="100px";
                    span.style.display="inline-block";
                    span.style.border="1px solid black";
                    body.appendChild(span);
                }
            }
    }
    else if(i%2==0)
    {
        for(j=1;j<=value;j++)
            {
                if(j%2!=0)
                {
                    const span = document.createElement("span");
                    span.style.backgroundColor="white";
                    span.style.height="100px";
                    span.style.width="100px";
                    span.style.display="inline-block";
                    span.style.border="1px solid black";
                    body.appendChild(span);
                }
                else if(j%2===0)
                {
                    const span = document.createElement("span");
                    span.style.backgroundColor="black";
                    span.style.height="100px";
                    span.style.width="100px";
                    span.style.display="inline-block";
                    span.style.border="1px solid black";
                    body.appendChild(span);
                }
            }
    }
    
    document.querySelector("body").appendChild(document.createElement("br"));
}