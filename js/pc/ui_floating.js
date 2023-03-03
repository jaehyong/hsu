fl_iw = $("body").width();
$(window).resize(function(){
  fl_iw = $(".hb_news_container").width();
});

if(fl_iw > 800) {
$(document).ready(function(){
  sct = parseInt($(".scroll_container").css("top"));
  $(window).scroll(function(){
    wsc = $(window).scrollTop();
    fl_sc = wsc + sct + "px";
    if(wsc > 2410){
      $(".scroll_container").addClass("scst")
    }
    else {
      $(".scroll_container").removeClass("scst")
    }
    $(".scroll_container").stop().animate({
      "top": fl_sc
    }, 500);
  }).scroll();
});

$(".sc_top_btn").click(function(){
  $("html").animate({"scrollTop": 0}, 500);
})
}