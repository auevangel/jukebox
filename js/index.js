   
   function playAudio(audioId) {
            let audioElement = document.getElementById(audioId);
            audioElement.play();
           };
    



    function pauseAudio(audioId) {
            let audioElement = document.getElementById(audioId);
            audioElement.pause();
        };

    function move(audioId, barId) {
              let durationSeconds = document.getElementById(audioId).duration;
            let totalLength = durationSeconds * 1000;
            let elem = document.getElementById(barId);
            let id = setInterval(frame, 1);
                function frame() {
                    let currentPosition = document.getElementById(audioId).currentTime;
                    let currentMicroseconds = currentPosition * 1000;
                    let rawWidth = (currentMicroseconds / totalLength) * 100;
                    let width = Math.round(rawWidth) / 100;
                    if (width >= 100) {
                            clearInterval(id);
                            i = 0;
                            } else {
                                elem.style.width = width + "%";
                            }
                    }
                }
        };