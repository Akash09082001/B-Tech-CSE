function createScrollEffect(scrollContainerId, imageContainerId, scrollSpeed) {
    const scrollContainer = document.getElementById(scrollContainerId);
    const imageContainer = document.getElementById(imageContainerId);
    const images = Array.from(imageContainer.querySelectorAll('img'));

    let scrollPosition = 0;
    let isPaused = false;
    const totalWidth = images.reduce((width, img) => width + img.width, 0);

    function resetImages() {
        images.forEach((image, index) => {
            image.style.transform = `translateX(${index * 100}%)`;
        });
    }

    resetImages();

    function scrollImages() {
        if (!isPaused) {
            scrollPosition += scrollSpeed;
            imageContainer.style.transform = `translateX(-${scrollPosition}px)`;

            if (scrollPosition >= totalWidth) {
                scrollPosition = 0;
                resetImages();
            }
        }

        requestAnimationFrame(scrollImages);
    }

    scrollImages();
}

const container1 = createScrollEffect('scrollContainer1', 'imageContainer1', 0.5);
const container2 = createScrollEffect('scrollContainer2', 'imageContainer2', 0.5);
const container3 = createScrollEffect('scrollContainer3', 'imageContainer3', 0.5);
