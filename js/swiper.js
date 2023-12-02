var swiper = new Swiper(".box_content", {
      slidesPerView: 'auto',
      spaceBetween: 25,
      centeredSlides: true,
      loop: true,
      loopedSlides: 7,
      centerSlide: 'true',
      fade: 'true',
      grabCursor: 'true',
      watchSlidesVisibility: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

