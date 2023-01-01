let trailer = document.querySelector('.trailer');
let video = document.querySelector('video');

function toggleVideoON(){
    trailer.classList.toggle('active');
    video.play();
    video.currentTime = 0;
}

function toggleVideoOFF(){
    trailer.classList.remove('active');
    video.pause();
    video.currentTime = 0;
}