let number = document.querySelectorAll(".drum").length;
for (let i = 0; i < number; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
       makeSound(this.innerHTML);
       buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", (e) => {
    makeSound(e.key);
    buttonAnimation(e.key);
});

function makeSound (key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
    }
}

function buttonAnimation (key){
    let pressedButton = document.querySelector("."+key);
    pressedButton.classList.add("pressed");
    setTimeout( function (){ pressedButton.classList.remove("pressed")}, 100);;
}

let year = new Date();
document.getElementById("Year").innerHTML = year.getFullYear();