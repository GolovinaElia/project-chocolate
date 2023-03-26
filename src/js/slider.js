// var swiper = new Swiper('.mySwiper', {
//   loop: true,
//   autoplay: {
//     delay: 2000,
//   },
//   keyboard: {
//     enabled: true,
//   },
//   breakpoints: {
    
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 18
//     },

//     1200: {
//       slidesPerView: 4,
//       spaceBetween: 18
//     },
//   },
//    pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//   },
// });
document.addEventListener('DOMContentLoaded', function () {
   var productsSlider = new Swiper('.products-slider', {
   loop: true,
  autoplay: {
    delay: 2000,
  },
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    
    768: {
      slidesPerView: 2,
      spaceBetween: 18
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 18
    },
  },
   pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  });
  
  var reviewsSlider = new Swiper('.reviews-slider', {
     loop: true,
  autoplay: {
    delay: 2000,
  },
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    
    768: {
      slidesPerView: 2,
      spaceBetween: 16
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 18
    },
  },
   pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  });
  productsSlider[0].controller.control = reviewsSlider;
  reviewsSlider[0].controller.control = productsSlider;
});