// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const swiperServices = new Swiper(".swiper-services", {
  slidesPerView: "auto",
  spaceBetween: 24,
});

const swiperLawyers = new Swiper(".swiper-lawyer", {
  slidesPerView: "auto",
  spaceBetween: 24,
});

const swiperReviews = new Swiper(".swiper-reviews", {
  slidesPerView: "auto",
  spaceBetween: 24,

  navigation: {
    nextEl: ".reviews__right-spwipe",
    prevEl: ".reviews__left-spwipe",
  },
});

// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();
