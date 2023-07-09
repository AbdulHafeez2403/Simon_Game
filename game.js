var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    // $("#"+randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//paly audio for selected button
    // var audio = new Audio("sounds/"+randomChosenColor+".mp3");
    // audio.play();
   playSound(randomChosenColor);
}


function playSound(name) {
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}



$(".btn").click(function(){
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
    // nextSequence();
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

//step 6
function animatePress(currentColor) {
    $("#"+currentColor).addClass("pressed");

    setTimeout(() => {
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}