
function playAudio(){
    var audio = document.getElementsByClassName("audio");
    audio.play();
}


document.getElementById("boing").addEventListener("click", playAudio);
document.getElementById('bubbling').addEventListener("click", playAudio);
document.getElementById('cymbals').addEventListener("click", playAudio);