var swiper = new Swiper('.mySwiper', {
  loop: true,
  autoplay: {
    delay: 2000,
  },
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    
    768: {
      slidesPerView: 3,
      spaceBetween: 18
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 18
    },
  }
});
