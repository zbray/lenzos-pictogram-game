$(document).ready(function(){
    
// Needed Variables
var wins = 0;
var losses = 0;
var currentTotal;
var redNumber= Math.floor(Math.random()*11+1);
var greenNumber= Math.floor(Math.random()*11+1);
var blueNumber= Math.floor(Math.random()*11+1);
var purpleNumber= Math.floor(Math.random()*11+1);
var randomTarget= Math.floor(Math.random()*102+18);



//On Clicks for Each Button
//Includes win/loss check
$("#green").on("click", function(){
    alert("Green!");
    currentTotal =+ greenNumber;
    $("#currentTotal").text(" " + currentTotal);
    alert(greenNumber);
    alert(currentTotal);
})

$("#blue").on("click", function(){
    alert("Blue!");
    currentTotal =+ blueNumber;
    $("#currentTotal").text(" " + currentTotal);
    alert(greenNumber);
    alert(currentTotal);
})

$("#red").on("click", function(){
    alert("Red!");
    $("#currentTotal").text(" " + currentTotal);
    alert(redNumber);
    alert(currentTotal);
})

$("#purple").on("click", function(){
    alert("Purple!");
    $("#currentTotal").text(" " + currentTotal);
    alert(purpleNumber);
    alert(currentTotal);
})


//Displays number of wins/losses/goal with span ids in html
$("#numWins").text(": " + wins);
$("#numLosses").text(": " + losses);
$(".randomTarget").text(randomTarget);


//runs Game after win or loss and at webpage open
// function runGame() {
//     currentTotal=0;
// }
//Loss and win functions
function gameLoss(){
    alert("Ah no luck today. Ganon lives to fight another day.")
    losses++;
    runGame();
}

function gameWin(){
    alert("You're the hero I've been looking for! Congratulations, the Pictograph is yours!")
    wins++;
    rungGame();
}


});