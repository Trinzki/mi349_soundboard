
function play(){
    var audio = document.getElementById("audio");
    audio.play();
}


let myButton = document.querySelector('button');
myButton.addEventListener("click", play());