var testimonialThumbs = new Swiper(".clients__img", {
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    freeMode: true,
    autoplay: true,
    loop: true,
    speed: 3000
  });
  var testimonialContent = new Swiper(".clients__detail", {
    spaceBetween: 10,
    autoplay: true,
    loop: true,
    speed: 3000,
    thumbs: {
      swiper: testimonialThumbs
    },
    pagination: {
      el: ".clients__dots",
      clickable: true
    }
  });