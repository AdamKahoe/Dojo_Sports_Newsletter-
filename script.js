console.log("JavaScript file is connected")

function display() {
    document.getElementById("box_3").style.display = 'none';
    document.getElementById("never").style.display = 'none';
    document.getElementById("disappear").style.display = 'none';
}

const button = document.getElementById("hide");
    const hideWhenClick = document.querySelector(".hideWhenClick");
    button.addEventListener("click", ()=>{
    hideWhenClick.style.visibility ="hidden";
    });

let numCount = 319
let ninjascore1 = document.querySelector(".ninjascore")
function add() {
    numCount++
    ninjascore.innerText = numCount
}