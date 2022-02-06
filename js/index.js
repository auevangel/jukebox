function playAudio(audioId) { 
        let currentAudio = audioId;
        let statusNow = document.getElementById(currentAudio).paused;
        document.getElementById("selection1_playButton").setAttribute("statusText", statusNow);
};