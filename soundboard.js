
function playAudio(){
    let id;
    if (this === "boing"){
        id = "boing_sound";
    }
    else if(this === "bubbling"){
        id = "bubble_sound";
    }
    else if(this === "cymbals"){
        id = "cymbals_sound";
    }
    else{
        alert("There was a sound issue");
        return;
    }

    var sound = document.getElementById(id)
    alert(id);  // For Debugging and making sure the function 
                // is called with the right id
    sound.play();
}


document.getElementById("boing").addEventListener("click", playAudio);
document.getElementById('bubbling').addEventListener("click", playAudio);
document.getElementById('cymbals').addEventListener("click", playAudio);