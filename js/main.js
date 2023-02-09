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
swiper.on('transitionEnd', function () {
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
swiper2.on('transitionEnd', function () {
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
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 0,
        }
    }
});
swiper3.on('transitionEnd', function () {
    $('.main__curr').html((1 + swiper3.realIndex));
});
$('.home-take__select-top').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.home-take__select').toggleClass('active');
});
$('.home-take__select-drop a').on('click', function (e) {
    e.preventDefault();
    $('.home-take__select-top span').html($(this).html());
    $(this).closest('.home-take__select').find('input').val($(this).html());
    $(this).closest('.home-take__select').toggleClass('active');
});
$('.header__burg-open').on('click', function (e) {
    e.preventDefault();
    $('.menu').addClass('active');
});
$('.header__burg-close').on('click', function (e) {
    e.preventDefault();
    $('.menu').removeClass('active');
});
$('.header__link').on('click', function (e) {
    e.preventDefault();
    $('.overlay-call').addClass('active');
    $('body').css("overflow", "hidden");
});
$('.popup-close').on('click', function (e) {
    $('body').css("overflow", "visible");
    var now = $(this);

    now.closest('.overlay').removeClass('active');

});
$('.overlay-call').on('mousedown', function (e) {
    if (!(($(e.target).parents('.popup-wrap').length) || ($(e.target).hasClass('popup-wrap')))) {
        $('body').css("overflow", "visible");

        $('.overlay-call').removeClass('active');
    }
});

$('.vid__toggle').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.vid').toggleClass('active');
});