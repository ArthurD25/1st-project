"use strict";
let myResult
let vacation;
let entChoice;
let resChoice;
let transChoice;
let newChoice;
let desChoice;
let dayTrip;
let destination = ["Hawaii", "Paris", "Dubai", "Bora Bora", "Japan"];
let entertainment = ["Tour", "Dancing", "Fair", "Cruise", "Concert" ];
let restaurant = ["Chinese Restaurant", "Italian Restaurant", "Steak Restaurant", "Greek Restaurant", "Sushi Restaurant"];
let transportation = ["Private Jet", "Boat trip", "Helicopter Rides", "Limo Ride"];
dayTrip = prompt("Would you like a trip randomly selected for you")
if(dayTrip === "Yes" || dayTrip === "yes"){
    let myResult =randGenerator(destination)  +  ","  +  " " + randGenerator(entertainment)  +  "," + " " + randGenerator(restaurant)  + "," + " " + randGenerator(transportation)  +  " is your trip!" ;
    alert(myResult)
    console.log(myResult)} 
desChoice = prompt("Are you satisfied with your destination?");
if(desChoice === "no" || desChoice === "No")
do{let myResult =randGenerator(destination) + "!"
    alert(myResult) 
    console.log(myResult)
newChoice = prompt("Are you satisfied with your new choice!")}
while(newChoice === "no" || newChoice === "No")
 if(newChoice === "yes" || newChoice ==="Yes")
    alert("Good Choice!");

entChoice = prompt("Are you satisfied with your choice of entertainment!");
if(entChoice === "no" || entChoice === "No")
do{let myResult = randGenerator(entertainment);
    alert(myResult)
    console.log(myResult)
newChoice = prompt("Are you satisfied with your new choice!")}
while(newChoice === "no" || newChoice === "No")
if(newChoice === "yes" || newChoice === "Yes")
    alert("Good Choice!");
resChoice = prompt("Are you satisfied with your type of restaurant!");
if(resChoice === "no" || resChoice === "No")
do{let myResult = randGenerator(restaurant)
    alert(myResult)
    console.log(myResult)
newChoice = prompt("Are you satisfied with your new choice!")}
while(newChoice === "no" || newChoice === "No")
if(newChoice === "yes" || newChoice === "Yes")
    alert("Good Choice");
transChoice = prompt("Are you satisfied with the transportation!");
if(transChoice === "no" || transChoice === "No")
do{let myResult =randGenerator(transportation)
    alert(myResult)
    console.log(myResult)
newChoice = prompt("Are you satisfied with your new choice!")}
while(newChoice === "no" || newChoice === "No")
if(newChoice === "yes" || newChoice === "Yes")
    alert("Good Choice!");  
vacation = prompt("If satisfied with all selections write yes to confirm the completion of your trip ");
 


function randGenerator(arr){
    let choices;
    choices = Math.floor((Math.random() * arr.length) );
    return arr[choices];


}
