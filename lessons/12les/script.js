const myVideo = document.querySelector('.video');
const myPlayBtn = document.querySelector('.play');
const myPauseBtn = document.querySelector('.pause');
const myVolumeBtn = document.querySelector('.volume');
const myTiming = document.querySelector('.timingVideo');
const myVolume = document.querySelector('.volumeVideo');

document.addEventListener('DOMContentLoaded', (e) => {
    myVolume.value = 0.8;
});

myPlayBtn.addEventListener('click', (e) => {
    myVideo.play();
});

myPauseBtn.addEventListener('click', (e) => {
    myVideo.pause();
});

myVolume.addEventListener('input', (e) => {
    myVideo.volume = myVolume.value;
});


myVideo.addEventListener('timeupdate', (e) => {
    myTiming.value = myVideo.currentTime / myVideo.duration * 100;
});

myTiming.addEventListener('input', (e) => {
    myVideo.currentTime = myTiming.value / 100 * myVideo.duration;
});