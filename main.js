const mobile_nav = document.querySelector(".navtoggle");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());








// VOICE NOTE FUNCTION////////////////////////////////////////////////
var player = document.getElementById('player');
let progress = document.getElementById('progress');
let playBtn = document.getElementById('playIcon');

var playpause = function(){
    
    if(player.paused){
        player.play();
    }
    else{
        player.pause();
    }
}
playBtn.addEventListener('click', playpause);

player.onplay = function(){
    playBtn.classList.remove('uil-play');
    playBtn.classList.add('uil-pause');
}

player.onpause = function(){
    playBtn.classList.add('uil-play');
    playBtn.classList.remove('uil-pause');
}

player.ontimeupdate = function(){
let ct = player.currentTime;
current.innerHTML = timeFormat(ct);
// progress
let duration = player.duration;
prog = Math.floor((ct * 100) / duration);
progress.style.setProperty("--progress", prog + "%");

}
function timeFormat (ct) {
   minutes = Math.floor(ct / 60); 
   seconds = Math.floor(ct % 60); 

   if (seconds < 10){
       seconds = "0"+seconds;
   }
   return minutes + ":" + seconds;
}




