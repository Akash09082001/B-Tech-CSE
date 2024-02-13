// Create separate instances for each scroll container
createScrollEffect('scrollContainer1', 'imageContainer1', 0.7);
createScrollEffect('scrollContainer2', 'imageContainer2', 0.7);

function createScrollEffect(scrollContainerId, imageContainerId, scrollSpeed) {
    const scrollContainer = document.getElementById(scrollContainerId);
    const imageContainer = document.getElementById(imageContainerId);
    const images = Array.from(imageContainer.querySelectorAll('img'));

    const totalWidth = images.reduce((width, img) => width + img.width, 0);

    // Clone and append images for infinite loop
    images.forEach(image => {
        const clone = image.cloneNode(true);
        imageContainer.appendChild(clone);
    });

    let scrollPosition = 0;
    let isPaused = false;

    function scrollImages() {
        if (!isPaused) {
            scrollPosition += scrollSpeed;

            if (scrollPosition >= totalWidth) {
                scrollPosition -= totalWidth;
            }

            imageContainer.style.transform = `translateX(-${scrollPosition}px)`;
        }

        requestAnimationFrame(scrollImages);
    }

    scrollImages(); // Start the animation loop for this specific container
}
