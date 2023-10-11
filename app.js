const playBtn = document.querySelector('.btn-play');
const pauseBtn = document.querySelector('.btn-pause');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const theMusic = document.querySelector('.theaudio');
const songTitle = document.querySelector('#title');
const coverImage = document.querySelector('.cover');
const btns = document.querySelector('.navigation');
const progress = document.querySelector('.progress');
const progressCont = document.querySelector('.progress-container');
const imgcont = document.querySelector('.image-container');


var music = ['EdSheeran-Happier', 'Love Yourself'];
var musicIndex = 0;
loadSong(1);

// playSong();
nextBtn.addEventListener('click', () => {
    if (musicIndex >= music.length - 1)
        musicIndex = 0;
    else
        musicIndex++;
    loadSong(musicIndex);
    playSong()
    console.log(musicIndex)
})

prevBtn.addEventListener('click', () => {
    if (musicIndex === 0)
        musicIndex = music.length - 1;
    else
        musicIndex--;
    loadSong(musicIndex);
    playSong()
        // console.log(theMusic.length)
})
theMusic.addEventListener('timeupdate', () => {
    // console.log(theMusic.currentTime)
    var durationPercent = (theMusic.currentTime / theMusic.duration) * 100
    progress.style.width = `${durationPercent}%`
})

progressCont.addEventListener('click', setProgress)
theMusic.addEventListener('ended', () => {
        musicIndex++;
        if (musicIndex >= music.length - 1) {
            musicIndex = 0;
        }

        loadSong(musicIndex);
        playSong()
        console.log(musicIndex)
    })
    // progressCont.addEventListener('click', (e) => {
    //     var clickX = e.offsetX
    //     var widdde = this.clientWidth
    //     console.log(typeof(this.clientWidth))
    // })

function setProgress(e) {
    var clickX = e.offsetX
    var width = this.clientWidth
    var duration = theMusic.duration
    theMusic.currentTime = (clickX / width) * duration
        // console.log(duration)
}

function loadSong(musicIndex) {
    theMusic.src = `music/${music[musicIndex]}.mp3`
    songTitle.innerText = music[musicIndex];
    coverImage.src = `images/milkshake.png`;
    playBtn.classList.remove('Xplay')
        // imgcont.style.animation - play - state = 'paused';

}

function playSong() {
    theMusic.play()
    playBtn.classList.add('Xplay')
    pauseBtn.classList.remove('Xpause')
    imgcont.classList.remove('Xrotate')
}

function pauseSong() {
    theMusic.pause()
    pauseBtn.classList.add('Xpause')
    playBtn.classList.remove('Xplay')
    imgcont.classList.add('Xrotate')

}
playBtn.addEventListener('click', (ev) => {

    if (!ev.currentTarget.classList.contains('Xplay')) {
        playSong();
    } else {
        pauseSong();
    }
    // console.log(ev.currentTarget.classList[1])
});

pauseBtn.addEventListener('click', (ev) => {

    if (!ev.currentTarget.classList.contains('Xpause')) {
        pauseSong();
    } else {
        playSong();
    }
    // console.log(ev.currentTarget.classList[1])
});