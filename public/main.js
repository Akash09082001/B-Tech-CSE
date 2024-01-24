
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