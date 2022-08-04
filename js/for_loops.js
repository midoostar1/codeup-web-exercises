    //Exercise 2

function showMultiplicationTable(num){
    for( var i = 1; i <= 10; i++){
console.log(num +" * "+ i + " = "+ (num * i))
    }
}
showMultiplicationTable(7)


    // Exercise 3

for(var i = 1; i <= 10; i++) {
    var  random = Math.floor(Math.random() * 180) + 20;
   if(random % 2 ===0){console.log(random + " is even")}
   else if(random % 2 !==0) {console.log(random + " is odd")       }
}

//exercise 4
for(var i=1; i<10; i++){
   console.log(i.toString().repeat(i))   //used the .repeat method (took a while to figure that)
}

     //Exercise 4
    for (i = 100; i >= 5; i-=5){
        console.log(i)
    }