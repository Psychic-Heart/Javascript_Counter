
const spanEl= document.getElementById("number")
var num=0;
function increase() 
{
    num++
    spanEl.innerHTML = num
}
function decrease() 
{
    num--
    spanEl.innerHTML = num
}

