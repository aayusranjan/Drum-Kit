
var n = document.querySelectorAll(".drum").length;

for ( var i = 0; i<n ; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        console.log(this.addEventListener("click", function(){
            var buttonInnerHTML = this.innerHTML;

            switch (buttonInnerHTML) {
                case "w":
                    var tom4 = new tom4("sounds/tom-4.mp3");
                    tom4.play();
                    break;
                case "a":
                    var tom3 = new tom3("sounds/tom-3.mp3");
                    tom3.play();
                    break;
                case "s":
                    var tom2 = new tom2("sounds/tom-2.mp3");
                    tom2.play();
                    break;
                case "d":
                    var tom1 = new tom1("sounds/tom-1.mp3");
                    tom1.play();
                    break;
                case "j":
                    var snare = new snare("sounds/snare.mp3");
                    snare.play();
                    break;
                case "k":
                    var kickBass = new kickBass("sounds/kick-bass.mp3");
                    kickBass.play();
                    break;
                case "l":
                    var crash = new crash("sounds/crash.mp3");
                    crash.play();
                    break;
                
            }
        }));
    });
}








// var audio = new Audio("sounds/crash.mp3");

// audio.play();
