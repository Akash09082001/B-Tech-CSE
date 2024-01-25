var video = document.getElementById('myVideo');
video.addEventListener('canplaythrough', function () {
    video.play();
});