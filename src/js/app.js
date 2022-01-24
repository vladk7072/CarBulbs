import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

$(function(){
  $(".find__btn").click(function () {
    if(!$(this).hasClass('find__btn--active')){
      $(".find__btn--active").removeClass("find__btn--active")
    }
    $($(this)).addClass("find__btn--active");
  });
});
