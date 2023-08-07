let swiper = new Swiper(".mySwiper", {
  
    effect: "coverflow",
    loop: true,
    spaceBetween:60,
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 125,
      modifier: 2,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      // type: "bullets",
    },
    // autoplay: {
    //   delay: 2000,
    // },
    breakpoints: {
      620: {
        slidesPerView: 1,
      },
      941: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 3,
      },
      1541: {
        slidesPerView: 4,
      },
    },
  });
  