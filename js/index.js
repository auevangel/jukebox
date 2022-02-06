function playAudio(audioId, buttonId) { 
  let x = audioId;
  x.play();
  let y = buttonId;
  document.getElementById(y).style.display="none";
} 

function pauseAudio(audioId, buttonId) { 
  let x=elementId;
  x.pause(); 
} 