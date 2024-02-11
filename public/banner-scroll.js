function createScrollEffect(scrollContainerId, imageContainerId, scrollSpeed) {
    const scrollContainer = document.getElementById(scrollContainerId);
    const imageContainer = document.getElementById(imageContainerId);
    const images = imageContainer.querySelectorAll('img');

    images.forEach((image, index) => {
        const clonedImage = image.cloneNode(true);
        imageContainer.appendChild(clonedImage);
    });

    let scrollPosition = 0;
    let isPaused = false;
    const totalWidth = Array.from(images).reduce((width, img) => width + img.width, 0);

    function scrollImages() {
        if (!isPaused) {
            scrollPosition += scrollSpeed;

            if (scrollPosition >= totalWidth) {
                scrollPosition -= totalWidth; // Adjust the scroll position for a seamless loop
            }

            imageContainer.style.transform = `translateX(-${scrollPosition}px)`;
        }

        requestAnimationFrame(scrollImages);
    }

    // Start the animation loop for this specific container
    scrollImages();
}

// Create separate instances for each scroll container
const container1 = createScrollEffect('scrollContainer1', 'imageContainer1', 0.7);
const container2 = createScrollEffect('scrollContainer2', 'imageContainer2', 0.7);
