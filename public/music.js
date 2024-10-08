const musicContainer = document.getElementById('music-container');

const playBtn= document.getElementById('play');
const prevBtn= document.getElementById('prev');
const nextBtn= document.getElementById('next');

const audio= document.getElementById('audio');
const progress= document.getElementById('progress');
const progressContainer= document.getElementById('progresscontainer');
const title= document.getElementById('title');
const cover= document.getElementById('cover');

//song titles
const songs= ['track1','track2'];

//keep track of songs
let songIndex = 0;

//load song details into DOM
loadSong(songs[songIndex]);

//Update song details
function loadSong(song){
    title.innerText= song;
    audio.src= `music/${song}.mp3`;
    cover.src= `img/${song}.jpg`;
}

//Play Song

function playSong(){
    musicContainer.classList.add("play");
    playBtn.querySelector("i.fas").classList.remove("fa-play");
    playBtn.querySelector("i.fas").classList.add("fa-pause");

    audio.play();
}

//Pause song
function pauseSong(){
    musicContainer.classList.remove("play");
    playBtn.querySelector("i.fas").classList.add("fa-play");
    playBtn.querySelector("i.fas").classList.remove("fa-pause");

    audio.pause();
}

//previous Song
function prevSong(){
    songIndex--;
    if(songIndex < 0){
        songIndex= songs.length -1;
    }
    loadSong(songs[songIndex]);
    
    playSong();
}

//next song
function nextSong(){
    songIndex++;
    if(songIndex > songs.length -1){
        songIndex= 0;
    }
    loadSong(songs[songIndex]);
    
    playSong();
}

//Update progress bar
function updateProgress(e){
    const{ duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

//set progress bar
function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime= (clickX / width) * duration;
}


//Event Listener
playBtn.addEventListener("click",()=>{
    const isPlaying = musicContainer.classList.contains("play");

    if (isPlaying) {
        pauseSong();
    }else{
        playSong();
    }
});

//Change songs
prevBtn.addEventListener("click",prevSong);
nextBtn.addEventListener("click",nextSong);

//Time&Song update
audio.addEventListener("timeupdate",updateProgress);

//Click on progress bar
progressContainer.addEventListener("click", setProgress);

//song Ends
audio.addEventListener("ended", nextSong);
