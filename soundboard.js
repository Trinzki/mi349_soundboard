
function playAudio(){
    alert("Got here")
    // var audio = document.getElementsByClassName("audio");
    // audio.play();
}


document.getElementById('boing').addEventListener("click", playAudio());
document.getElementById('bubbling').addEventListener("click", play());
let cymbalBtn = document.getElementById('cymbals');
cymbalBtn.addEventListener("click", play());