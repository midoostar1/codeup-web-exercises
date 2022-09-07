// // $(function () {
// //     alert('The DOM has finished loading!')})
// alert($(".toop").html())
// $("ul").css("color","darkgrey").css("text-decoration","underline")
// $("body").css("background-color", "cream-white").css("font-family","Courier New").css("border","1px solid silver")
// $(".codeup").css("color","skyblue").css("border", "1px solid red")
//
// $( "#main,.toop").css("color", "blue")
// $("li").css("font-size", "20px")
// $("h1").css("font-weight", "900").css("background-color", "beige")
// $(" p").css("font-weight", "900").css("background-color", "beige")
// $("li").css("font-weight", "900").css("background-color", "beige")
//
// alert($("h1").html())
// $("li, p, h1").css("font-weight", "900").css("background-color", "beige")


var header = $("h1")
header.on("click", function () {
    header.css("background", "skyblue")
})

$("p").on("dblclick", function () {
    $(this).css("font-size", "18px")
})


$("li").mouseenter(function (){
    $(this).css("color","red")
}).mouseleave(function (){
    $(this).css("color","black")
})
