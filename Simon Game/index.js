var buttonColours = ["red", "yellow", "blue", "green"] 
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

// makes a sound and animation for the game button
function playSound(buttonID) {
    var searchString = "." + buttonID;
    $(searchString).fadeOut(150).fadeIn(150);
    var buttonAudio = new Audio ("sounds/"+buttonID+".mp3");
    buttonAudio.play();
}

// adds a new button to the game's sequence
function nextSequence () {
    // randomly choose button
    var randomNumber = Math.round(Math.random() * 3);
    var randomChosenColour = buttonColours[randomNumber];

    // store button ID
    var buttonID = "." + randomChosenColour;

    // add that button to pattern
    gamePattern.push (buttonID);

    // clear userClickedPattern
    userClickedPattern = [];

    // button animation and sound
    playSound (randomChosenColour);

    // increase level by 1 whenever new button added to sequence
    level++;
    $("h1").text("Level "+level);

    return gamePattern;
}

// detects button clicks from user
function buttonClick (event) {
    colourClass = event['target'].classList[1]

    var userChosenColour = "." + colourClass;
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);

    // button animation and sound
    playSound (colourClass);
    checkAnswer ();
}

// checks user's sequence and proceeds to next level if correct 
function checkAnswer() {
    console.log(userClickedPattern);
    console.log(gamePattern);
    // if length (user sequence < game sequence)
    if (userClickedPattern.length < gamePattern.length) {
        console.log("user pattern smaller than game pattern");

        // if correct then continue (let user click more)
        if (compareSequence(userClickedPattern.length)) {
            console.log("sequence correct");
            return;
        }
        // else game over
        else {
            console.log("sequence incorrect");
            gameOver();
        }
    }
    // else length (user sequence == game sequence)
    else if (userClickedPattern.length == gamePattern.length) {
        console.log("user pattern is same length as game pattern");

        // if correct then nextSequence()
        var isCorrect = compareSequence(userClickedPattern.length);
        console.log (isCorrect);
        if (isCorrect) {
            console.log("sequence correct");
            setTimeout(() => {
                nextSequence ();
            }, 1000); 
            return;
        }
        // else game over
        else {
            console.log("sequence incorrect");
            gameOver();
        }
    }        
}

// only compares the sequences in user pattern and game pattern up to given index 
function compareSequence(index) {
    var isCorrect = 1;

    for (let i = 0; i < userClickedPattern.length; i++) {
        if (gamePattern[i] == userClickedPattern[i]) {
            continue;
        }
        else {
            isCorrect = 0;
            break;
        }
    }

    return isCorrect;
}

// generates visual and audio effects for signifying game over
function gameOver() {
    // change header
    $("h1").text("Game Over, Press A Key To Restart");

    // play sound
    var wrongAudio = new Audio ("sounds/wrong.mp3");
    wrongAudio.play();

    // flash red background
    $("body").toggleClass("game-over");
    setTimeout(() => {
        $("body").toggleClass("game-over")
    }, 200);

    startOver();
}

// reset all game variables
function startOver() {
    level = 0;
    gamePattern = [];
}

// adding button callbacks
$(".game-button").click (buttonClick);

// adding keypress callback to start game
$("body").keypress(function () {
    $("h1").text("Level 0");
    nextSequence();
});