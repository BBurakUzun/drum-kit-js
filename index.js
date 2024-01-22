var sounds = {
    w: "sounds/tom-1.mp3",
    a: "sounds/tom-2.mp3",
    s: "sounds/tom-3.mp3",
    d: "sounds/tom-4.mp3",
    j: "sounds/crash.mp3",
    k: "sounds/kick-bass.mp3",
    l: "sounds/snare.mp3",
};

document.querySelectorAll("button").forEach((element) =>
    element.addEventListener("click", function (event) {
        var buttonInnerHTML = this.innerHTML;

        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
);

document.addEventListener("keydown", function (event) {
    var buttonInnerHTML = event.key;
    
    playSound(event.key);
    buttonAnimation(buttonInnerHTML);
});

function playSound(pressedKey) {
    if (pressedKey in sounds) {
        var audio = new Audio(sounds[pressedKey]);
        audio.play();
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    console.log(activeButton.classList);
    activeButton.classList.add("pressed");
    
    setTimeout(function () {activeButton.classList.remove("pressed")}, 100);
}
