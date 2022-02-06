function playAudio(audioId) { 
 let statusNow = document.getElementById(audioId).paused;

    if (statusNow === true) {
        audioId.play();
    } else {
        audioId.pause();
    };
} ;

