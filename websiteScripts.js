
  function stopmusic() {
    var y = document.getElementsByTagName('audio');
    for(var j=0; j<y.length; j++) {
      y[j].pause();} }
  		
  function playsong() {
    var y = document.getElementsByTagName('audio');
    for(var j=0; j<y.length; j++) {
      y[j].pause();}
    var songvalue = event.target.value;
    document.getElementsByTagName('audio')[songvalue].currentTime = 0;
    document.getElementsByTagName('audio')[songvalue].play();}
