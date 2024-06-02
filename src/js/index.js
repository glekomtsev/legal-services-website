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

//accordeon
const serviceTitles = document.querySelectorAll("[data-name='service-title']");

serviceTitles.forEach(function(item) {
  item.addEventListener("click", function() {
    this.nextElementSibling.classList.toggle("none");
  });
});

//modal registration
const modalRegistrationBtn = document.querySelector(
  "[data-modal-register-btn]"
);
modalRegistrationBtn.addEventListener("click", function() {
  const modalRegisterHtml = document.querySelector(
    "[data-modal-register-html]"
  );

  modalRegisterHtml.classList.remove("none");
});

const modalCloseRegistrationBtn = document.querySelector(
  "[data-modal-close-register-btn]"
);

modalCloseRegistrationBtn.addEventListener("click", function() {
  const modalRegisterHtml = document.querySelector(
    "[data-modal-register-html]"
  );

  modalRegisterHtml.classList.add("none");
});

//input phone
document.addEventListener("DOMContentLoaded", () => {
  const phoneInput = document.getElementById("phone");

  phoneInput.addEventListener("input", () => {
    let value = phoneInput.value.replace(/\D/g, "");
    let formattedValue = "+7";

    if (value.length > 1) {
      formattedValue += " " + value.substring(1, 4);
    }
    if (value.length >= 4) {
      formattedValue += " " + value.substring(4, 7);
    }
    if (value.length >= 7) {
      formattedValue += " " + value.substring(7, 9);
    }
    if (value.length >= 9) {
      formattedValue += " " + value.substring(9, 11);
    }

    phoneInput.value = formattedValue.trim();
  });

  phoneInput.addEventListener("keydown", (event) => {
    if (event.key === "Backspace") {
      let value = phoneInput.value;
      if (value.endsWith(" ")) {
        phoneInput.value = value.slice(0, -1);
        event.preventDefault();
      }
    }
  });

  phoneInput.addEventListener("blur", () => {
    const pattern = new RegExp(phoneInput.getAttribute("pattern"));
    const errorMessage = document.getElementById("phone-error");
    if (!pattern.test(phoneInput.value)) {
      phoneInput.classList.add("invalid");
      errorMessage.style.display = "block";
    } else {
      phoneInput.classList.remove("invalid");
      errorMessage.style.display = "none";
    }
  });
});
