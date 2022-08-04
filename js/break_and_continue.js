
   //Exercise


   while(num % 2 === 0  || isNaN(num) || num < 1 || num > 50){
      var  num = Number(prompt("enter an odd number between 1 and 50"))
   }

   



       //Exercise 3

   for(i=1; i<=50; i++) {

       if (i % 2 === 0) {
           continue;
      } else if (i !== num) {
           console.log("here is an odd number: " + i)
       } else if (i === num) {
           console.log("Yikes! Skipping number: " + i)
           continue
       }
   }


