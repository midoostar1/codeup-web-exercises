
"use strict";

console.log("Hello from external JavaScript");
alert("Welcome to my Website! ");
var userRespond = prompt("what's your favorite color");
alert("Great, " + userRespond + " is my favorite color too");

    //EXERCISE 3A
var littleMermaid = prompt("how many days do you want to rent 'The little mermaid'");

var brotherBear = prompt("how many days do you want to rent 'Brother Bear'");
var hercules = prompt("how many days do you want to rent 'Hercules'");

var pOfLittleMermaid = littleMermaid * 3;
var pOfBrotherBear = brotherBear * 3;
var pOfHercules = hercules * 3;
alert("your total is "+ "$" +(pOfBrotherBear+pOfHercules+pOfLittleMermaid));
    //EXERCISE 3B
var googleHrs = prompt("how many hours did u work for Google");
var amazonHrs = prompt("how many hours did u work for Amazon");
var facebookHrs = prompt("how many hours did u work for Facebook");

var googlePay = googleHrs * 400;
var amazonPay = amazonHrs * 380;
var facebookPay = facebookHrs * 350;
alert("your total pay is " + (googlePay + amazonPay + facebookPay) + "$");

     //Exercise 3c
var isNotFull = confirm("click OK for Class Availabily else CANCEL");
var nonConflicting =confirm("click OK for non-confliction else CANCEL ");
var eligibility = isNotFull && nonConflicting ;
alert("Eligible for Enrolment:  " + eligibility);

   //Exercise 3d
var eligibleQuantity = confirm("click OK for more than 2 product bought else CANCEL");
var productOffer = confirm("Click Ok for unexpired offer else CANCEl");
var discount = eligibleQuantity && productOffer;
var discountStatus = alert("Discount Eligibility: "+ discount);