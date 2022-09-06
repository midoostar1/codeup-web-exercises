var openbtn = document.querySelector("#open-btn")
var modal = document.querySelector("#modal-container")

openbtn.addEventListener("click", function (){
    modal.style.display= "flex";
})

modal.addEventListener("click", function (){
    modal.style.display= "none";
})