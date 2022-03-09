const checkbox = document.getElementById("checkbox");
const submitbtn = document.querySelector("button[type=submit]");

checkbox.checked = false;
checkbox.disabled = true;
submitbtn.disabled = true;

const elements = document.querySelectorAll(".element");
const selectcolor = document.getElementById("selectColor");

elements.forEach(function(element)
{
    const color = getRandomColor();

    element.style.backgroundColor = color;
    element.innerHTML = color;
    selectcolor.innerHTML = color;
    selectcolor.style.background = color;

});

function getRandomColor(){
    const letter = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++)
    {
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}
elements.forEach(function(element){
    element.addEventListener("click", function(){
        if(element.innerHTML === selectcolor.innerHTML)
        {
            checkbox.checked = true;
            submitbtn.disabled = false;

            submitbtn.classList.remove("btn-light");
            submitbtn.classList.add("btn-success");
        }
        else
        {
            alert("Plese varify that You are Human");
            location.reload(true);
        }
    })
});

