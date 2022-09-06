var allBtn = document.getElementsByClassName("btn")
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

allBtn.
forEach((item)=>{
   item.style.backgroundColor = "black"
})