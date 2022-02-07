   let id; //global variable for the interval


/*PLAYAUDIO FUNCTION
Plays sound when play button is pressed and tracks the progress of the track
Both parameters below are passed from the html file.
1. audioId - id of the audio element 
2. barId - id of the progress bar element
References on the commands, methods and functions are at stated at the end of this file.*/

   function playAudio(audioId, barId) {

            
            //Related commands on obtaining and converting duration of the track to milliseconds
            //The duration is the base used to calcutate the percentage of the track played.  This then sets the width of the progress bar.
            let audioElement = document.getElementById(audioId); //gets the audioId
            let durationSeconds = audioElement.duration; //obtains duration of the track
            let durationMilliseconds = durationSeconds * 1000; // converts duration to milliseconds, used to calculate width of progress bar
            
            //Related commands on playing the sound
            audioElement.play();//plays the track

            //Related commands on stopping other tracks
            //The commands below will stop other tracks when one is playing
            let audioArray = ['selection1_audio', 'selection2_audio', 'selection3_audio'];
            let index_audioId = audioArray.indexOf(audioId);
            audioArray.splice(index_audioId, 1);
            let remainingArray = audioArray;
            remainingArray.forEach(pauseTrack);
            function pauseTrack(fullItem) {
                document.getElementById(fullItem).pause();

            };
            
            //Related commands for setting width of Progress Bar           
            id = setInterval(currentPosition, 100); // runs the currentPosition function every 100 milliseconds

            //Function obtains the current position in the track and calculate the width of progress bar
            function currentPosition() {
            let timeSeconds = audioElement.currentTime; //obtains the current position of the track
            let timeNow = timeSeconds * 1000; //converts current position into milliseconds
            let percentage = (timeNow / durationMilliseconds) * 100; //calculates the proportion of the track already played
            let barWidth = percentage + "%"; // strings the percentage and percent sign
            document.getElementById(barId).style.width = barWidth; //the width of the progress bar gets set by the current proportion
                    if (percentage >= 100) { //test if 100% or more has been played. Test is passed if 100% or more has been played.
                            clearInterval(id); //if test is passed, execution of function is stopped & interval reset to zero
                            audioElement.currentTime = 0; //if test is passed, the track is set to the starting position
                            document.getElementById(barId).style.width = "1%"; //if test is passed, the width of the bar resets to 1%
                        };
            };


        };   

/* PAUSEAUDIO FUNCTION
Stops sound when pause button is pressed
audioId - id of the audio element.  This parameter gets passed from the html file.
References on the commands, methods and functions are at stated at the end of this file.
*/
    function pauseAudio(audioId) {
            let audioElement = document.getElementById(audioId);
            audioElement.pause(); //stops the sound
            clearInterval(id); //clears the interval to stop checking current position for the progress bar
        };


/* ADJUSTVOLUME FUNCTION
Adjusts the volume of the sound
References on the commands, methods and functions are at stated at the end of this file
*/
    function adjustVolume(sliderId, audioId) {
            let volumeValue = document.getElementById(sliderId).value; //gets the value where the user dragged the volume slider
            let convertValue = volumeValue / 100; // audio volume ranges from 0 to 1.  This converts the dragged value to this convention.
            let audioElement = document.getElementById(audioId); //creates a variable assigning the id of the <audio> element
            audioElement.volume = convertValue;//set the volume of the music to the converted value
    }


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("track-selection");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


/*
REFERENCES

RELATED FUNCTION: playAudio(audioId, barId)
Topic - Duration Property
        The links below demonstrate how to obtain the duration of an audio track in seconds
    (a) https://www.w3schools.com/tags/av_prop_duration.asp
    (b) https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_av_prop_duration

Topic - Play and pause method for Audio
        The links below demonstrate the use of the play and pause method for audio files
    (a) https://www.w3schools.com/jsref/met_audio_play.asp
    (b) https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play

Topic - Progress bar
        The commands to create the progress bar were copied from the links below.
    (a) https://www.w3schools.com/howto/howto_js_progressbar.asp;
    (b) https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_progressbar_label_js

Topic - Clear Interval Method
        The clearInterval() method in conjunction with setInterval() are explained in the links below.
    (a) Definition - https://www.w3schools.com/jsref/met_win_clearinterval.asp
    (b) https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_clearinterval

Topic - Current Time Property
        The currentTime property of an audio file are demonstrated below.
    (a) https://www.w3schools.com/tags/av_prop_currenttime.asp
    (b) https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_av_prop_currenttime



RELATED FUNCTION: pauseAudio(audioId)
Topic - Play and pause method for Audio
        The links below demonstrate the use of the play and pause method for audio files
    (a) https://www.w3schools.com/jsref/met_audio_play.asp
    (b) https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play

Topic - Clear Interval Method
        The clearInterval() method in conjunction with setInterval() are explained in the links below.
    (a) Definition - https://www.w3schools.com/jsref/met_win_clearinterval.asp
    (b) https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_clearinterval



RELATED FUNCTION: adjustVolume(sliderId, audioId)
Topic - Obtaining value from a slider
    (a) https://www.codegrepper.com/code-examples/javascript/how+to+get+range+slider+value+in+javascript

Topic - On change function
    (a) https://www.w3schools.com/jsref/event_onchange.asp

Topic - Volume property
    (a) https://www.w3schools.com/tags/av_prop_volume.asp
    (b) https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_av_prop_volume

*/

