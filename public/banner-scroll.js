const scrollContainer = document.getElementById('scrollContainer');
const imageContainer = document.getElementById('imageContainer');
const originalImage = imageContainer.querySelector('img');

const clonedImage = originalImage.cloneNode(true);
imageContainer.appendChild(clonedImage);

let scrollSpeed = 0.5;
let scrollPosition = 0;
let isPaused = false;

function scrollImages() {
    if (!isPaused) {
        scrollPosition += scrollSpeed;
        imageContainer.style.transform = `translateX(-${scrollPosition}px)`;

        if (scrollPosition >= originalImage.width) {
            scrollPosition = 0;
            imageContainer.style.transform = `translateX(0)`;
        }
    }

    requestAnimationFrame(scrollImages);
}

function pauseScroll() {
    isPaused = true;
}

function resumeScroll() {
    isPaused = false; 
}

scrollImages();