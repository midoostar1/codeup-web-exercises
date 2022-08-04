var allCones = Math.floor(Math.random() * 50) + 50;


do {
    var soldCones = Math.floor(Math.random() * 5) + 1;
    if(soldCones<=allCones){console.log(`${soldCones} cones sold...`)
        allCones -= soldCones;
    }

else if(soldCones > allCones){console.log(`Cannot sell you ${soldCones} cones I only have ${allCones}... `)}

}while(allCones !==0)
console.log("Yay! I sold them all!")