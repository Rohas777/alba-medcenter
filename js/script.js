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


/* accordeon */

$(".dignity__item-head").click(function(){
    if(!$(this).parent('.dignity__item').hasClass("active")){
        $(".dignity__item.active").removeClass('active')
        $(this).parent('.dignity__item').addClass('active')
    } else {
        $(this).parent('.dignity__item').removeClass('active')
    }
})
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
