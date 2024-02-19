
// swiper js
var swiperOptions = {
    loop: true,
    spaceBetween: 8,
    grabCursor: false,
    slidesPerView: 10,
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    noSwiping: true,
    noSwipingClass: "swiper-slide",
    speed: 4000,
    freeModeMomentum: true,
    breakpoints: {
        640: {
            slidesPerView: 4,
            spaceBetween: 8,
        },
        768: {
            slidesPerView: 6,
            spaceBetween: 8,
        },
        1024: {
            slidesPerView: 8,
            spaceBetween: 8,
        },
    },
};

var swiper = new Swiper(".swiper-container", swiperOptions);


const details = document.querySelectorAll(".details");

// Add the onclick listeners.
details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
        // Close all the details that are not targetDetail.
        details.forEach((detail) => {
            if (detail !== targetDetail) {
                detail.removeAttribute("open");
            }
        });
    });
});



// image view modal
const imgModal = document.getElementById("imgModal");
const showImg = document.getElementById("showImg");
const modal = document.getElementById("modal");
const modal1 = document.getElementById("modal1");
const videoModal = document.getElementById("popup");


function showImage(src) {
    imgModal.classList.remove('hidden');
    showImg.src = src;
}
function closeImage() {
    imgModal.classList.add('hidden');
}


document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.style.display = "none";
        modal1.style.display = "none";
        imgModal.style.display = "none";
        videoModal.style.display = "none";
    }
});

function openModal() {
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}
function openModal1() {
    modal1.style.display = "block";
}
function closeModal1() {
    modal1.style.display = "none";
}

const heroSection = document.getElementById('Hero');
const floatBtn = document.getElementById('floatBtn');

// Initial check when the page loads
updateButtonVisibility();

// Listen for scroll events to dynamically update button visibility
window.addEventListener('scroll', updateButtonVisibility);

function updateButtonVisibility() {
    const isInsideHeroSection = isInHeroSection(floatBtn, heroSection);

    if (isInsideHeroSection) {
        floatBtn.style.visibility = 'hidden';
    } else {
        floatBtn.style.visibility = 'visible';
    }
}

function isInHeroSection(element, heroSection) {
    if (!heroSection) {
        // If hero section doesn't exist, return false
        return false;
    }

    // Get the position of the button and hero section
    const buttonRect = element.getBoundingClientRect();
    const heroRect = heroSection.getBoundingClientRect();

    // Check if the button is inside the hero section
    return (
        buttonRect.top >= heroRect.top &&
        buttonRect.bottom <= heroRect.bottom &&
        buttonRect.left >= heroRect.left &&
        buttonRect.right <= heroRect.right
    );
}


function openVideoModal() {
    videoModal.style.display = "block";
}

function closeVideoModal() {
    videoModal.style.display = "none";
}
