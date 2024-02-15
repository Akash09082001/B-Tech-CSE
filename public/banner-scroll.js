// Create separate instances for each scroll container
createScrollEffect('scrollContainer2', 'imageContainer2', 0.7);

function createScrollEffect(scrollContainerId, imageContainerId, scrollSpeed) {
    const scrollContainer = document.getElementById(scrollContainerId);
    const imageContainer = document.getElementById(imageContainerId);
    const images = Array.from(imageContainer.querySelectorAll('img'));

    images.forEach(image => imageContainer.appendChild(image.cloneNode(true)));

    let scrollPosition = 0;
    let isPaused = false;
    const totalWidth = images.reduce((width, img) => width + img.width, 0);

    function scrollImages() {
        if (!isPaused) {
            scrollPosition += scrollSpeed;

            if (scrollPosition >= totalWidth) {
                scrollPosition = 0; // Reset to zero when it exceeds total width
            }

            imageContainer.style.transform = `translateX(-${scrollPosition}px)`;
        }

        requestAnimationFrame(scrollImages);
    }

    scrollImages(); // Start the animation loop for this specific container
}
