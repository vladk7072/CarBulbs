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

  $(".header__search-btn").click(function () {
    $(".header__input").toggleClass("header__input--active");
    $(".header__menu").removeClass("header__menu--active");
  });
  $(".header__burger-btn").click(function () {
    $(".header__menu").toggleClass("header__menu--active");
    $(".header__input").removeClass("header__input--active");
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

  var clientWidth = document.body.clientWidth;

  function resizeTaleSlider(clientWidth) {
    if (clientWidth < 611) {
      $(".ford-choose__slider").addClass("swiper");
      $(".ford-choose__items").addClass("swiper-wrapper");
      $(".ford-choose__item-slider").addClass("swiper-slide");
      var cslider = new Swiper(".ford-choose__slider",{
        spaceBetween: 15,
        pagination: {
          el: '.ford-choose__slider-pagination',
          clickable: true
        },
      });
    }
  }

  resizeTaleSlider(clientWidth);

  $(window).resize(function() {
    let clientWidth = document.body.clientWidth;
    resizeTaleSlider(clientWidth);
  });
});
