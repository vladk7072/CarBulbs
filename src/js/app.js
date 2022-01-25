import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

$(function () {

  $(".find__btn").click(function () {
    if (!$(this).hasClass("find__btn--active")) {
      $(".find__btn--active").removeClass("find__btn--active");
    }
    $($(this)).addClass("find__btn--active");
  });

  $(".bulbs__aside-item").click(function () {
    if (!$(this).hasClass("bulbs__aside-item--active")) {
      $(".bulbs__aside-item--active").removeClass("bulbs__aside-item--active");
    }
    $($(this)).addClass("bulbs__aside-item--active");
  });

  $(".chart__slide").click(function () {
    if (!$(this).hasClass("chart__slide--active")) {
      $(".chart__slide--active").removeClass("chart__slide--active");
    }
    $($(this)).addClass("chart__slide--active");
  });

  const fslider = new Swiper(".chart__slider", {
    slidesPerView: 11,
    spaceBetween: 15,
    freeMode: true,
    navigation: {
      nextEl: ".chart__button-next",
      prevEl: ".chart__button-prev",
    },
  });
});
