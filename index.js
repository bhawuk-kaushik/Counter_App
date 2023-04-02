let content=document.querySelector('#value');

function increment()
{
    let num = parseInt(content.innerText);
    num=num+1;
    content.innerText=num;
}

function decrement()
{
    let num = parseInt(content.innerText);
    num=num+-1;
    content.innerText=num;
}



