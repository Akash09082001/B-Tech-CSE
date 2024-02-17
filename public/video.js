

const playVideo = () => {
    const videoBanner = document.getElementById("videoImg");
    const myVideo = document.getElementById("myVideo");

    videoBanner.style.display = "none";
    myVideo.play();
}

const hideVideo = () => {
    const videoBanner = document.getElementById("videoImg");
    const myVideo = document.getElementById("myVideo");

    videoBanner.style.display = "block";
    myVideo.pause();
}

const checkScreenWidth = () => {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth < 786) {
        hideVideo();
    } else {
        playVideo();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth);
});


const ringVideo = document.getElementById("ringVideo");

window.addEventListener('load', () => {
    ringVideo.play();
});
