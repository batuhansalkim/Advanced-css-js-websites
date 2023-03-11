//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .

//5. At the top of the game.js file, create a new empty array called gamePattern.

//1. Inside game.js create a new function called nextSequence()


//2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber

//4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.

//6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.

//7. Use jQuery to select the button with the same id as the randomChosenColour
//Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.

//8. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.

//9. At the top of the game.js file, create a new empty array with the name userClickedPattern.

//10. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.

//11. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.

//12. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern

var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];

var userClickedPattern = [];

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
})


function nextSequence(){

  var randomNumber = math.floor(Math.random()* 4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}



  


