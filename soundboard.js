
function playAudio(){
    var sound = document.getElementById(this.childNodes[1].id);
    sound.play();
}
  
document.getElementById("boing").addEventListener("click", playAudio);
document.getElementById('bubbling').addEventListener("click", playAudio);
document.getElementById('cymbals').addEventListener("click", playAudio);