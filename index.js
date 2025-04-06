for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        const thisButton = this.innerHTML;

        switch (thisButton) {
            case "w":
                const tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                const tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

            case "s":
                const tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                const tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case "l":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;

            default:
                console.log(this.innerHTML);
        }

        const buttonInnerHTML = this.innerHTML;
        pressButton(buttonInnerHTML);
        animation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function (event) {
    pressButton(event.key);
    animation(event.key);
});

function pressButton(key) {
    switch (key) {
        case "w":
            const tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            const tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            const tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            const tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(this.innerHTML);
    }
}

function animation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}
