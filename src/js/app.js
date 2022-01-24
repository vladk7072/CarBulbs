import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

$(function(){
  $(".find__btn").click(function () {
    if(!$(this).hasClass('find__btn--active')){
      $(".find__btn--active").removeClass("find__btn--active")
    }
    $($(this)).addClass("find__btn--active");
  });

  $(".bulbs__aside-item").click(function () {
    if(!$(this).hasClass('bulbs__aside-item--active')){
      $(".bulbs__aside-item--active").removeClass("bulbs__aside-item--active")
    }
    $($(this)).addClass("bulbs__aside-item--active");
  });
});
