
function playAudio(input){
    let id;
    if (input === 1){
        id = "boing_sound";
    }
    else if(input === 2){
        id = "bubble_sound";
    }
    else if(input === 3){
        id = "cymbals_sound";
    }
    else{
        alert("There was a sound issue");
        return;
    }

    document.getElementById(id).play();
}


document.getElementById("boing").addEventListener("click", playAudio);
document.getElementById('bubbling').addEventListener("click", playAudio);
document.getElementById('cymbals').addEventListener("click", playAudio);