

// const playVideo = () => {
//     const videoBanner = document.getElementById("videoImg");
//     const myVideo = document.getElementById("myVideo");

//     videoBanner.style.display = "none";
//     myVideo.play();
// }

// const hideVideo = () => {
//     const videoBanner = document.getElementById("videoImg");
//     const myVideo = document.getElementById("myVideo");

//     videoBanner.style.display = "block";
//     myVideo.pause();
// }

// const checkScreenWidth = () => {
//     const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

//     if (screenWidth < 786) {
//         hideVideo();
//     } else {
//         playVideo();
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     checkScreenWidth();

//     window.addEventListener('resize', checkScreenWidth);
// });

document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('myVideo');
    var isiPhone = /iPhone/i.test(navigator.userAgent);

    // Show poster initially
    video.setAttribute('poster', 'assets/video/video-banner.webp');

    // Autoplay video only if not on iPhone
    if (!isiPhone) {
        video.autoplay = true;
    }

    // Hide poster when video starts playing
    video.addEventListener('play', function () {
        video.removeAttribute('poster');
    });

    // Handle play on click for iPhone
    if (isiPhone) {
        video.addEventListener('click', function () {
            video.play();
        });
    }
});


const ringVideo = document.getElementById("ringVideo");

window.addEventListener('load', () => {
    ringVideo.play();
});
