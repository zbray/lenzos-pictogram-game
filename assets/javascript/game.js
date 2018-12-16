$(document).ready(function(){
    
// Needed Variables
var wins = 0;
var losses = 0;
var currentTotal = 0;
var redNumber= Math.floor(Math.random()*11+1);
var greenNumber= Math.floor(Math.random()*11+1);
var blueNumber= Math.floor(Math.random()*11+1);
var purpleNumber= Math.floor(Math.random()*11+1);
var randomNumber= Math.floor(Math.random()*102+18);



//On Clicks for Each Button 
$("#green").on("click", function(){
alert("Green!");
})

$("#blue").on("click", function(){
alert("Blue!");
})

$("#red").on("click", function(){
alert("Red!");
})
$("#purple").on("click", function(){
alert("Purple!");
})


//Displays number of wins/losses/goal with span ids in html
$("#numWins").text(": " + wins);
$("#numLosses").text(": " + losses);
$("#currentTotal").text(": " + currentTotal);



//Resets Game after win or loss
function reset() {
    currentTotal=0;


}
//Loss and win functions
function lossfunct(){
    alert("Ah no luck today. Ganon lives to fight another day.")
    losses++;
    reset();
}

function winfunc(){
    alert("You're the hero I've been looking for! Congratulations, the Pictograph is yours!")
    wins++;
    reset();
}


});