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
            imageContainer.style.transform = `translateX(-${scrollPosition}px)`;

            if (scrollPosition >= totalWidth) {
                scrollPosition = 0;
                imageContainer.style.transform = `translateX(0)`;
            }
        }

        requestAnimationFrame(scrollImages);
    }
    scrollImages();
    
}

const container1 = createScrollEffect('scrollContainer1', 'imageContainer1', 0.5);
const container2 = createScrollEffect('scrollContainer2', 'imageContainer2', 0.5);
const container3 = createScrollEffect('scrollContainer3', 'imageContainer3', 0.5);
