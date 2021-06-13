// alert("Hello");\

// document.querySelector("button").addEventListener("click", handleClick);

var x = document.querySelectorAll("button.drum");

for (var i = 0; i < x.length; i++){
    x[i].addEventListener("click", handleClick);
}

document.addEventListener("keypress", handleKeyboard);

// for keyboard handling
function handleKeyboard (event) {
    console.log(event);
    checkKey(event.key);
    buttonAnimation (event.key);
}

// for mouse handling
function handleClick() {
    // alert ("I was clicked")'
    checkKey(this.textContent);
    buttonAnimation(this.textContent);
}


// making da sound
function checkKey(buttonName) {
    switch (buttonName) {
        case "w":
            var drumAudio = new Audio ("sounds/tom-1.mp3");
            drumAudio.play();
            break;

        case "a":
            var drumAudio = new Audio ("sounds/tom-2.mp3");
            drumAudio.play();
            break;

        case "s":
            var drumAudio = new Audio ("sounds/tom-3.mp3");
            drumAudio.play();
            break;

        case "d":
            var drumAudio = new Audio ("sounds/tom-4.mp3");
            drumAudio.play();
            break;

        case "j":
            var drumAudio = new Audio ("sounds/snare.mp3");
            drumAudio.play();
            break;

        case "k":
            var drumAudio = new Audio ("sounds/crash.mp3");
            drumAudio.play();
            break;

        case "l":
            var drumAudio = new Audio ("sounds/kick-bass.mp3");
            drumAudio.play();
            break;
    
        default:
            break;
    }
}

function buttonAnimation (key) {
    var activeButton = document.querySelector("."+key);
    console.log (activeButton.innerHTML)

    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove ("pressed");
    }, 150);
}