let swiper = new Swiper(".mySwiper", {
  
    effect: "coverflow",
    loop: true,
    slidesPerView: 4,
    spaceBetween: 50,
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
    // autoplay: {
    //   delay: 2000,
    // },
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      620: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 4,
      },
    },
  });
  