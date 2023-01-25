
const hamburger = document.querySelector(".hamburger");
const navbar_menu = document.querySelector(".navbar_menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navbar_menu.classList.toggle("active")
})


const swiper = new Swiper('.swiper', {
 
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});