var allBtn = document.getElementsByClassName("btn")
var undo = document.getElementById("undo")
var btnGreen = document.getElementById("green")
var btnBlue = document.getElementById("blue")
var btnRed = document.getElementById("red")


function changeColor(input, color){
    input.style.backgroundColor = "color"
}

btnGreen.addEventListener("click", function (){
    btnGreen.style.backgroundColor = "green"
})

btnBlue.addEventListener("click", function (){
    btnBlue.style.backgroundColor = "blue"
})

btnRed.addEventListener("click", function (){
    btnRed.style.backgroundColor = "red"
})


undo.addEventListener("click", function (){
    for (i=0; i<allBtn.length; i++){
        allBtn[i].style.backgroundColor = "black";
    }
})


