
var numberOfDrum = document.querySelectorAll(".drum").length;
var i = 0;


while (i < numberOfDrum) {


    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonClicked = this.innerHTML;
        makeSound(buttonClicked);
        activeButtonStyle(buttonClicked);
    });

    i++;
}

document.addEventListener("keypress", function (event) {
    var keypressed = event.key;
    makeSound(keypressed);
    activeButtonStyle(keypressed);
});

function makeSound(keypressed) {
    switch (keypressed) {
        case "w":
            var audioTom1 = new Audio("sounds/tom-1.mp3");
            audioTom1.play();
            break;
        case "a":
            var audioTom1 = new Audio("sounds/tom-2.mp3");
            audioTom1.play();
            break;
        case "s":
            var audioTom1 = new Audio("sounds/tom-3.mp3");
            audioTom1.play();
            break;
        case "d":
            var audioTom1 = new Audio("sounds/tom-4.mp3");
            audioTom1.play();
            break;
        case "j":
            var audioTom1 = new Audio("sounds/crash.mp3");
            audioTom1.play();
            break;
        case "k":
            var audioTom1 = new Audio("sounds/kick-bass.mp3");
            audioTom1.play();
            break;
        case "l":
            var audioTom1 = new Audio("sounds/snare.mp3");
            audioTom1.play();
            break;

        default: console.log(buttonClicked);
    }
}


function activeButtonStyle(activeButton) {
    var actKey = document.querySelector("." + activeButton);
    actKey.classList.add("pressed");

    setTimeout(function () {
        actKey.classList.remove("pressed");
    }, 100);
}
//var audioTom1 = new Audio("sounds/tom-1.mp3");
//audioTom1.play();