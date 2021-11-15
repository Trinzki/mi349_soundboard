
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

    var sound = document.getElementById(id)
    alert(id);
    sound.play();
}


document.getElementById("boing").addEventListener("click", playAudio(1));
document.getElementById('bubbling').addEventListener("click", playAudio(2));
document.getElementById('cymbals').addEventListener("click", playAudio(3));