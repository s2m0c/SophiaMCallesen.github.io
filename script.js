const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");

function playAudio1() {
    if(audio1.paused) {
        audio1.play();
    } else {
        audio1.pause();
    }
}

function playAudio2() {
    if(audio2.paused) {
        audio2.volume = 0.5;
        audio2.play();
    } else {
        audio2.pause();
    }
}