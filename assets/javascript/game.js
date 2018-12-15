$(document).ready(function(){
    
// Needed Variables
var wins = 0;
var losses = 0;
var currentTotal;
var redNumber= Math.floor(Math.random()*11+1);
var greenNumber= Math.floor(Math.random()*11+1);
var blueNumber= Math.floor(Math.random()*11+1);
var purpleNumber= Math.floor(Math.random()*11+1);
var randomNumber= Math.floor(Math.random()*102+18);


$("#green").on("click", function(){
alert("!")

})

$("#blue").on("click", function(){
alert("Blue!")
})

$("#red").on("click", function(){
alert("Red!")
})
$("#purple").on("click", function(){
alert("Purple!")
})



//Locks number of wins/losses to span id in html
$("#numWins").text(": " + wins);
$("#numLosses").text(": " + losses);

$(".randomNumber").text(randomNumber);

$(.green).on("click")

});