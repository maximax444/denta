$('.servin-qa__name').on('click', function () {
    $(this).closest('.servin-qa__block').toggleClass('active');
});
const swiper = new Swiper('.home-take-swiper', {

    slidesPerView: 1,
    spaceBetween: 0,
    
    // Navigation arrows
    navigation: {
        nextEl: '.home-why__next',
        prevEl: '.home-why__prev',
    }
});
swiper.on('transitionEnd', function() {
    $('.home-why__curr').html('0' + (1 + swiper.realIndex));
  });
  const swiper2 = new Swiper('.main .swiper', {

    slidesPerView: 1,
    spaceBetween: 0,
    
    // Navigation arrows
    navigation: {
        nextEl: '.main__next',
        prevEl: '.main__prev',
    }
});
swiper2.on('transitionEnd', function() {
    $('.main__curr').html((1 + swiper2.realIndex));
  });
  const swiper3 = new Swiper('.about-gal .swiper', {

    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    
    // Navigation arrows
    navigation: {
        nextEl: '.main__next',
        prevEl: '.main__prev',
    }
});
swiper3.on('transitionEnd', function() {
    $('.main__curr').html((1 + swiper3.realIndex));
  });