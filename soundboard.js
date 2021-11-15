
function play(){
    alert("Got here")
    var audio = document.getElementsByClassName("audio");
    audio.play();
}


let myButton = document.querySelector('button');
myButton.addEventListener("click", play());