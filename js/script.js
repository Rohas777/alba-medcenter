import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
const swiper = new Swiper(".slider-swiper", {
    direction: "horizontal",
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 400,
    loop: true,
    autoplay: {
        delay: 5000,
    },
});

$(".slider-swiper .swiper-button-next").click(function () {
    swiper.slideNext();
});
$(".slider-swiper .swiper-button-prev").click(function () {
    swiper.slidePrev();
});
const dignity = new Swiper(".dignity-swiper", {
    direction: "horizontal",
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 400,
    loop: true,
    autoplay: {
        delay: 5000,
    },
});

$(".dignity-swiper .swiper-button-next").click(function () {
    dignity.slideNext();
});
$(".dignity-swiper .swiper-button-prev").click(function () {
    dignity.slidePrev();
});

$(".dropdown-link").click(function (e) {
    e.preventDefault();
});

const specialists = new Swiper(".specialists-swiper", {
    direction: "horizontal",
    spaceBetween: 30,
    slidesPerView: 4,
    speed: 400,
    loop: true,
    autoplay: {
        delay: 5000,
    },

    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

$(".specialists-swiper .swiper-button-next").click(function () {
    swiper.slideNext();
});
$(".specialists-swiper .swiper-button-prev").click(function () {
    swiper.slidePrev();
});

/* accordeon */

$(".accordeon__item-head").click(function () {
    if ($(".accordeon").hasClass("without-closing")) {
        $(this).parent(".accordeon__item").toggleClass("active");
        return;
    }

    if (!$(this).parent(".accordeon__item").hasClass("active")) {
        $(".accordeon__item.active").removeClass("active");
        $(this).parent(".accordeon__item").addClass("active");
    } else {
        $(this).parent(".accordeon__item").removeClass("active");
    }
});
