const video = document.getElementById("video");
const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const progressBar = document.getElementById("progress")
const timestamp = document.getElementById("timestamp")
const toggleVideoPlayer = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

const updatePlayerIcon = () => {
  if (video.paused) {
    playBtn.innerHTML = `
    <i class = 'fa fa-play fa-2x'></i>
    `;
  } else {
    playBtn.innerHTML = `
    <i class = 'fa fa-pause fa-2x'></i>
    `;
  }

};

const stopVideo = () =>{
    video.currentTime = 0;
    video.pause();
}

const updateProgress = () =>{
    progressBar.value = (video.currentTime /video.duration) * 100;
    
    let mins = Math.floor(video.currentTime /60);
    if(mins < 60){
        mins = '0' + String(mins);
    }

    let sec = Math.floor(video.currentTime %60);
    if(sec < 10){
        sec = '0' + String(sec);
    }
    timestamp.innerHTML = `${mins}:${sec}`;
}

const setVideoProgress = () => {
    video.currentTime = (+progressBar.value * video.duration)/100;
};
video.addEventListener("click", toggleVideoPlayer);
video.addEventListener("pause", updatePlayerIcon);
video.addEventListener("play", updatePlayerIcon);
video.addEventListener("timeupdate", updateProgress);

playBtn.addEventListener("click",toggleVideoPlayer);
stopBtn.addEventListener("click", stopVideo);

progressBar.addEventListener("change", setVideoProgress);