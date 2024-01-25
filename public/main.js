
// swiper js
var swiperOptions = {
    loop: true,
    spaceBetween: 10,
    grabCursor: false,
    slidesPerView: 4,
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
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
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

