/* offer slider */

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

/* dignity */

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

$(".dignity__item").first().children(".dignity__item-body").slideDown(0);

/* header */
$(window).load(function () {
    $(".header__logo")
        .animate({ top: "50%", marginTop: "+=" + 10 }, 200)
        .animate({ marginTop: "-=" + 20 }, 100)
        .animate({ marginTop: "+=" + 15 }, 80)
        .animate({ marginTop: "-=" + 5 }, 60);
});

$(".dropdown-link").click(function (e) {
    e.preventDefault();
});
if (window.matchMedia("(max-width: 992px)").matches) {
    $(".header__dropdown").click(function () {
        $(".header__popup").slideToggle(300);
        $(".header__dropdown").toggleClass("active");
    });
} else {
    $(".header__dropdown").hover(function () {
        $(".header__popup").fadeToggle(300);
    });
}
/* search popup */

$(".header__search-image").click(function () {
    $(".header__search-form").slideToggle(300);
});

/* responsive burger */
$(".burger__close").click(function () {
    $("nav").animate(
        {
            width: "toggle",
            opacity: 0,
        },
        300,
        function () {
            $("nav").css({
                display: "toggle",
            });
        }
    );
    $("html, body").css({
        overflow: "auto",
    });
    $(".header__popup").slideUp(300);
});
$(".header__burger").click(function () {
    $("nav").animate(
        {
            width: "toggle",
            opacity: 1,
        },
        300,
        function () {
            $("nav").css({
                display: "toggle",
            });
        }
    );
    $("html, body").css({
        overflow: "hidden",
    });
});

/* specialists slider */

function checkPosition() {
    if (window.matchMedia("(min-width: 993px)").matches) {
        return 4;
    } else if (window.matchMedia("(min-width: 471px)").matches) {
        return 2;
    } else {
        return 1;
    }
}

const specialists = new Swiper(".specialists-swiper", {
    direction: "horizontal",
    spaceBetween: 30,
    slidesPerView: checkPosition(),
    slidesPerGroup: checkPosition(),
    speed: 400,
    loop: true,
    autoplay: {
        delay: 5000,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

$(".specialists-swiper .swiper-button-next").click(function () {
    swiper.slideNext();
});
$(".specialists-swiper .swiper-button-prev").click(function () {
    swiper.slidePrev();
});

/* appointment popup */

$(".appointment__close").click(function () {
    $("body").css({ overflow: "auto" });
    $(".appointment").fadeOut(300);
});

/* callback & appointment popup */

$(".callback, .openModal").click(function (e) {
    e.preventDefault();
    $(".appointment").fadeIn(300);
    $("body").css({ overflow: "hidden" });
});

/* legal-info */

const legalPageTitles = [
    "Правовая информация",
    "Информация о методах оказания медицинской помощи",
    "Лицензия",
    "Перечень оказываемых платных услуг с ценами",
    "Обращения (претензии)",
    "Сроки ожидания предоставления услуг",
];
const info = $(".info").get();

$(".info").hide();
$(info[0]).show();

$(".legal__nav-item").click(function () {
    $(".legal__nav-item.active").removeClass("active");
    $(this).addClass("active");
    $(".hero__nav span").html(legalPageTitles[$(this).attr("id") - 1]);

    $("html,body").animate(
        {
            scrollTop: $(".legal").offset().top,
        },
        "fast"
    );

    info.forEach((element) => {
        if ($(element).attr("id") !== $(this).attr("id")) {
            $(element).fadeOut(0);
        } else {
            $(element).fadeIn(300);
        }
    });
});


/* accordeon */

$(".accordeon__item-head").click(function () {
    if ($(".accordeon").hasClass("without-closing")) {
        $(this).parent(".accordeon__item").toggleClass("active");
        $(this).next(".accordeon__item-body").slideToggle(300);
        return;
    }

    if (!$(this).parent(".accordeon__item").hasClass("active")) {
        $(".accordeon__item.active .accordeon__item-body").slideUp(300);
        $(".accordeon__item.active").removeClass("active");
        $(this).parent(".accordeon__item").addClass("active");
        $(this).next(".accordeon__item-body").slideDown(300);
    } else {
        $(".accordeon__item.active .accordeon__item-body").slideUp(300);
        $(this).parent(".accordeon__item").removeClass("active");
    }
});

/* fancybox gallery*/

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

/* animations on scroll */

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && $(entry.target).hasClass("stats")) {
            $(".stats h2").spincrement({
                thousandSeparator: "",
                duration: 2000,
            });
            observer.unobserve(document.querySelector(".stats"));
        }
        if (entry.isIntersecting && $(entry.target).hasClass("footer")) {
            $(".callback").addClass("scrolled");
        }

        if (entry.isIntersecting) {
            $(entry.target).addClass("scrolled");
        }

        if (!entry.isIntersecting && $(entry.target).hasClass("footer")) {
            $(".callback").removeClass("scrolled");
        }
    });
});

if (document.querySelector(".banner")) {
    observer.observe(document.querySelector(".banner"));
}
if (document.querySelector(".stats")) {
    observer.observe(document.querySelector(".stats"));
}
observer.observe(document.querySelector("footer"));
