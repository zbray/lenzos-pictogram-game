$(document).ready(function(){
    
  // Needed Variables
  var wins = 0;
  var losses =0;
  var currentTotal =0;
  var redNumber= Math.floor(Math.random()*11+1);
  var greenNumber= Math.floor(Math.random()*11+1);
  var blueNumber= Math.floor(Math.random()*11+1);
  var purpleNumber= Math.floor(Math.random()*11+1);
  var randomTarget= Math.floor(Math.random()*102+18);
  
  //Displays number of wins/losses/goal with span ids in html
  $("#numWins").text(": " + wins);
  $("#numLosses").text(": " + losses);
  $(".randomTarget").text(randomTarget);
  
  //Reset Function after win or loss
  function reset(){
    currentTotal = 0;
    randomTarget= Math.floor(Math.random()*102+18);
    $(".randomTarget").text(randomTarget);
    redNumber= Math.floor(Math.random()*11+1); 
    greenNumber= Math.floor(Math.random()*11+1);
    blueNumber= Math.floor(Math.random()*11+1);
    purpleNumber= Math.floor(Math.random()*11+1);
  }
  
  //On Clicks for Each Button press and checks for win/loss
  $("#green").on("click", function(){
    currentTotal += greenNumber;
    $("#currentTotal").text(": "+ currentTotal);
    check();
  })
  
  $("#blue").on("click", function(){
    currentTotal += blueNumber;
    $("#currentTotal").text(": "+ currentTotal);
    check();
  })
  
  $("#red").on("click", function(){
    currentTotal += redNumber;
    $("#currentTotal").text(": "+ currentTotal);
    check();
  })
  
  $("#purple").on("click", function(){
    currentTotal += purpleNumber;
    $("#currentTotal").text(": "+ currentTotal);
    check();
  })
  
  //Loss and win function
  function check (){
    if (currentTotal === randomTarget){
      alert("You're the hero I've been looking for! Congratulations, the Pictograph is yours!")
      wins++;
      $("#numWins").text(": " + wins);
      reset();
    }
  
      else if (currentTotal > randomTarget){
        alert("Ah, no luck today. Ganon lives to fight another day.")
        losses++;
        $("#numLosses").text(": " + losses);
        reset();
      }
  }
});
