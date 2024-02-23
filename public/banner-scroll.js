function createScrollEffect(scrollContainerId, imageContainerId, scrollSpeed) {
    const scrollContainer = document.getElementById(scrollContainerId);
    const imageContainer = document.getElementById(imageContainerId);
    const images = Array.from(imageContainer.querySelectorAll('img'));

    // Create a sequence of cloned images
    const clonedImages = images.map(img => {
        const clone = img.cloneNode(true);
        imageContainer.appendChild(clone);
        return clone;
    });

    let scrollPosition = 0;
    let isPaused = false;

    function scrollImages() {
        if (!isPaused) {
            scrollPosition += scrollSpeed;

            // Reset scroll position if it exceeds the total width of the sequence
            if (scrollPosition >= images.reduce((width, img) => width + img.width, 0)) {
                scrollPosition = 0;
            }

            imageContainer.style.transform = `translateX(-${scrollPosition}px)`;
        }

        requestAnimationFrame(scrollImages);
    }

    scrollImages(); // Start the animation loop for this specific container
}

// Create separate instances for each scroll container
createScrollEffect('scrollContainer1', 'indsutryContainer1', .7);
createScrollEffect('scrollContainer2', 'indsutryContainer2', .6);
